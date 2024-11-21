import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDu7EnfWJPzhbpe4WnBKea_lB4bqESFW1o",
  authDomain: "shop-outdoor-bb623.firebaseapp.com",
  projectId: "shop-outdoor-bb623",
  storageBucket: "shop-outdoor-bb623.firebasestorage.app",
  messagingSenderId: "290093557739",
  appId: "1:290093557739:web:976dfc6dd3d34cdf509bae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore()

export default db