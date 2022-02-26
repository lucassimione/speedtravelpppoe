 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 const firebaseConfig = {
   apiKey: "AIzaSyB72E8OuZZpzBt8GTQHDzfrFY56HVNslVs",
   authDomain: "cris-app-5a21f.firebaseapp.com",
   projectId: "cris-app-5a21f",
   storageBucket: "cris-app-5a21f.appspot.com",
   messagingSenderId: "29953400526",
   appId: "1:29953400526:web:d16c29f2e0b24c21087a9f"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 
 export{ app }