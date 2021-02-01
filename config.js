 import * as firebase from "firebase";

  var firebaseConfig = {
    apiKey: "AIzaSyDF-dqQ9kk7UfffLX_pL9pfnwWS40Z7hgI",
    authDomain: "school-attendance-app-b6237.firebaseapp.com",
    databaseURL:"https://school-attendance-app-b6237-default-rtdb.firebaseio.com/"
    projectId: "school-attendance-app-b6237.firebaseapp.com",
    storageBucket: "school-attendance-app-b6237.appspot.com",
    messagingSenderId: "353325499527",
    appId: "1:353325499527:web:837b97b982bd94490fa422"
  };
  
  export default !firebase.apps.length ? firebase.initializeApp(firebaseConfig): firebase.app();


  console.log(firebase.name);
  console.log(firebase.database());