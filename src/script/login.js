import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";
const firebaseConfig = {
    apiKey: "AIzaSyDI0wz-iQj0fpOU4CDMlgrtnMjkwR-xAUs",
    authDomain: "fir-davaleba.firebaseapp.com",
    projectId: "fir-davaleba",
    storageBucket: "fir-davaleba.appspot.com",
    messagingSenderId: "681215977857",
    appId: "1:681215977857:web:539ee5dd4d462b88012080",
    measurementId: "G-MS0ZTFE5HQ"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const email = document.getElementById("email");
const password = document.getElementById("password");
const login = document.getElementById("login");
login.addEventListener("click", (e) => {
    e.preventDefault();
    const emailValue = email.value;
    const passwordValue = password.value;
    console.log(emailValue, passwordValue);
    signInWithEmailAndPassword(auth, emailValue, passwordValue)
    .then((res) => {
        const user = res.user;
        console.log(user);
        localStorage.setItem("user", user.accessToken);
        window.location.href = "home.html";
    }).catch((error)=> {
        alert(error.message);
    })
    
 });