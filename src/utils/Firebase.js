import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAD2JrXyC70h3JioghrNUwJ8GcpFEC_YvE",
  authDomain: "netflixgpt-c4114.firebaseapp.com",
  projectId: "netflixgpt-c4114",
  storageBucket: "netflixgpt-c4114.appspot.com",
  messagingSenderId: "983297929048",
  appId: "1:983297929048:web:cf03538f485837c7fd3f2d",
  measurementId: "G-QLLS8DCY4B",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
