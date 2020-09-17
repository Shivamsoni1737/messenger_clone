
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyAAnqd7HtWr7r3wR2ESIaYNmDIZGtoBVwU",
        authDomain: "facebook-messenger-clone-23415.firebaseapp.com",
        databaseURL: "https://facebook-messenger-clone-23415.firebaseio.com",
        projectId: "facebook-messenger-clone-23415",
        storageBucket: "facebook-messenger-clone-23415.appspot.com",
        messagingSenderId: "268003474762",
        appId: "1:268003474762:web:758e2912659bf985c3d5b3",
        measurementId: "G-QRTD4METYR"
})

const db = firebaseApp.firestore();

export default db;
