
/**
 * Calcula la cantidad de IVA de un precio.
 * @param {number} precio - Precio sin IVA.
 * @param {number} porcentajeIVA - Porcentaje de IVA (por defecto 21).
 * @returns {number} Cantidad de IVA que hay que pagar.
 */
function calcularIVA(precio, porcentajeIVA = 21) {
    return precio * porcentajeIVA / 100;
}

/**
 * Calcula el precio final sumando el IVA.
 * @param {number} precio - Precio sin IVA.
 * @param {number} porcentajeIVA - Porcentaje de IVA (por defecto 21).
 * @returns {number} Precio con IVA incluido.
 */
function precioConIVA(precio, porcentajeIVA = 21) {
    return precio + calcularIVA(precio, porcentajeIVA);
}

/**
 * Aplica un descuento a un precio.
 * @param {number} precio - Precio original.
 * @param {number} porcentajeDescuento - Porcentaje de descuento.
 * @returns {number} Precio después del descuento.
 */
function aplicarDescuento(precio, porcentajeDescuento) {
    return precio - (precio * porcentajeDescuento / 100);
}

/**
 * Redondea un número al número de decimales indicado.
 * @param {number} numero - Número que se quiere redondear.
 * @param {number} decimales - Cantidad de decimales (por defecto 2).
 * @returns {number} Número redondeado.
 */
function redondear(numero, decimales = 2) {
    const factor = 10 ** decimales;
    return Math.round((numero + Number.EPSILON) * factor) / factor;
}

/**
 * Convierte un número en un precio expresado en euros.
 * @param {number} precio - Cantidad que se quiere formatear.
 * @returns {string} Precio con formato español y símbolo del euro.
 */
function formatearEuros(precio) {
    return precio.toLocaleString("es-ES", {
        style: "currency",
        currency: "EUR"
    });
}

/**
 * Convierte grados Celsius a Fahrenheit.
 * @param {number} celsius - Temperatura en grados Celsius.
 * @returns {number} Temperatura en grados Fahrenheit.
 */
function celsiusAFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

/**
 * Convierte grados Fahrenheit a Celsius.
 * @param {number} fahrenheit - Temperatura en grados Fahrenheit.
 * @returns {number} Temperatura en grados Celsius.
 */
function fahrenheitACelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

/**
 * Comprueba si una contraseña tiene al menos ocho caracteres.
 * @param {string} contrasena - Contraseña que se quiere comprobar.
 * @returns {boolean} True si tiene ocho caracteres o más.
 */
function validarContrasena(contrasena) {
    return contrasena.length >= 8;
}

/**
 * Cuenta las palabras de un texto.
 * @param {string} texto - Texto que se quiere analizar.
 * @returns {number} Número de palabras del texto.
 */
function contarPalabras(texto) {
    const textoLimpio = texto.trim();

    if (textoLimpio === "") {
        return 0;
    }

    return textoLimpio.split(/\s+/).length;
}

/**
 * Convierte una temperatura entre Celsius y Fahrenheit.
 * @param {number} valor - Temperatura que se quiere convertir.
 * @param {string} de - Unidad de origen: C o F.
 * @param {string} a - Unidad de destino: C o F.
 * @returns {number|null} Temperatura convertida o null si las unidades no son válidas.
 */
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

/**
 * Comprueba si un texto alcanza una longitud mínima.
 * @param {string} texto - Texto que se quiere comprobar.
 * @param {number} minimo - Longitud mínima (por defecto 8).
 * @returns {boolean} True si alcanza la longitud mínima.
 */
function longitudSuficiente(texto, minimo = 8) {
    return texto.length >= minimo;
}

/**
 * Comprueba si un texto contiene alguna letra mayúscula.
 * @param {string} texto - Texto que se quiere comprobar.
 * @returns {boolean} True si contiene alguna mayúscula.
 */
function tieneMayuscula(texto) {
    return texto !== texto.toLowerCase();
}

/**
 * Comprueba si un texto contiene alguna letra minúscula.
 * @param {string} texto - Texto que se quiere comprobar.
 * @returns {boolean} True si contiene alguna minúscula.
 */
function tieneMinuscula(texto) {
    return texto !== texto.toUpperCase();
}

/**
 * Comprueba si un texto contiene algún número.
 * @param {string} texto - Texto que se quiere comprobar.
 * @returns {boolean} True si contiene algún dígito.
 */
function tieneNumero(texto) {
    return texto.split("").some(caracter => "0123456789".includes(caracter));
}

/**
 * Evalúa la seguridad de una contraseña según cuatro requisitos.
 * @param {string} texto - Contraseña que se quiere evaluar.
 * @returns {string} Nivel de seguridad: débil, media o fuerte.
 */
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

/**
 * Genera un número entero aleatorio entre dos límites, incluidos.
 * @param {number} min - Límite mínimo.
 * @param {number} max - Límite máximo.
 * @returns {number} Número entero aleatorio.
 */
function numeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Selecciona un carácter aleatorio de un conjunto de caracteres.
 * @param {string} conjunto - Texto con los caracteres posibles.
 * @returns {string} Un carácter aleatorio o un texto vacío si no hay caracteres.
 */
function caracterAleatorio(conjunto) {
    if (conjunto.length === 0) {
        return "";
    }

    return conjunto[numeroAleatorio(0, conjunto.length - 1)];
}

/**
 * Genera una contraseña aleatoria con las opciones indicadas.
 * @param {number} longitud - Longitud de la contraseña, entre 6 y 30.
 * @param {Object} opciones - Opciones para incluir mayúsculas y números.
 * @param {boolean} [opciones.mayusculas=true] - Permite incluir mayúsculas.
 * @param {boolean} [opciones.numeros=true] - Permite incluir números.
 * @returns {string|null} Contraseña generada o null si la longitud no es válida.
 */
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

/**
 * Divide un texto en una lista de palabras, ignorando espacios repetidos.
 * @param {string} texto - Texto que se quiere dividir.
 * @returns {string[]} Lista de palabras.
 */
function palabras(texto) {
    const textoLimpio = texto.trim();

    if (textoLimpio === "") {
        return [];
    }

    return textoLimpio.split(/\s+/);
}

/**
 * Cuenta los caracteres de un texto, con espacios o sin ellos.
 * @param {string} texto - Texto que se quiere contar.
 * @param {boolean} conEspacios - Indica si se cuentan los espacios (por defecto true).
 * @returns {number} Número de caracteres.
 */
function contarCaracteres(texto, conEspacios = true) {
    if (conEspacios) {
        return texto.length;
    }

    return texto.replace(/\s/g, "").length;
}

/**
 * Busca la palabra más larga de un texto.
 * @param {string} texto - Texto que se quiere analizar.
 * @returns {string} Palabra más larga o texto vacío si no hay palabras.
 */
function palabraMasLarga(texto) {
    const lista = palabras(texto);

    if (lista.length === 0) {
        return "";
    }

    return lista.reduce((masLarga, palabra) => {
        return palabra.length > masLarga.length ? palabra : masLarga;
    });
}

/**
 * Calcula los minutos necesarios para leer un texto.
 * @param {string} texto - Texto que se quiere leer.
 * @param {number} ppm - Palabras leídas por minuto (por defecto 200).
 * @returns {number} Minutos de lectura redondeados hacia arriba.
 */
function minutosLectura(texto, ppm = 200) {
    const total = contarPalabras(texto);

    if (total === 0) {
        return 0;
    }

    return Math.ceil(total / ppm);
}
