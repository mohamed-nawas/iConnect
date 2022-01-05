// @refresh reset

import React from "react";
import { Bubble, GiftedChat, Time } from "react-native-gifted-chat";
import { AuthContext } from "../navigation/AuthProvider";
import firestore from "@react-native-firebase/firestore";
import { Image, View } from "react-native";
import {
  createChat,
  getChat,
  getUserData,
  markMsgStatus,
} from "../others/Functions";

const ChatRoom = ({ navigation, route }) => {
  const userid = route.params.userid;
  const { user } = React.useContext(AuthContext);
  const [messages, setMessages] = React.useState([]);
  const [chatImage, setChatImage] = React.useState(null);
  const [name, setName] = React.useState("ChatRoom");
  const [receiverId, setReceiverId] = React.useState(userid);
  const [shouldRender, setShouldRender] = React.useState(false);
  const mounted = React.useRef(true);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: name,
    });
  }, [navigation, name]);

  React.useEffect(() => {
    mounted.current = true;
    async function fetch() {
      const response = await getUserData(receiverId);
      if (mounted.current) {
        setChatImage(response.userimg);
        setName(response.name);
      }

      const chat = await getChat(user.uid, userid);

      if (chat) {
        const unsubscribe = firestore()
          .collection("Messages")
          .where("chatid", "==", chat)
          .onSnapshot((querySnapshot) => {
            const messages = querySnapshot
              .docChanges()
              .filter(({ type }) => type === "added")
              .map(({ doc }) => {
                const message = doc.data();
                return {
                  ...message,
                  createdAt: message.createdAt.toDate(),
                };
              })
              .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
            appendMessages(messages);
          });

        return () => unsubscribe();
      }
    }
    fetch();
    return () => (mounted.current = false);
  }, [shouldRender]);

  React.useEffect(() => {
    // set message state
    if (receiverId) {
      if (user.uid !== receiverId) {
        async function fetch() {
          const chat = await getChat(user.uid, userid);
          if (chat) {
            await markMsgStatus(user.uid, chat);
          }
        }
        fetch();
      }
    }
  }, [receiverId]);

  const appendMessages = React.useCallback(
    (messages) => {
      setMessages((previousMessages) =>
        GiftedChat.append(previousMessages, messages)
      );
    },
    [messages]
  );

  const handleSend = async (messages) => {
    // if there are no chats, create one
    const chat = await getChat(user.uid, userid);
    let chatid;
    if (!chat) {
      chatid = await createChat(user.uid, userid);
    }

    // increment the no of messages in the chat by one
    firestore()
      .collection("Chats")
      .doc(chat ? chat : chatid)
      .set(
        {
          noofmsgs: firestore.FieldValue.increment(1),
        },
        { merge: true }
      )
      .then(() => console.log("message count on chat increased by one"))
      .catch((e) => console.log(e));

    // add the messages
    const writes = messages.map((m) =>
      firestore()
        .collection("Messages")
        .add({
          ...m,
          sent: true,
          received: false,
          senderid: user.uid,
          receiverid: userid,
          chatid: chat ? chat : chatid,
        })
    );
    await Promise.all(writes);

    // add the latest msg to chat
    const writetochat = messages.find((m) =>
      firestore()
        .collection("Chats")
        .doc(chat ? chat : chatid)
        .set(
          {
            latestmsg: m,
            latestmsgsender: user.uid,
            latestmsgreceiver: userid,
          },
          { merge: true }
        )
    );
    await Promise.all(writetochat);

    if (!chat) {
      setShouldRender(true);
    }
  };

  const renderAvatar = () => (
    <View>
      <Image
        style={{ width: 50, height: 50, borderRadius: 25 }}
        source={{
          uri: chatImage
            ? chatImage ||
              "https://www.vhv.rs/dpng/d/188-1888496_tie-user-default-suit-display-contact-business-woman.png"
            : "https://www.vhv.rs/dpng/d/188-1888496_tie-user-default-suit-display-contact-business-woman.png",
        }}
      />
    </View>
  );

  const renderBubble = (props) => (
    <Bubble
      {...props}
      textStyle={{
        left: {
          color: "#000",
          fontSize: 16,
        },
        right: {
          color: "#fff",
          fontSize: 16,
        },
      }}
      wrapperStyle={{
        right: {
          backgroundColor: "#2e64e5",
          width: 200,
          borderColor: "#000",
          borderWidth: 1,
        },
        left: {
          backgroundColor: "#fff",
          width: 200,
          borderColor: "#000",
          borderWidth: 1,
        },
      }}
    />
  );

  return (
    <View
      style={{
        width: "100%",
        height: 620,
      }}
    >
      <GiftedChat
        messages={messages}
        user={{
          _id: user.uid,
        }}
        onSend={handleSend}
        renderAvatar={renderAvatar}
        renderBubble={renderBubble}
        showAvatarForEveryMessage={true}
        timeTextStyle={{
          left: {
            color: "#000",
            fontSize: 12,
          },
          right: {
            color: "#fff",
            fontSize: 12,
          },
        }}
      />
    </View>
  );
};

export default ChatRoom;
