import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyAKH2uE30sCH83HyxzdiNCrmD8iWDbZFmg",
  authDomain: "taesung-7308d.firebaseapp.com",
  projectId: "taesung-7308d",
  storageBucket: "taesung-7308d.appspot.com",
  messagingSenderId: "686092291840",
  appId: "1:686092291840:web:3c3609b995fb314eae6de5",
  measurementId: "G-KR2T5L2954",
};

const app = initializeApp(firebaseConfig);

export const messaging = getMessaging(app);
