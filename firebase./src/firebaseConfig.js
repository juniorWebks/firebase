import firebase from 'firebase'
var config = {
  apiKey: "AIzaSyCpkFehH5dFNaq0dBJzpSpGCmd2sjf36Qc",
  authDomain: "ks-sandbox-2cc5e.firebaseapp.com",
  databaseURL: "https://ks-sandbox-2cc5e.firebaseio.com",
  projectId: "ks-sandbox-2cc5e",
  storageBucket: "ks-sandbox-2cc5e.appspot.com",
  messagingSenderId: "894593074412"
};
firebase.initializeApp(config);

export const database = firebase.database()
export const auth = firebase.auth()
//logowanie google
export const googleProvider = new firebase.auth.GoogleAuthProvider()


