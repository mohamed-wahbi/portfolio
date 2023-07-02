var respanseveNav =document.getElementById("nav");
var navLogo =document.getElementById ("navLogo");
navLogo.addEventListener("click",()=>{
    respanseveNav.classList.toggle('mobile-menu')
})
respanseveNav.addEventListener("click",()=>{
    respanseveNav.classList.remove('mobile-menu')
})

var imageri = document.getElementById("imageri");
window.addEventListener('scroll',()=>{
    if (window.pageYOffset>200){
        imageri.classList.add("active");
    }
    else{
        imageri.classList.remove("active");
    }
})
