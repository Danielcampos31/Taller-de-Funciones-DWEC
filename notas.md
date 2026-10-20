# Taller de funciones

## Fase 1. Exploración de funciones predefinidas

### Tabla de predicciones

| Línea | Mi predicción | Resultado real | Tipo |
|---|---|---|---|
| `parseInt("42")` | Creo que devuelve el número 42. | `42` | number |
| `parseInt("12px")` | Creo que devuelve 12 porque empieza por números. | `12` | number |
| `parseInt("px12")` | Creo que no puede convertirlo porque empieza por letras. | `NaN` | number |
| `Number("")` | Creo que devuelve 0 porque el texto está vacío. | `0` | number |
| `isNaN("")` | Creo que devuelve false porque el texto vacío se convierte en 0. | `false` | boolean |
| `Math.round(-2.5)` | Creo que redondea a -2. | `-2` | number |
| `"oso".replace("o", "0")` | Creo que cambia las letras o por ceros. | `"0so"` | string |
| `"a,b,c".split(",")` | Creo que separa el texto por las comas. | `["a", "b", "c"]` | object (Array) |
| `0.1 + 0.2` | Creo que devuelve 0.3. | `0.30000000000000004` | number |
| `(1.005).toFixed(2)` | Creo que devuelve 1.01. | `"1.00"` | string |

### Agrupación de funciones

- **Convertir:** `parseInt()`, `Number()` y `String()`.
- **Comprobar:** `isNaN()`, `Number.isInteger()` y `Array.isArray()`.
- **Matemáticas:** `Math.round()`, `Math.floor()` y `Math.ceil()`.
- **Texto:** `replace()`, `split()` y `toUpperCase()`.

### Preguntas

**1. ¿Qué da `Number("")`? ¿Por qué es un problema en un formulario?**

Devuelve 0. Puede ser un problema porque, si un usuario deja un campo numérico vacío, el programa podría interpretarlo como un cero válido en vez de detectar que no ha escrito nada.

**2. ¿Qué diferencia hay entre `parseInt("12px")` y `parseInt("px12")`?**

`parseInt("12px")` devuelve 12 porque empieza por números y deja de leer al encontrar las letras. En cambio, `parseInt("px12")` devuelve `NaN` porque no encuentra ningún número al principio del texto.

**3. ¿Por qué `0.1 + 0.2` no da exactamente `0.3`? ¿Qué problema crearía en una tienda?**

JavaScript utiliza números de coma flotante y algunos decimales no se pueden representar exactamente en binario. Esto puede producir pequeñas diferencias en los cálculos de precios. En una tienda podría provocar errores de redondeo al calcular importes o descuentos.

### Tres funciones adicionales

- `String(25)`: convierte el número 25 en el texto `"25"`.
- `Math.floor(3.8)`: redondea hacia abajo y devuelve 3.
- `"hola".toUpperCase()`: convierte el texto a mayúsculas y devuelve `"HOLA"`.

## Fase 2. Funciones de precios y descuentos

### Funciones creadas

- `calcularIVA(precio, porcentajeIVA)`: calcula la cantidad correspondiente al IVA. Si no se indica el porcentaje, utiliza el 21 %.
- `precioConIVA(precio, porcentajeIVA)`: suma el IVA al precio original.
- `aplicarDescuento(precio, porcentajeDescuento)`: calcula el precio después de aplicar un descuento.
- `redondear(numero, decimales)`: redondea un número al número de decimales indicado.
- `formatearEuros(precio)`: muestra una cantidad con el formato de euros de España.

### Pruebas realizadas

| Prueba | Resultado |
|---|---|
| `calcularIVA(100)` | 21 |
| `precioConIVA(100)` | 121 |
| `aplicarDescuento(100, 20)` | 80 |
| `redondear(1.005)` | 1.01 |
| `formatearEuros(1234.5)` | 1.234,50 € |

Todas las pruebas han dado el resultado esperado.

### Preguntas

**1. ¿Qué diferencia hay entre una función que devuelve un valor con `return` y otra que solo usa `console.log()`?**

`return` devuelve un resultado que se puede guardar en una variable o utilizar en otro cálculo. `console.log()` solo muestra información en la consola y no devuelve ese resultado como valor de la función.

**2. ¿Qué ventaja tiene utilizar una función para calcular el IVA?**

Permite reutilizar el mismo cálculo en diferentes partes del programa, evita repetir código y facilita modificarlo si fuera necesario.

**3. ¿Qué diferencia hay entre una función normal y una función flecha?**

Una función normal se declara con `function`, mientras que una función flecha utiliza `=>`. Ambas pueden realizar cálculos y devolver resultados. Para esta práctica, las dos pueden servir para aplicar un descuento.