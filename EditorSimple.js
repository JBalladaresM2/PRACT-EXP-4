let output = document.getElementById('output')

function consola(salida) {
    output.innerHTML += `<p>${salida}</p>`
}

function LimpiarConsola() {
    output.innerHTML = ``
}

// Caso de Estudio: Análisis de Texto en un Editor Simple
// El sistema tendrá un textarea donde el usuario puede escribir un texto libre.
// Sobre ese texto, los estudiantes deben implementar las siguientes funciones.

let entrada

function DeclararTexto() {
    entrada = document.getElementById('input').value
    consola(`<strong>Texto ingresado:</strong><br>${entrada}<br><br>`)
}

class ManipulacionDeCadenas {
    constructor(entrada) {
        this.texto = entrada
    }

    // 1. Contar palabras
    contarPalabras() {
        const frase = this.texto
        let contador_palabras = 0
        let dentroPalabra = false

        for (let caracter of frase) {
            if (caracter !== " " && caracter !== "\n") {
                if (!dentroPalabra) {
                    contador_palabras++
                    dentroPalabra = true
                }
            } else {
                dentroPalabra = false
            }
        }

        return contador_palabras
    }

    // 2. Contar signos de puntuación
    contarSignosPuntuadores() {
        const frase = this.texto
        let contador_puntuadores = 0
        const signos = [',',';','.',':','¿','?','!','¡','(',')']

        for (let caracter of frase) {
            for (let signo of signos) {
                if (caracter === signo) {
                    contador_puntuadores++
                }
            }
        }
        return contador_puntuadores
    }

    // 3. Contar vocales
    contarVocales() {
        const frase = this.texto.toLowerCase()
        let contador_vocales = 0

        for (let caracter of frase) {
            if (caracter === 'a' || caracter === 'e' || caracter === 'i' || caracter === 'o' || caracter === 'u') {
                contador_vocales++
            }
        }
        return contador_vocales
    }

    // 4. Contar consonantes
    contarConsonantes() {
        const frase = this.texto.toLowerCase()
        let contador_consonantes = 0

        for (let caracter of frase) {
            if (caracter >= 'a' && caracter <= 'z') {
                if (!(caracter === 'a' || caracter === 'e' || caracter === 'i' || caracter === 'o' || caracter === 'u')) {
                    contador_consonantes++
                }
            }
        }

        return contador_consonantes
    }

    // 5. Contar dígitos
    contarDigitos() {
        const frase = this.texto
        let contador_digitos = 0

        for (let caracter of frase) {
            if (caracter >= '0' && caracter <= '9') {
                contador_digitos++
            }
        }

        return contador_digitos
    }

    // 6. Contar palabras que empiezan en mayúscula
    contarComienzaMayuscula() {
        const frase = this.texto
        let contador_mayusculas = 0
        let nuevaPalabra = true

        for (let caracter of frase) {
            if (caracter === " " || caracter === "\n") {
                nuevaPalabra = true
            } else {
                if (nuevaPalabra && caracter >= 'A' && caracter <= 'Z') {
                    contador_mayusculas++
                }
                nuevaPalabra = false
            }
        }

        return contador_mayusculas
    }

    // 7. Contar palabras que empiezan en minúscula
    contarComienzaMinuscula() {
        const frase = this.texto
        let contador_minusculas = 0
        let nuevaPalabra = true

        for (let caracter of frase) {
            if (caracter === " " || caracter === "\n") {
                nuevaPalabra = true
            } else {
                if (nuevaPalabra && caracter >= 'a' && caracter <= 'z') {
                    contador_minusculas++
                }
                nuevaPalabra = false
            }
        }

        return contador_minusculas
    }

    // 8. Contar párrafos
    contarParrafos() {
        const frase = this.texto
        if (frase === "") return 0

        let contador_parrafos = 1

        for (let letra of frase) {
            if (letra === "\n") {
                contador_parrafos++;
            }
        }

        return contador_parrafos
    }

    // 9. Invertir texto completo
    invertirTexto() {
        const frase = this.texto
        let frase_invertida = ""

        for (let i = frase.length - 1; i >= 0; i--) {
            frase_invertida += frase[i]
        }

        return frase_invertida
    }

    // 10. Contar todos los caracteres
    contarCaracteresTotales() {
        const frase = this.texto
        let contador_caracteres = 0

        for (let letra of frase) {
            if (letra !== "\n") {
                contador_caracteres++
            }
        }

        return contador_caracteres
    }

    // 11. Buscar palabra sin split
    buscarPalabra(palabra) {
        const frase = this.texto
        let palabra_actual = ""

        for (let caracter of frase + " ") {
            if (caracter !== " " && caracter !== "\n") {
                palabra_actual += caracter
            } else {
                if (palabra_actual === palabra) {
                    return true;
                }

                palabra_actual = ""
            }
        }

        return false
    }

    // 12. Contar un carácter
    contarCaracter(caracterBuscado) {
        const frase = this.texto
        let contador = 0

        for (let caracter of frase) {
            if (caracter === caracterBuscado) {
                contador++;
            }
        }

        return contador
    }

    // 13. Caracteres en posiciones pares
    contarCaracterPosicionPar() {
        const frase = this.texto
        let contador = 0

        for (let i = 0; i < frase.length; i++) {
            if (i % 2 === 0) {
                contador++
            }
        }

        return contador
    }

    // 14. Caracteres en posiciones impares
    contarCaracterPosicionImpar() {
        const frase = this.texto
        let contador = 0

        for (let i = 0; i < frase.length; i++) {
            if (i % 2 !== 0) {
                contador++
            }
        }

        return contador
    }

    // 15. Añadir texto
    añadirTexto(texto) {
        const frase = this.texto
        const texto_inicio = texto + " " + frase
        const texto_final = frase + " " + texto
        const textos = [texto_inicio, texto_final]

        return textos
    }
}

//  Funciones a implementar
// 1. Contar el número total de palabras
// o Regla: una palabra termina cuando hay un espacio " " o un salto de línea.
// o Ejemplo entrada: "Hola mundo desde Quito"
// o Salida: "Número de palabras: 4"

function ejercicio_1() {
    const CantidadPalabras = new ManipulacionDeCadenas(entrada)
    consola(`Total de palabras: ${CantidadPalabras.contarPalabras()}`)
}

// 2. Contar los signos de puntuación
// o Contar: .,;:!?¿¡"
// o Ejemplo entrada: "Hola, ¿cómo estás?"
// o Salida: "Signos de puntuación: 3"

function ejercicio_2() {
    const CantidadSignos = new ManipulacionDeCadenas(entrada)
    consola(`Signos de puntuación: ${CantidadSignos.contarSignosPuntuadores()}`)
}

// 3. Contar las vocales
// o Vocales: a, e, i, o, u (mayúsculas y minúsculas).
// o Ejemplo entrada: "Educación"
// o Salida: "Cantidad de vocales: 5"

function ejercicio_3() {
    const CantidadVocales = new ManipulacionDeCadenas(entrada)
    consola(`Cantidad de vocales: ${CantidadVocales.contarVocales()}`)
}

// 4. Contar los consonantes
// o Letras alfabéticas que no sean vocales.
// o Ejemplo entrada: "Hola"
// o Salida: "Cantidad de consonantes: 2"

function ejercicio_4() {
    const CantidadConsonantes = new ManipulacionDeCadenas(entrada)
    consola(`Cantidad de consonantes: ${CantidadConsonantes.contarConsonantes()}`)
}

// 5. Contar los dígitos
// o Caracteres numéricos 0–9.
// o Ejemplo entrada: "Mi clave es 1234"
// o Salida: "Cantidad de dígitos: 4"

function ejercicio_5() {
    const CantidadDigitos = new ManipulacionDeCadenas(entrada)
    consola(`Cantidad de dígitos: ${CantidadDigitos.contarDigitos()}`)
}

// 6. Contar palabras que empiezan en mayúscula
// o Detectar la primera letra de cada palabra.
// o Ejemplo entrada: "Hola mundo Bonito"
// o Salida: "Palabras con mayúscula inicial: 2"

function ejercicio_6() {
    const CantidadIncialMayusculas = new ManipulacionDeCadenas(entrada)
    consola(`Palabras con mayúscula inicial: ${CantidadIncialMayusculas.contarComienzaMayuscula()}`)
}

// 7. Contar palabras que empiezan en minúscula
// o Igual que el anterior, pero verificando minúscula.
// o Ejemplo entrada: "hola Mundo bonito"
// o Salida: "Palabras con minúscula inicial: 2"

function ejercicio_7() {
    const CantidadIncialMinusculas = new ManipulacionDeCadenas(entrada)
    consola(`Palabras con minúscula inicial: ${CantidadIncialMinusculas.contarComienzaMinuscula()}`)
}

// 8. Contar párrafos
// o Un párrafo termina con salto de línea \n.
// o Ejemplo entrada:
// o Hola mundo
// o Esto es un segundo párrafo
// o Salida: "Número de párrafos: 2"

function ejercicio_8() {
    const CantidadParrafos = new ManipulacionDeCadenas(entrada)
    consola(`Número de párrafos: ${CantidadParrafos.contarParrafos()}`)
}

// 9. Invertir el texto completo
// o Construir un nuevo texto recorriendo la cadena desde el final hasta el inicio.
// o Ejemplo entrada: "Hola"
// o Salida: "aloH"

function ejercicio_9() {
    const TextoInvertido = new ManipulacionDeCadenas(entrada)
    consola(`"${TextoInvertido.invertirTexto()}"`)
}

// 10. Contar todos los caracteres
// o Contar absolutamente todo: letras, números, signos, espacios.
// o Ejemplo entrada: "Hola 123!"
// o Salida: "Total de caracteres: 9"

function ejercicio_10() {
    const CantidadCaracteres = new ManipulacionDeCadenas(entrada)
    consola(`Total de caracteres: ${CantidadCaracteres.contarCaracteresTotales()}`)
}

// 11. Buscar una palabra en el texto
// o Entrada: el alumno ya tiene un texto en el textarea.
// o Debe pedir una palabra a buscar.
// o Salida: mostrar si la palabra existe o no en el texto.
// o Ejemplo:
// 1. Texto: "Me gusta programar en JavaScript"
// 2. Palabra: "programar"
// 3. Salida: "La palabra 'programar' sí se encuentra en el texto."

function ejercicio_11() {
    const EncontrarPalabra = new ManipulacionDeCadenas(entrada)
    const BuscarPalabra = prompt("Ingresa palabra a buscar:").trim()

    if (EncontrarPalabra.buscarPalabra(BuscarPalabra)) {
        consola(`La palabra '${BuscarPalabra}' sí se encuentra en el texto.`)
    } else {
        consola(`La palabra '${BuscarPalabra}' no se encuentra en el texto.`)
    }
}

// 12. Contar un carácter en el texto
// o Entrada: texto del textarea + un carácter a contar.
// o Salida: número de veces que aparece.
// o Ejemplo:
// 1. Texto: "Hola mundo"
// 2. Carácter: "o"
// 3. Salida: "El carácter 'o' aparece 2 veces."

function ejercicio_12() {
    const ContarCaracter = new ManipulacionDeCadenas(entrada)
    const BuscarCaracter = prompt("Ingresa caracter a buscar:").trim()
    consola(`El carácter '${BuscarCaracter}' aparece ${ContarCaracter.contarCaracter(BuscarCaracter)} veces.`)
}

// 13. Contar caracteres en posiciones pares
// o Entrada: texto del textarea.
// o Recorrer la cadena y contar caracteres en índices pares (0, 2, 4, …).
// o Ejemplo:
// 1. Texto: "Hola"
// 2. Índices: H(0), o(1), l(2), a(3)
// 3. Salida: "Caracteres en posiciones pares: 2"

function ejercicio_13() {
    const CantidadCaracteresPosPar = new ManipulacionDeCadenas(entrada)
    consola(`Caracteres en posiciones pares: ${CantidadCaracteresPosPar.contarCaracterPosicionPar()}`)
}

// 14. Contar caracteres en posiciones impares
// o Entrada: texto del textarea.
// o Recorrer la cadena y contar caracteres en índices impares (1, 3, 5, …).
// o Ejemplo:
// 1. Texto: "Hola"
// 2. Índices: H(0), o(1), l(2), a(3)
// 3. Salida: "Caracteres en posiciones impares: 2"

function ejercicio_14() {
    const CantidadCaracteresPosImpar = new ManipulacionDeCadenas(entrada)
    consola(`Caracteres en posiciones impares: ${CantidadCaracteresPosImpar.contarCaracterPosicionImpar()}`)
}

// 15. Añadir un texto al inicio o al final
// o Entrada: texto del textarea + un nuevo fragmento.
// o Salida: mostrar el texto original con el fragmento agregado al inicio y también al final.
// o Ejemplo:
// 1. Texto: "Aprender programación"
// 2. Fragmento: "Hoy"
// 3. Salida:
// 1. Al inicio: "Hoy Aprender programación"
// 2. Al final: "Aprender programación Hoy"

function ejercicio_15() {
    const AñadirTexto = new ManipulacionDeCadenas(entrada)
    const TextoAdicional = prompt("Ingresa fragmento de texto adicional:").trim()
    const textos = AñadirTexto.añadirTexto(TextoAdicional)
    consola(`Al inicio: "${textos[0]}"<br>Al final: "${textos[1]}"`)
}

// Entrada en el textarea:
// Hola Mundo.
// Tengo 2 perros y 1 gato.
// Ellos son felices!
// Salidas esperadas:
// • Palabras: 11
// • Signos de puntuación: 3
// • Vocales: 14
// • Consonantes: 17
// • Dígitos: 2
// • Palabras con mayúscula inicial: 3
// • Palabras con minúscula inicial: 8
// • Párrafos: 3
// • Texto invertido: "!selicef nos solE .otag 1 y sorrep 2 ogneT .odnuM aloH"
// • Total de caracteres: 53

function ejercicio_16() {
    const prueba = new ManipulacionDeCadenas(entrada)

    consola(`Palabras: ${prueba.contarPalabras()}`)
    consola(`Signos de puntuación: ${prueba.contarSignosPuntuadores()}`)
    consola(`Vocales: ${prueba.contarVocales()}`)
    consola(`Consonantes: ${prueba.contarConsonantes()}`)
    consola(`Dígitos: ${prueba.contarDigitos()}`)
    consola(`Palabras con mayúscula inicial: ${prueba.contarComienzaMayuscula()}`)
    consola(`Palabras con minúscula inicial: ${prueba.contarComienzaMinuscula()}`)
    consola(`Párrafos: ${prueba.contarParrafos()}`)
    consola(`Texto invertido: "${prueba.invertirTexto()}"`)
    consola(`Total de caracteres: ${prueba.contarCaracteresTotales()}`)
}