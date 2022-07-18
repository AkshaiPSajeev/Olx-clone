
import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyCiAaA1UeydSXv7w5pUw6BJl6I-aSvnOKI",
    authDomain: "fir-6c6d6.firebaseapp.com",
    projectId: "fir-6c6d6",
    storageBucket: "fir-6c6d6.appspot.com",
    messagingSenderId: "102440673475",
    appId: "1:102440673475:web:5089cd75e4d9776d778276",
    measurementId: "G-VE669ET14B"
  };

  export default firebase.initializeApp(firebaseConfig)