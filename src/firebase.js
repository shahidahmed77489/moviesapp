import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC-_fWfNrL13Dn8c-smbSxwNPhL0d_Pa1E",
  authDomain: "ourcompany-c443e.firebaseapp.com",
  projectId: "ourcompany-c443e",
  storageBucket: "ourcompany-c443e.appspot.com",
  messagingSenderId: "516602248938",
  appId: "1:516602248938:web:d50dc4a393c5425ce62193",
  databaseURL: "https://ourcompany-c443e-default-rtdb.firebaseio.com",
};

export const app = initializeApp(firebaseConfig);
