import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";
import { auth } from "./firebase.js";
import { showMessage } from "./showMessage.js";

const registerForm = document.querySelector("#register-form");
const emailInput = document.querySelector("#register-email");
const passwordInput = document.querySelector("#register-password");

// Expresión regular para validar el correo electrónico de Gmail y Hotmail
const emailRegex = /^[A-Za-z0-9._%+-]+@(gmail|hotmail)\.com$/;

// Expresión regular para validar la contraseña con al menos una letra mayúscula, un número y un caracter especial o símbolo
const passwordRegex =
  /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,15})(?!\s).*$/;

// Validar el correo electrónico al ingresar o modificar la información
emailInput.addEventListener("input", function () {
  if (!emailRegex.test(emailInput.value)) {
    emailInput.setCustomValidity(
      "Por favor ingrese un correo electrónico válido de Gmail o Hotmail"
    );
  } else {
    emailInput.setCustomValidity("");
  }
});

// Validar la contraseña al ingresar o modificar la información
passwordInput.addEventListener("input", function () {
  if (!passwordRegex.test(passwordInput.value)) {
    passwordInput.setCustomValidity(
      "La contraseña debe tener al menos 8 caracteres, no más de 15 caracteres, una letra mayúscula, un número y un caracter especial, y no debe contener espacios vacíos"
    );
  } else {
    passwordInput.setCustomValidity("");
  }
});

// Validar el formulario al momento de enviarlo
registerForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  if (!registerForm.checkValidity()) {
    registerForm.classList.add("was-validated");
    return;
  }

  const email = registerForm["register-email"].value;
  const password = registerForm["register-password"].value;

  try {
    const userCredentials = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(userCredentials);

    //Cerrar Modal
    const registerModal = bootstrap.Modal.getInstance(document.querySelector('#registerModal'))
    registerModal.hide();

    showMessage("Cuenta " + userCredentials.user.email + " registrada en RSDEVSFLIX!");

    
  } catch (error) {
    console.log(error.message);
    console.log(error.code);

    if (error.code === "auth/email-already-in-use") {
        showMessage("El email ya existe!", "error")
    } else if (error.code === "auth/invalid-email") {
        showMessage("Email invalido!", "error")
    } else if (error.code === "auth/weak-password ") {
        showMessage("Contraseña muy debil!", "error")
    } else if (error.code) {
        showMessage("Ha ocurrido un error!", "error")
    }
  }
});
