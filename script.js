const botonSi = document.getElementById("si");
const botonNo = document.getElementById("no");
const video = document.getElementById("videoFondo");

// Activar sonido cuando hagan click en cualquier parte
document.addEventListener("click", function() {
    video.muted = false;
    video.play();
});

// Botón SI
botonSi.addEventListener("click", function() {
    alert("Sabía que dirías que sí 😏💖");
});

// Botón NO huye
botonNo.addEventListener("mouseover", function() {
    const randomX = Math.random() * window.innerWidth;
    const randomY = Math.random() * window.innerHeight;

    botonNo.style.position = "absolute";
    botonNo.style.left = randomX + "px";
    botonNo.style.top = randomY + "px";
});
