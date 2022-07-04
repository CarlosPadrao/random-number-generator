// JS AQUI

let result = document.querySelector(".result");
let bt = document.querySelector(".bt");

bt.addEventListener("click" , () => {
    let a = Math.trunc( Math.random() * 100) ; // range 100 // sem decimal
    result.innerHTML = a;
});