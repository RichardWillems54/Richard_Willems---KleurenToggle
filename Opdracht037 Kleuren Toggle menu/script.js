const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");
const home = document.getElementById("home");
const rood = document.getElementById("rood");
const oranje = document.getElementById("oranje");
const paars = document.getElementById("paars");
const groen = document.getElementById("groen");

menu.style.visibility = "hidden";


hamburger.addEventListener("mouseover", function () {
    menu.style.visibility = "visible";
    home.addEventListener("click", function () {
        document.body.style.backgroundColor = "gray";
        menu.style.visibility = "hidden";
    });

    rood.addEventListener("click", function () {
        document.body.style.backgroundColor = "red";
        menu.style.visibility = "hidden";
    });

    oranje.addEventListener("click", function () {
        document.body.style.backgroundColor = "orange";
        menu.style.visibility = "hidden";
    });

    paars.addEventListener("click", function () {
        document.body.style.backgroundColor = "purple";
        menu.style.visibility = "hidden";
    });

    groen.addEventListener("click", function () {
        document.body.style.backgroundColor = "green";
        menu.style.visibility = "hidden";
    });
});