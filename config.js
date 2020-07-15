import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyBzZweOJMCM4Ou2Co1dAjmm1jMMMTLHaU8",
    authDomain: "app1-24229.firebaseapp.com",
    databaseURL: "https://app1-24229.firebaseio.com",
    projectId: "app1-24229",
    storageBucket: "app1-24229.appspot.com",
    messagingSenderId: "368174728693",
    appId: "1:368174728693:web:f6242df82d259e0a844cbc",
    measurementId: "G-E3RZVQ1QG7"
  };


firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
