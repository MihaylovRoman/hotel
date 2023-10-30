const menu_text = document.querySelector('.menu-rotate');
const menu_open = document.querySelector('.menu-open');
const menu = document.querySelector('.menu');
menu_text.onmouseover = function(){
    menu.style.left = '-106px';
    menu_open.style.opacity = 1;
    menu_open.style.left = '0px';
}
menu_open.onmouseleave = function(){
    menu.style.left = '0px';
    menu_open.style.left = '-322px';
    menu_open.style.opacity = 0;
}
const error_message = "Some error!";
const success_message = "Success!";

let colorMessage;

const form = document.querySelector('.contacts__block');
form .addEventListener('submit', formSend);

async function formSend(event){
    event.preventDefault();

    const formData = new FormData(form);
    let responce = await fetch('./php/sendMail.php', {
        method: 'POST',
        body: formData,
        mode: 'no-cors'
    })
    if(responce.ok){
        colorMessage = "line-gradient(to right, #00b09b, #96c93d)";
        showToast(success_message, colorMessage)
        form.reset()
    }else{
        colorMessage = 'line-gradient(to right, red, red)'
        showToast(error_message, colorMessage);
    }
}

function showToast(message, colorMessage){
    Toastify({
        text: message,
        duration: 5000,
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: colorMessage,
        },
      }).showToast();
}