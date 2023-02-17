
export const showMessage = (message, type = "success") => {
Toastify({
    text: message,
    duration: 3000,
    
    newWindow: true,
    close: true,
    gravity: "bottom", // `top` or `bottom`
    position: "center", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: type === "success" ? "green" : "red",
      
    },
    onClick: function(){} // Callback after click
  }).showToast();

}