import  firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
 
 var firebaseConfig = {
    apiKey: "AIzaSyDhE8hK9AFDZfGYgosAklDzTJlk1Vq37x0",
    authDomain: "fierstore-demo.firebaseapp.com",
    databaseURL: "https://fierstore-demo.firebaseio.com",
    projectId: "fierstore-demo",
    storageBucket: "fierstore-demo.appspot.com",
    messagingSenderId: "200247023344",
    appId: "1:200247023344:web:a10923d3e74d45eaf95435"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;