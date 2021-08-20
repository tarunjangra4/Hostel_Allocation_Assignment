import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import firebase from 'firebase';
// import 'firebase/firestore';
import { BrowserRouter } from 'react-router-dom';

// firebase.initializeApp({
//     apiKey: "AIzaSyDMASwD7QlNC-uxsj1OHQiWI1cjMB86hcI",
//     authDomain: "hostel-allocation-assign-9111b.firebaseapp.com",
//     projectId: "hostel-allocation-assign-9111b",
//     storageBucket: "hostel-allocation-assign-9111b.appspot.com",
//     messagingSenderId: "89395400464",
//     appId: "1:89395400464:web:35105783562f296f00df95",
//     measurementId: "G-5TP843KX4R"
// })



ReactDOM.render(
    <BrowserRouter>
    <App />
    </BrowserRouter>,
  document.getElementById('root')
);


