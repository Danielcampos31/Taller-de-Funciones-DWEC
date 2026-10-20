
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


function celsiusAFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function fahrenheitACelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function validarContrasena(contrasena) {
    return contrasena.length >= 8;
}


function contarPalabras(texto) {
    const textoLimpio = texto.trim();

    if (textoLimpio === "") {
        return 0;
    }

    return textoLimpio.split(/\s+/).length;
}


/* A. Conversión de temperaturas */

function convertirTemperatura(valor, de, a) {
    if (de === a) {
        return valor;
    }

    if (de === "C" && a === "F") {
        return celsiusAFahrenheit(valor);
    }

    if (de === "F" && a === "C") {
        return fahrenheitACelsius(valor);
    }

    return null;
}


/* B. Validador de contraseñas */

function longitudSuficiente(texto, minimo = 8) {
    return texto.length >= minimo;
}

function tieneMayuscula(texto) {
    return texto !== texto.toLowerCase();
}

function tieneMinuscula(texto) {
    return texto !== texto.toUpperCase();
}

function tieneNumero(texto) {
    return texto.split("").some(caracter => "0123456789".includes(caracter));
}

function evaluarContrasena(texto) {
    let puntos = 0;

    if (longitudSuficiente(texto)) puntos++;
    if (tieneMayuscula(texto)) puntos++;
    if (tieneMinuscula(texto)) puntos++;
    if (tieneNumero(texto)) puntos++;

    if (puntos === 4) {
        return "fuerte";
    }

    if (puntos === 3) {
        return "media";
    }

    return "débil";
}


/* C. Generador de contraseñas */

function numeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function caracterAleatorio(conjunto) {
    if (conjunto.length === 0) {
        return "";
    }

    return conjunto[numeroAleatorio(0, conjunto.length - 1)];
}

function generarContrasena(longitud = 12, opciones = {}) {
    if (!Number.isInteger(longitud) || longitud < 6 || longitud > 30) {
        return null;
    }

    const mayusculas = opciones.mayusculas ?? true;
    const numeros = opciones.numeros ?? true;

    const minusculas = "abcdefghijklmnopqrstuvwxyz";
    const letrasMayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const digitos = "0123456789";

    let conjunto = minusculas;

    if (mayusculas) {
        conjunto += letrasMayusculas;
    }

    if (numeros) {
        conjunto += digitos;
    }

    let contrasena = "";

    for (let i = 0; i < longitud; i++) {
        contrasena += caracterAleatorio(conjunto);
    }

    return contrasena;
}


/* D. Funciones adicionales del contador */

function palabras(texto) {
    const textoLimpio = texto.trim();

    if (textoLimpio === "") {
        return [];
    }

    return textoLimpio.split(/\s+/);
}

function contarCaracteres(texto, conEspacios = true) {
    if (conEspacios) {
        return texto.length;
    }

    return texto.replace(/\s/g, "").length;
}

function palabraMasLarga(texto) {
    const lista = palabras(texto);

    if (lista.length === 0) {
        return "";
    }

    return lista.reduce((masLarga, palabra) => {
        return palabra.length > masLarga.length ? palabra : masLarga;
    });
}

function minutosLectura(texto, ppm = 200) {
    const total = contarPalabras(texto);

    if (total === 0) {
        return 0;
    }

    return Math.ceil(total / ppm);
}
