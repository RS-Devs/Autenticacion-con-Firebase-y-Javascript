import {
    FacebookAuthProvider,signInWithPopup} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";
  import { auth } from "../app/firebase.js";
  import { showMessage } from "../app/showMessage.js";
  
  const facebookButton = document.querySelector("#facebookLogin");
  
  facebookButton.addEventListener("click", async () => {
    const provider = new FacebookAuthProvider();
  
    try {
      const credentials = await signInWithPopup(auth, provider);
  
      console.log(credentials);
  
      const facebookModal = bootstrap.Modal.getInstance(document.querySelector("#loginModal"))
      facebookModal.hide();
      showMessage('Bienvenido a RSDEVSFLIX '+credentials.user.displayName +"!")
  
    } catch (error) {
      console.log(error);
    }
  });
  