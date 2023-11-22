// import { initializeApp } from "firebase/app";
// import{getFirestore} from "firebase/firestore"
// import {GoogleAuthProvider, getAuth} from "firebase/auth";

// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCj0Ij7FuCC5cpf_iL23S3P5PKBuTV97pU",
//   authDomain: "blog-d1445.firebaseapp.com",
//   projectId: "blog-d1445",
//   storageBucket: "blog-d1445.appspot.com",
//   messagingSenderId: "648011318409",
//   appId: "1:648011318409:web:030f90a522a22c74e93258",
//   measurementId: "G-DNN903Z2VT"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// export const db= getFirestore(app)
// export const auth=getAuth(app)
// export const provider = new GoogleAuthProvider()





import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// import{getFirestore} from "firebase/firestore"
 import {GoogleAuthProvider, getAuth} from "firebase/auth";
 import{getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCj0Ij7FuCC5cpf_iL23S3P5PKBuTV97pU",
  authDomain: "blog-d1445.firebaseapp.com",
  projectId: "blog-d1445",
  storageBucket: "blog-d1445.appspot.com",
  messagingSenderId: "648011318409",
  appId: "1:648011318409:web:030f90a522a22c74e93258",
  measurementId: "G-DNN903Z2VT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db= getFirestore(app)
 export const auth=getAuth(app)
 export const provider = new GoogleAuthProvider()