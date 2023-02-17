import {
  GoogleAuthProvider,signInWithPopup} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";
import { auth } from "../app/firebase.js";
import { showMessage } from "../app/showMessage.js";

const googleButton = document.querySelector("#googleLogin");

googleButton.addEventListener("click", async () => {
  const provider = new GoogleAuthProvider();

  try {
    const credentials = await signInWithPopup(auth, provider);

    console.log(credentials);

    const googleModal = bootstrap.Modal.getInstance(document.querySelector("#loginModal"))
    googleModal.hide();
    showMessage('Bienvenido a RSDEVSFLIX '+credentials.user.displayName +"!")

  } catch (error) {
    console.log(error);
  }
});
