import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC2i3WEi7Jc6tRUQrnavId7tGwuAS0tFuM",
  authDomain: "twitter-clone-udemy-7e2cb.firebaseapp.com",
  projectId: "twitter-clone-udemy-7e2cb",
  storageBucket: "twitter-clone-udemy-7e2cb.appspot.com",
  messagingSenderId: "813989110690",
  appId: "1:813989110690:web:2f053e333b259e8ef5c8fb",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;
