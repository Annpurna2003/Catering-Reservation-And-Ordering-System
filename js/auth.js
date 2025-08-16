// for login and register logic
import {getFirestore,doc,setDoc,addDoc,collection}from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";
const db=getFirestore();
import {auth} from './firebase.js';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";
const registerBtn = document.getElementById("register");
if (registerBtn) {
  registerBtn.addEventListener("click", async () => {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
 if (!name || !email || !password) {
        alert("Please fill in all fields");
        return;
      }
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Create a document in 'users' collection
      await setDoc(doc(db, "register", user.uid), {
        uid: user.uid,
        name: name,
        email: email,
        createdAt: new Date().toISOString()
      });

      alert("Registration Successful");
      window.location.href = "login.html";
    } catch (error) {
      alert("Registration Failed: " + error.message);
    }
  });
}
//For Login
const loginBtn = document.getElementById("login");

if (loginBtn) {
  loginBtn.addEventListener("click", async () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (!email || !password) {
      alert("Please fill in both email and password");
      return;
    }

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Store login info
      await addDoc(collection(db, "login"), {
        uid: user.uid,
        email: user.email,
        timestamp: new Date().toISOString()
      });

      alert("Login Successful");
      window.location.href = "role.html";
    } catch (error) {
      console.error("Login error:", error.code, error.message);
      alert("Login Failed: " + error.code + " - " + error.message);
    }
  });
}


// toggle 
