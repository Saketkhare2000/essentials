import firebase from 'firebase';

var firebaseConfig = {
  apiKey: 'AIzaSyDpZIh6f5buL-IvCsRA0m-SCOy9ZfgqV-Q',
  authDomain: 'essential-softwares.firebaseapp.com',
  projectId: 'essential-softwares',
  storageBucket: 'essential-softwares.appspot.com',
  messagingSenderId: '446676690843',
  appId: '1:446676690843:web:b4616f55bd72d7b513633e',
  measurementId: 'G-CF8CCBNBBN',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const db = firebase.firestore();
