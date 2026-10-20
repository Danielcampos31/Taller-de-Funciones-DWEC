console.log("El archivo pruebas.js se ha cargado");
let totalPruebas = 0;
let pruebasCorrectas = 0;
let resultadosPruebas = [];

function probar(descripcion, obtenido, esperado) {
    totalPruebas++;

    const correcto = obtenido === esperado;

    if (correcto) {
        pruebasCorrectas++;
    }

    resultadosPruebas.push({
        prueba: descripcion,
        obtenido: obtenido,
        esperado: esperado,
        resultado: correcto ? "Correcta" : "Fallida"
    });

    console.assert(correcto, descripcion, {
        obtenido: obtenido,
        esperado: esperado
    });
}

function ejecutarPruebas() {
    totalPruebas = 0;
    pruebasCorrectas = 0;
    resultadosPruebas = [];

    // IVA y descuentos
    probar("IVA de 100 al 21 %", precioConIVA(100), 121);
    probar("Precio 0 con IVA", precioConIVA(0), 0);
    probar("Descuento del 25 %", aplicarDescuento(80, 25), 60);
    probar("Descuento del 0 %", aplicarDescuento(80, 0), 80);

    // Temperaturas
    probar("100 grados Celsius a Fahrenheit", convertirTemperatura(100, "C", "F"), 212);
    probar("Convertir la misma unidad", convertirTemperatura(25, "C", "C"), 25);

    // Validador de contraseñas
    probar("Contraseña fuerte", evaluarContrasena("Abcdefg1"), "fuerte");
    probar("Contraseña vacía", evaluarContrasena(""), "débil");

    // Generador de contraseñas
    const generada = generarContrasena(12);
    probar("Longitud de contraseña generada", generada.length, 12);
    probar("Longitud no permitida", generarContrasena(3), null);

    // Comprobar varias veces la longitud del generador
    for (let i = 1; i <= 20; i++) {
        const contrasena = generarContrasena(10);
        probar("Generador: prueba " + i, contrasena.length, 10);
    }

    // Contador de palabras
    probar("Contar dos palabras", contarPalabras("hola mundo"), 2);
    probar("Contar texto vacío", contarPalabras(""), 0);
    probar("Contar caracteres", contarCaracteres("a b c"), 5);
    probar("Caracteres sin espacios", contarCaracteres("a b c", false), 3);

    mostrarPruebas();
}

function mostrarPruebas() {
    const resultado = document.getElementById("resultadoPruebas");

    resultado.innerHTML = "";

    const resumen = document.createElement("p");
    resumen.textContent = "Pruebas correctas: " + pruebasCorrectas +
        " de " + totalPruebas + ".";
    resultado.appendChild(resumen);

    const lista = document.createElement("ul");

    resultadosPruebas.forEach(function (prueba) {
        const elemento = document.createElement("li");
        elemento.textContent = prueba.resultado + ": " + prueba.prueba;

        elemento.style.color =
            prueba.resultado === "Correcta" ? "green" : "red";

        lista.appendChild(elemento);
    });

    resultado.appendChild(lista);
}
