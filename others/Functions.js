// firestore functions
import firestore from "@react-native-firebase/firestore";

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

export const getPosts = async () => {
  const posts = new Array();

  const querySnapshot = await firestore()
    .collection("Posts")
    .orderBy("posttime", "desc")
    .get();
  querySnapshot.forEach((doc) => {
    const data = doc.data();
    posts.push(data);
  });

  return posts;
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
