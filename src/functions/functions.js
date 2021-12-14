

export const showError = (element, message) =>{
    let divError = document.querySelector(element);
    divError.innerHTML = `<p class="alert-error"> ¡${message}!</p>`;
    setTimeout(() => {
       divError.innerHTML=``;
    }, 3000);

 }