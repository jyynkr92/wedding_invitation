import firebase from "firebase";

const firebaseKey = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MESUREMENT_ID,
};

firebase.initializeApp(firebaseKey);
export const firestore = firebase.firestore();

export function getMessageList() {
  firestore
    .collection("invitation")
    .get()
    .then(function (querySnapshot) {
      const messageList = [];

      querySnapshot.docs.forEach(function (doc) {
        messageList.push(doc.data());
      });

      console.log(messageList);
      return messageList;
    });
}

export function addMessage() {}

export function deleteMessage() {}

export function updateMessage() {}
