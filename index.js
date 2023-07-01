var respanseveNav =document.getElementById("respanseveNav");
var navLogo =document.getElementById ("navLogo");
function ouvre () {
    respanseveNav.style.display="flex";
    navLogo.style.animation="rotation 2s 1 linear";
}

function ferme () {
    respanseveNav.style.display="none";
    navLogo.style.animation="rotation 2s infinite linear;";
}