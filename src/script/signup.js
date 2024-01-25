import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyDI0wz-iQj0fpOU4CDMlgrtnMjkwR-xAUs",
    authDomain: "fir-davaleba.firebaseapp.com",
    projectId: "fir-davaleba",
    storageBucket: "fir-davaleba.appspot.com",
    messagingSenderId: "681215977857",
    appId: "1:681215977857:web:539ee5dd4d462b88012080",
    measurementId: "G-MS0ZTFE5HQ"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(firebaseApp);

const email = document.getElementById('email');
const password = document.getElementById('password');
const phone = document.getElementById('phone');
const address = document.getElementById('address');
const postalCode = document.getElementById('postalCode');


const register = document.getElementById("button");
const login = document.getElementById("login");
login.addEventListener("click", (e) => {
    e.preventDefault()
    window.location.href = "login.html"
})

register.addEventListener("click", (e) => {
    e.preventDefault();
    const emailValue = email.value;
    const passwordValue = password.value;
    console.log(emailValue, passwordValue);
    createUserWithEmailAndPassword(auth, emailValue, passwordValue)
    .then((res) => {
        const user = res.user;
        console.log(user);
        setDoc(doc(db, "users", user.uid),  {
            email: email.value,
            phone: phone.value,
            address: address.value,
            postal: postalCode.value,
        }).then(() => {
            console.log("user added");
            window.location.href = "home.html";
            localStorage.setItem("user", user.accessToken);
        }).catch((error) => {
            console.log(error);
        })
    }).catch((error)=> {
        alert(error.message);
    })
 });