import firebase from "firebase"

const config = {
  apiKey: "AIzaSyCRyf6TxofY-TS_OWuQJtc3WOEc9bR7yf4",
  authDomain: "birthdayapp-fe9df.firebaseapp.com",
  databaseURL: "https://birthdayapp-fe9df.firebaseio.com",
  projectId: "birthdayapp-fe9df",
  storageBucket: "birthdayapp-fe9df.appspot.com",
  messagingSenderId: "1007308745921",
};

firebase.initializeApp(config)

export default firebase;