import React from "react";
import { View, FlatList } from "react-native";
import ChatItem from "../components/ChatItem";
import { getChats, getUnreadMsgs, getUserData } from "../others/Functions";
import { AuthContext } from "../navigation/AuthProvider";
import ChatMenu from "../components/ChatMenu";
import { useIsFocused } from "@react-navigation/native";

const Chats = ({ navigation }) => {
  const { user } = React.useContext(AuthContext);
  const [chats, setChats] = React.useState(null);
  const mounted = React.useRef(true);
  const isFocused = useIsFocused();

  React.useEffect(() => {
    mounted.current = true;
    async function fetch() {
      const response = await getChats(user.uid);

      // console.log("response: ", response);

      const result = await Promise.all(
        response.map(async (e) => {
          let data = await getUserData(e.userid);
          const unreadMsgs = await getUnreadMsgs(e.chatid, user.uid);
          data.latestmsgsender = e.latestmsgsender;
          data.latestmsg = e.latestmsg;
          data.latestmsgtime = e.latestmsgtime;
          data.noofmsgs = e.noofmsgs;
          // data.chatid = e.chatid;
          data.unreadMsgs = unreadMsgs;
          return data;
        })
      );

      if (mounted.current) {
        setChats(result);
      }
    }
    fetch();
    return () => (mounted.current = false);
  }, [isFocused]);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: "#fbfbfb",
      }}
    >
      {chats ? <ChatMenu chats={chats} navigation={navigation} /> : null}
      <FlatList
        data={chats}
        renderItem={({ item }) => (
          <ChatItem item={item} navigation={navigation} />
        )}
      />
    </View>
  );
};

export default Chats;
