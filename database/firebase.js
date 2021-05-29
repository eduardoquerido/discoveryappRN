import * as firebase from 'firebase';
// import 'firebase/firestore'
// import firebase from 'firebase'
// import 'firebase/firestore'


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC9AKwfKaFUOwqzKs6eaQZNLmN_FVoZI3o",
    authDomain: "discoveryapp-reactn.firebaseapp.com",
    projectId: "discoveryapp-reactn",
    storageBucket: "discoveryapp-reactn.appspot.com",
    messagingSenderId: "501720967314",
    appId: "1:501720967314:web:7c4227c89b967a4a1f9e4b",
    measurementId: "G-NPF0Z4RC2M"
  };

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export default firebase


// import firebase from 'firebase'
// import 'firebase/firestore'


// const firebaseConfig = {
//     apiKey: "AIzaSyC9AKwfKaFUOwqzKs6eaQZNLmN_FVoZI3o",
//     authDomain: "discoveryapp-reactn.firebaseapp.com",
//     projectId: "discoveryapp-reactn",
//     storageBucket: "discoveryapp-reactn.appspot.com",
//     messagingSenderId: "501720967314",
//     appId: "1:501720967314:web:7c4227c89b967a4a1f9e4b",
//     measurementId: "G-NPF0Z4RC2M"
//   };
  
// firebase.initializeApp(firebaseConfig);

// const db = firebase.firestore()

// export default {
//     firebase,
//     db
// }