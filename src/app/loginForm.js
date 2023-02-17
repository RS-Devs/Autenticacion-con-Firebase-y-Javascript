import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";
import { auth } from "../app/firebase.js";
import { showMessage } from "../app/showMessage.js";
const loginForm = document.querySelector("#login-form");

loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = loginForm["login-email"].value;
  const password = loginForm["login-password"].value;

  try {
    const credentials = await signInWithEmailAndPassword(auth, email, password);
    console.log(credentials);

    const loginModal = bootstrap.Modal.getInstance(document.querySelector('#loginModal'))
    loginModal.hide();

    showMessage('Bienvenido a RSDEVSFLIX '+ credentials.user.email+' !')


  } catch (error) {
    if (error.code === "auth/wrong-password") {
      showMessage("Contraseña incorrecta!", "error");
    } else if (error.code === "auth/user-not-found") {
      showMessage("Usuario no encontrado!", "error");
    } else {
      showMessage(error.message, "error");
    }
  }
});
