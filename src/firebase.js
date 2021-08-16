import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAAIaD-A9BbcDiZjusG_3lORlXdjS0WCT8",
    authDomain: "linkedin-clone-yt-47e03.firebaseapp.com",
    projectId: "linkedin-clone-yt-47e03",
    storageBucket: "linkedin-clone-yt-47e03.appspot.com",
    messagingSenderId: "453920755586",
    appId: "1:453920755586:web:15aef7e72bb3a9c92dc99b"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebaseApp.auth();


  export {db,auth};