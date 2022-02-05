import firebase from 'firebase';

const firebaseConfig ={
    // apiKey: "AIzaSyAwnAVPW72vIMeUPpUbKn-eHJshHi16KnA",
    // authDomain: "stack-wich.firebaseapp.com",
    // projectId: "stack-wich",
    // storageBucket: "stack-wich.appspot.com",
    // messagingSenderId: "655214142840",
    // appId: "1:655214142840:web:4a8700ff382b5b9439548d",
    // measurementId: "G-LBME3C3E9D"
}

const fire=firebase.initializeApp(firebaseConfig);


export default fire;