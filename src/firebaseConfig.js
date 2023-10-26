
import { initializeApp } from 'firebase/app';
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: 'AIzaSyAwo8DnuelpCEgJmUtPUzflT6qVwSDsW9Y',
  authDomain: 'clickcourse.firebaseapp.com',
  projectId: 'clickcourse',
  storageBucket: 'clickcourse.appspot.com',
  messagingSenderId: '481695613184',
  appId: '1:481695613184:web:0daf1f0c856b2a2687b3e5',
};


const app = initializeApp(firebaseConfig);

export const db =  getFirestore(app)