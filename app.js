
/* Comprueba que un campo contiene un número válido */
function esNumeroValido(texto) {
    return texto.trim() !== "" && Number.isFinite(Number(texto));
}

/* Muestra un mensaje en la herramienta correspondiente */
function mostrarResultado(id, mensaje, error = false) {
    const resultado = document.getElementById(id);
    resultado.textContent = mensaje;
    resultado.style.color = error ? "red" : "green";
}

/* Calcula el precio con IVA */
function manejarIVA() {
    const precioTexto = document.getElementById("precio").value;
    const ivaTexto = document.getElementById("iva").value;

    if (!esNumeroValido(precioTexto)) {
        mostrarResultado("resultadoPrecios", "Error: introduce un precio válido.", true);
        return;
    }

    const precio = Number(precioTexto);
    const iva = ivaTexto.trim() === "" ? 21 : Number(ivaTexto);

    if (ivaTexto.trim() !== "" && !esNumeroValido(ivaTexto)) {
        mostrarResultado("resultadoPrecios", "Error: introduce un IVA válido.", true);
        return;
    }

    if (precio < 0 || iva < 0) {
        mostrarResultado("resultadoPrecios", "Error: el precio y el IVA no pueden ser negativos.", true);
        return;
    }

    const total = precioConIVA(precio, iva);
    mostrarResultado("resultadoPrecios", "Precio con IVA: " + formatearEuros(total));
}

/* Aplica un descuento al precio */
function manejarDescuento() {
    const precioTexto = document.getElementById("precio").value;
    const descuentoTexto = document.getElementById("descuento").value;

    if (!esNumeroValido(precioTexto)) {
        mostrarResultado("resultadoPrecios", "Error: introduce un precio válido.", true);
        return;
    }

    const precio = Number(precioTexto);
    const descuento = descuentoTexto.trim() === "" ? 0 : Number(descuentoTexto);

    if (descuentoTexto.trim() !== "" && !esNumeroValido(descuentoTexto)) {
        mostrarResultado("resultadoPrecios", "Error: introduce un descuento válido.", true);
        return;
    }

    if (precio < 0 || descuento < 0 || descuento > 100) {
        mostrarResultado("resultadoPrecios", "Error: revisa el precio y el descuento (0-100 %).", true);
        return;
    }

    const total = aplicarDescuento(precio, descuento);
    mostrarResultado("resultadoPrecios", "Precio con descuento: " + formatearEuros(total));
}

/* Convierte una temperatura */
function manejarTemperatura() {
    const valorTexto = document.getElementById("temperatura").value;
    const origen = document.getElementById("unidadOrigen").value;
    const destino = document.getElementById("unidadDestino").value;

    if (!esNumeroValido(valorTexto)) {
        mostrarResultado("resultadoTemperatura", "Error: introduce una temperatura válida.", true);
        return;
    }

    const valor = Number(valorTexto);
    const resultado = convertirTemperatura(valor, origen, destino);
    const unidad = destino === "C" ? "°C" : "°F";

    mostrarResultado("resultadoTemperatura", "Resultado: " + redondear(resultado) + " " + unidad);
}

/* Valida una contraseña */
function manejarValidacion() {
    const contrasena = document.getElementById("contrasena").value;

    if (contrasena.trim() === "") {
        mostrarResultado("resultadoValidacion", "Error: escribe una contraseña.", true);
        return;
    }

    const nivel = evaluarContrasena(contrasena);
    mostrarResultado("resultadoValidacion", "Nivel de seguridad: " + nivel);
}

/* Genera una contraseña */
function manejarGenerador() {
    const longitudTexto = document.getElementById("longitud").value;

    if (!esNumeroValido(longitudTexto)) {
        mostrarResultado("resultadoGenerador", "Error: introduce una longitud válida.", true);
        return;
    }

    const longitud = Number(longitudTexto);

    if (!Number.isInteger(longitud) || longitud < 6 || longitud > 30) {
        mostrarResultado("resultadoGenerador", "Error: la longitud debe ser un entero entre 6 y 30.", true);
        return;
    }

    const opciones = {
        mayusculas: document.getElementById("mayusculas").checked,
        numeros: document.getElementById("numeros").checked
    };

    const contrasena = generarContrasena(longitud, opciones);

    if (contrasena === null) {
        mostrarResultado("resultadoGenerador", "No se ha podido generar la contraseña.", true);
        return;
    }

    mostrarResultado("resultadoGenerador", "Contraseña generada: " + contrasena);
}

/* Cuenta palabras y caracteres */
function manejarContador() {
    const texto = document.getElementById("texto").value;

    const totalPalabras = contarPalabras(texto);
    const caracteres = contarCaracteres(texto);
    const caracteresSinEspacios = contarCaracteres(texto, false);
    const larga = palabraMasLarga(texto);
    const lectura = minutosLectura(texto);

    mostrarResultado(
        "resultadoContador",
        "Palabras: " + totalPalabras +
        " | Caracteres: " + caracteres +
        " | Sin espacios: " + caracteresSinEspacios +
        " | Palabra más larga: " + (larga || "ninguna") +
        " | Tiempo de lectura: " + lectura + " min"
    );
}

/* Conecta los botones con sus funciones */
document.getElementById("btnIVA").addEventListener("click", manejarIVA);
document.getElementById("btnDescuento").addEventListener("click", manejarDescuento);
document.getElementById("btnTemperatura").addEventListener("click", manejarTemperatura);
document.getElementById("btnValidar").addEventListener("click", manejarValidacion);
document.getElementById("btnGenerar").addEventListener("click", manejarGenerador);
document.getElementById("btnContar").addEventListener("click", manejarContador);
