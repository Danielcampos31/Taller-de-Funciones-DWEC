
function calcularIVA(precio, porcentajeIVA = 21) {
    return precio * porcentajeIVA / 100;
}

function precioConIVA(precio, porcentajeIVA = 21) {
    return precio + calcularIVA(precio, porcentajeIVA);
}

function aplicarDescuento(precio, porcentajeDescuento) {
    return precio - (precio * porcentajeDescuento / 100);
}

function redondear(numero, decimales = 2) {
    const factor = 10 ** decimales;
    return Math.round((numero + Number.EPSILON) * factor) / factor;
}

function formatearEuros(precio) {
    return precio.toLocaleString("es-ES", {
        style: "currency",
        currency: "EUR"
    });
}
