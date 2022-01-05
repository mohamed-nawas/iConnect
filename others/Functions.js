// firestore functions
import firestore from "@react-native-firebase/firestore";
import moment from "moment";

export const createUser = (name, mail, phone, pwd, userid) => {
  firestore()
    .collection("Users")
    .add({
      userid: userid,
      name: name,
      mail: mail,
      pwd: pwd,
      phone: phone,
    })
    .then(() => console.log("User added to collection"))
    .catch((e) => console.log(e));
};

export const createProfilePost = (userid, postimg) => {
  firestore()
    .collection("Posts")
    .add({
      userid: userid,
      isprofile: true,
      postimg: postimg,
      posttime: new Date(Date.now()),
      likes: 0,
      comments: 0,
      share: 0,
    })
    .then(() => console.log("Profile picture post created"))
    .catch((e) => console.log(e));

  firestore()
    .collection("Users")
    .where("userid", "==", userid)
    .get()
    .then((querySnapshot) => {
      querySnapshot.docs.find(async (doc) => {
        const id = doc.id;
        await firestore()
          .collection("Users")
          .doc(id)
          .set(
            {
              photos: firestore.FieldValue.arrayUnion(postimg),
            },
            { merge: true }
          )
          .then(() => console.log("Image added to photo collection"))
          .catch((e) => console.log(e));
      });
    })
    .catch((e) => console.log(e));
};

export const createPost = (userid, postimg, post) => {
  firestore()
    .collection("Posts")
    .add({
      userid: userid,
      isprofile: false,
      post: post,
      postimg: postimg,
      posttime: new Date(Date.now()),
      likes: 0,
      comments: 0,
      share: 0,
    })
    .then(() => console.log("post created"))
    .catch((e) => console.log(e));

  if (postimg) {
    firestore()
      .collection("Users")
      .where("userid", "==", userid)
      .get()
      .then((querySnapshot) => {
        querySnapshot.docs.find(async (doc) => {
          const id = doc.id;
          await firestore()
            .collection("Users")
            .doc(id)
            .set(
              {
                photos: firestore.FieldValue.arrayUnion(postimg),
              },
              { merge: true }
            )
            .then(() => console.log("Image added to photo collection"))
            .catch((e) => console.log(e));
        });
      })
      .catch((e) => console.log(e));
  }
};

export const follow = (follower_userid, following_userid) => {
  firestore()
    .collection("Users")
    .where("userid", "==", follower_userid)
    .get()
    .then((querySnapshot) => {
      querySnapshot.docs.find(async (doc) => {
        const id = doc.id;
        await firestore()
          .collection("Users")
          .doc(id)
          .set(
            {
              following_userid:
                firestore.FieldValue.arrayUnion(following_userid),
            },
            { merge: true }
          )
          .then(() => console.log("following added to current user"))
          .catch((e) => console.log(e));
      });
    })
    .catch((e) => console.log(e));

  firestore()
    .collection("Users")
    .where("userid", "==", following_userid)
    .get()
    .then((querySnapshot) => {
      querySnapshot.docs.find(async (doc) => {
        const id = doc.id;
        await firestore()
          .collection("Users")
          .doc(id)
          .set(
            {
              follower_userid: firestore.FieldValue.arrayUnion(follower_userid),
            },
            { merge: true }
          )
          .then(() => console.log("follower added to other user"))
          .catch((e) => console.log(e));
      });
    })
    .catch((e) => console.log(e));
};

export const unfollow = (follower_userid, following_userid) => {
  firestore()
    .collection("Users")
    .where("userid", "==", follower_userid)
    .get()
    .then((querySnapshot) => {
      querySnapshot.docs.find(async (doc) => {
        const id = doc.id;
        await firestore()
          .collection("Users")
          .doc(id)
          .set(
            {
              following_userid:
                firestore.FieldValue.arrayRemove(following_userid),
            },
            { merge: true }
          )
          .then(() => console.log("following removed from current user"))
          .catch((e) => console.log(e));
      });
    })
    .catch((e) => console.log(e));

  firestore()
    .collection("Users")
    .where("userid", "==", following_userid)
    .get()
    .then((querySnapshot) => {
      querySnapshot.docs.find(async (doc) => {
        const id = doc.id;
        await firestore()
          .collection("Users")
          .doc(id)
          .set(
            {
              follower_userid:
                firestore.FieldValue.arrayRemove(follower_userid),
            },
            { merge: true }
          )
          .then(() => console.log("follower removed from other user"))
          .catch((e) => console.log(e));
      });
    })
    .catch((e) => console.log(e));
};

export const checkIsFollowing = async (current_userid, other_userid) => {
  let isFollowing;

  const querySnapshot = await firestore()
    .collection("Users")
    .where("userid", "==", current_userid)
    .get();
  querySnapshot.docs.find((doc) => {
    const { following_userid } = doc.data();
    if (following_userid) {
      isFollowing = following_userid.includes(other_userid);
    }
  });

  return isFollowing;
};

export const getUserData = async (userid) => {
  let response;

  const querySnapshot = await firestore()
    .collection("Users")
    .where("userid", "==", userid)
    .get();
  querySnapshot.forEach((doc) => {
    const data = doc.data();
    response = data;
  });

  return response;
};

export const getSortedChatUser = async (chatsarr) => {
  const array = new Array();
  const promises = chatsarr.map(async (c) => {
    const userdata = await getUserData(c.userid);
    array.push({
      name: userdata.name,
      userimg: userdata.userimg,
      userid: c.userid,
    });
  });
  await Promise.all(promises);

  return array;
};

export const markMsgStatus = async (recieverid, chatid) => {
  await firestore()
    .collection("Messages")
    .where("receiverid", "==", recieverid)
    .where("chatid", "==", chatid)
    .where("received", "==", false)
    .get()
    .then((querySnapshot) => {
      querySnapshot.docs.forEach(async (doc) => {
        await firestore()
          .collection("Messages")
          .doc(doc.id)
          .update({
            sent: true,
            received: true,
          })
          .then(() => {
            console.log("message updated");
          })
          .catch((e) => console.log(e));
      });
    })
    .catch((e) => console.log(e));
};

export const createChat = async (userid1, userid2) => {
  let response;

  await firestore()
    .collection("Chats")
    .add({
      userid1: userid1,
      userid2: userid2,
    })
    .then((doc) => {
      response = doc.id;
    })
    .catch((e) => console.log(e));

  return response;
};

export const getChat = async (userid_1, userid_2) => {
  let response;

  const querySnapshot = await firestore()
    .collection("Chats")
    .where("userid1", "in", [userid_1, userid_2])
    .get();
  querySnapshot.forEach((doc) => {
    const { userid2 } = doc.data();
    if (userid2 === userid_1 || userid2 === userid_2) {
      const data = doc.id;
      response = data;
    }
  });

  return response;
};

export const getUnreadMsgs = async (chatid, receiverid) => {
  const querySnapshot = await firestore()
    .collection("Messages")
    .where("chatid", "==", chatid)
    .where("receiverid", "==", receiverid)
    .where("sent", "==", true)
    .where("received", "==", false)
    .get();

  const result = querySnapshot.docs.length;
  return result;
};

export const getChats = async (userid) => {
  const response = new Array();

  const querySnapshot = await firestore()
    .collection("Chats")
    .where("userid1", "==", userid)
    .orderBy("latestmsg.createdAt", "desc")
    .get();
  querySnapshot.forEach((doc) => {
    const data = doc.data();
    const chatid = doc.id;
    response.push({
      chatid: chatid,
      userid: data.userid2,
      latestmsg: data.latestmsg.text,
      latestmsgtime: moment(data.latestmsg.createdAt.toDate()).fromNow(true),
      latestmsgsender: data.latestmsgsender,
      latestmsgreceiver: data.latestmsgreceiver,
      noofmsgs: data.noofmsgs,
    });
  });

  const querySnapshot1 = await firestore()
    .collection("Chats")
    .where("userid2", "==", userid)
    .orderBy("latestmsg.createdAt", "desc")
    .get();
  querySnapshot1.forEach((doc) => {
    const data = doc.data();
    const chatid = doc.id;
    response.push({
      chatid: chatid,
      userid: data.userid1,
      latestmsg: data.latestmsg.text,
      latestmsgtime: moment(data.latestmsg.createdAt.toDate()).fromNow(true),
      latestmsgsender: data.latestmsgsender,
      latestmsgreceiver: data.latestmsgreceiver,
      noofmsgs: data.noofmsgs,
    });
  });

  return response;
};

export const getPosts = async (postsPerLoad) => {
  const posts = new Array();

  const querySnapshot = await firestore()
    .collection("Posts")
    .orderBy("posttime", "desc")
    .limit(postsPerLoad)
    .get();
  const lastVisible = querySnapshot.docs[querySnapshot.docs.length - 1];
  querySnapshot.forEach((doc) => {
    const data = doc.data();
    posts.push(data);
  });

  return { posts, lastVisible };
};

export const getMorePosts = async (startAfter, postsPerLoad) => {
  const posts = new Array();
  const querySnapshot = await firestore()
    .collection("Posts")
    .orderBy("posttime", "desc")
    .startAfter(startAfter)
    .limit(postsPerLoad)
    .get();
  const lastVisible = querySnapshot.docs[querySnapshot.docs.length - 1];
  querySnapshot.forEach((doc) => {
    const data = doc.data();
    posts.push(data);
  });
  return { posts, lastVisible };
};

export const getUserPosts = async (userId, postsPerLoad) => {
  const posts = new Array();
  const querySnapshot = await firestore()
    .collection("Posts")
    .where("userid", "==", userId)
    .orderBy("posttime", "desc")
    .limit(postsPerLoad)
    .get();
  const lastVisible = querySnapshot.docs[querySnapshot.docs.length - 1];
  querySnapshot.forEach((doc) => {
    const data = doc.data();
    posts.push(data);
  });
  return { posts, lastVisible };
};

export const getMoreUserPosts = async (userId, startAfter, postsPerLoad) => {
  const posts = new Array();
  const querySnapshot = await firestore()
    .collection("Posts")
    .where("userid", "==", userId)
    .orderBy("posttime", "desc")
    .startAfter(startAfter)
    .limit(postsPerLoad)
    .get();
  const lastVisible = querySnapshot.docs[querySnapshot.docs.length - 1];
  querySnapshot.forEach((doc) => {
    const data = doc.data();
    posts.push(data);
  });
  return { posts, lastVisible };
};

export const updateUser = (userid, userdata, imgurl) => {
  firestore()
    .collection("Users")
    .where("userid", "==", userid)
    .get()
    .then((querySnapshot) => {
      querySnapshot.docs.find(async (doc) => {
        const id = doc.id;
        await firestore()
          .collection("Users")
          .doc(id)
          .set(
            {
              name: userdata.name,
              dob: userdata.dob,
              phone: userdata.phone,
              location: userdata.location,
              caption: userdata.caption,
              userimg: imgurl,
            },
            { merge: true }
          )
          .then(() => console.log("User data updated"))
          .catch((e) => console.log(e));
      });
    })
    .catch((e) => console.log(e));
};
