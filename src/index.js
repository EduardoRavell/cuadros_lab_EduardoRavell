import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBpnLgIdGihY_Ed0aG89Iw_4qNF8WHPMVs",
  authDomain: "cuadros-lab.firebaseapp.com",
  projectId: "cuadros-lab",
  storageBucket: "cuadros-lab.appspot.com",
  messagingSenderId: "291682579406",
  appId: "1:291682579406:web:3c4933e2ef446fce66719f"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
 
      
        <App />
      


  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
