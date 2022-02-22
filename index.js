import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js";
import { getAuth, signInWithEmailAndPassword,createUserWithEmailAndPassword ,signOut} from "https://www.gstatic.com/firebasejs/9.6.7/firebase-auth.js";

const firebaseConfig = {
apiKey: "AIzaSyB5cw0ZRhDu0hM6-ITmcjoNUWWAmUCtpys",
authDomain: "avataar-2.firebaseapp.com",
projectId: "avataar-2",
storageBucket: "avataar-2.appspot.com",
messagingSenderId: "545171439153",
appId: "1:545171439153:web:8286ecaa4b9e9d69d11f10"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.getElementById("reg-btn").addEventListener('click',function(){
    document.getElementById("login-div").style.display="none";
    document.getElementById("register-div").style.display="inline";
});

document.getElementById("log-btn").addEventListener('click',function(){
    document.getElementById("login-div").style.display="inline";
    document.getElementById("register-div").style.display="none";
});

document.getElementById("login-btn").addEventListener('click',function(){
    const loginEmail=document.getElementById("login-email").value;
    const loginPassword=document.getElementById("login-password").value;
    
    signInWithEmailAndPassword(auth, loginEmail, loginPassword)
   .then((userCredential) => {
   
    const user = userCredential.user;
    document.getElementById("result-box").style.display="inline";
    document.getElementById("login-div").style.display="none";
    document.getElementById("result").innerHTML="Welcome 👋"+loginEmail+"<br> You are Logged-In successfully";
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    document.getElementById("result-box").style.display="inline";
    document.getElementById("login-div").style.display="none";
    document.getElementById("result").innerHTML="Sorry!! <br>"+errorCode+errorMessage;
 });
});

 
document.getElementById("register-btn").addEventListener('click',function(){
    const registerEmail=document.getElementById("register-email").value;
    const registerPassword=document.getElementById("register-password").value;
    
    createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
  .then((userCredential) => {
   
    const user = userCredential.user;
    document.getElementById("result-box").style.display="inline";
    document.getElementById("register-div").style.display="none";
    document.getElementById("result").innerHTML="Welcome 👋"+loginEmail+"<br> You are Signed-Up successfully";
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    document.getElementById("result-box").style.display="inline";
    document.getElementById("register-div").style.display="none";
    document.getElementById("result").innerHTML="Sorry!! <br>"+errorCode+errorMessage;
 });
});

document.getElementById("log-out-btn").addEventListener('click',function(){
    signOut(auth).then(() => {
        document.getElementById("result-box").style.display="none";
        document.getElementById("login-div").style.display="inline";
      }).catch((error) => {
        document.getElementById("result").innerHTML="Sorry!! <br>"+errorMessage;
      });


});
