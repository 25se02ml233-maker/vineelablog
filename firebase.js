`import { initializeApp } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyDAVS0nYJouL-w-xcazvVSI0nydKvibWUM",
    authDomain: "vineela-blog.firebaseapp.com",
    projectId: "vineela-blog",
    storageBucket: "vineela-blog.firebasestorage.app",
    messagingSenderId: "613899947556",
    appId: "1:613899947556:web:776f8ff7f412d559d592b1"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);`