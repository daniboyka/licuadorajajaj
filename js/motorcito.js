var estadoLicuadora = "apagado";
var licuadora = document.getElementById("blander");
var sonidoLicuadora = document.getElementById("blender-sonido");
var botonLicuadora = document.getElementById("blender-button-sonido");

function controlarLicuadora () {
    if (estadoLicuadora == "apagado") {
        estadoLicuadora = "encendido";
        hacerBrrBrr()
        licuadora.classList.add("active");
        /* console.log("me prediste") */
    } else {
        estadoLicuadora = "apagado";
        hacerBrrBrr()
        licuadora.classList.remove("active")
        /* console.log("me apagaste"); */
    }
}

function hacerBrrBrr() {
    if(sonidoLicuadora.paused) { //pause o onpause
        botonLicuadora.play();
        sonidoLicuadora.play();
    } else {
        botonLicuadora.play();
        sonidoLicuadora.pause()
        sonidoLicuadora.currentTime = 0
    }

}