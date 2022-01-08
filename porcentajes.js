let precioUser = document.getElementById("precio-inicial");
let descuentoUser = document.getElementById("descuento-inicial");
let outputPrecioUser = document.getElementById("preio-original-output");
let outputDescuentoUser = document.getElementById("descuento-usuario");
let outputPrecioDescontado = document.getElementById("precio-con-descuento");
let outputAhorrado = document.getElementById("dinero-ahorrado");

function calcularDescuento() {
    if (precioUser.value === "") {
        outputPrecioUser.innerText = "No has insertado un precio de producto"
    } else if (descuentoUser.value === "") {
        outputDescuentoUser.innerText = "No has insertado un descuento a aplicar"
    } else  {
        outputPrecioUser.innerText = precioUser.value + "€";
        outputDescuentoUser.innerText = descuentoUser.value + "%";
        let precioARestar = precioUser.value * (descuentoUser.value / 100);
        let precioDescontado = precioUser.value - precioARestar;
        outputPrecioDescontado.innerText = precioDescontado.toFixed(2) + "€";
        outputAhorrado.innerText =  precioARestar.toFixed(2) + "€";
    }
}