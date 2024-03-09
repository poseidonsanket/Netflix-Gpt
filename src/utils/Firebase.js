import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAAFhZJUeZOpQw13JjXnmKH6_fEwsHNZ0w",
  authDomain: "netflixgpt-5a7c6.firebaseapp.com",
  projectId: "netflixgpt-5a7c6",
  storageBucket: "netflixgpt-5a7c6.appspot.com",
  messagingSenderId: "398348495903",
  appId: "1:398348495903:web:af76b7da71e0c0106ab92a",
  measurementId: "G-673C42F5N5",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
