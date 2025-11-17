// Caso de Estudio: Análisis de Texto en un Editor Simple
// El sistema tendrá un textarea donde el usuario puede escribir un texto libre.
// Sobre ese texto, los estudiantes deben implementar las siguientes funciones.

class ManipulacionDeCadenas {
    constructor(entrada) {
        this.texto = entrada
    }

    // 1. Contar el número total de palabras
    ContarPalabras() {

    }

    // 2. Contar los signos de puntuación
    ContarSignosPuntuadores() {

    }

    // 3. Contar las vocales
    ContarVocales() {

    }

    // 4. Contar los consonantes
    ContarConsonantes() {

    }

    // 5. Contar los dígitos
    ContarDigitos() {

    }

    // 6. Contar palabras que empiezan en mayúscula
    ContarComienzaMayuscula() {

    }

    // 7. Contar palabras que empiezan en minúscula
    ContarComienzaMinuscula() {

    }

    // 8. Contar párrafos
    ContarParrafos() {

    }

    // 9. Invertir el texto completo
    InvertirTexto() {

    }

    // 10. Contar todos los caracteres
    ContarCaracteresTotales() {

    }

    // 11. Buscar una palabra en el texto
    BuscarPalabra() {

    }

    // 12. Contar un carácter en el texto
    ContarCaracter() {

    }

    // 13. Contar caracteres en posiciones pares
    ContarCaracterPosicionPar() {
        
    }

    // 14. Contar caracteres en posiciones impares
    ContarCaracterPosicionImpar() {
        
    }

    // 15. Añadir un texto al inicio o al final
    AñadirTexto() {

    }
}

//  Funciones a implementar
// 1. Contar el número total de palabras
// o Regla: una palabra termina cuando hay un espacio " " o un salto de línea.
// o Ejemplo entrada: "Hola mundo desde Quito"
// o Salida: "Número de palabras: 4"

function ejercicio_1() {

}

// 2. Contar los signos de puntuación
// o Contar: .,;:!?¿¡"
// o Ejemplo entrada: "Hola, ¿cómo estás?"
// o Salida: "Signos de puntuación: 3"

function ejercicio_2() {
    
}

// 3. Contar las vocales
// o Vocales: a, e, i, o, u (mayúsculas y minúsculas).
// o Ejemplo entrada: "Educación"
// o Salida: "Cantidad de vocales: 5"

function ejercicio_3() {
    
}

// 4. Contar los consonantes
// o Letras alfabéticas que no sean vocales.
// o Ejemplo entrada: "Hola"
// o Salida: "Cantidad de consonantes: 2"

function ejercicio_4() {
    
}

// 5. Contar los dígitos
// o Caracteres numéricos 0–9.
// o Ejemplo entrada: "Mi clave es 1234"
// o Salida: "Cantidad de dígitos: 4"

function ejercicio_5() {
    
}

// 6. Contar palabras que empiezan en mayúscula
// o Detectar la primera letra de cada palabra.
// o Ejemplo entrada: "Hola mundo Bonito"
// o Salida: "Palabras con mayúscula inicial: 2"

function ejercicio_6() {
    
}

// 7. Contar palabras que empiezan en minúscula
// o Igual que el anterior, pero verificando minúscula.
// o Ejemplo entrada: "hola Mundo bonito"
// o Salida: "Palabras con minúscula inicial: 2"

function ejercicio_7() {
    
}

// 8. Contar párrafos
// o Un párrafo termina con salto de línea \n.
// o Ejemplo entrada:
// o Hola mundo
// o Esto es un segundo párrafo
// o Salida: "Número de párrafos: 2"

function ejercicio_8() {
    
}

// 9. Invertir el texto completo
// o Construir un nuevo texto recorriendo la cadena desde el final hasta el inicio.
// o Ejemplo entrada: "Hola"
// o Salida: "aloH"

function ejercicio_9() {
    
}

// 10. Contar todos los caracteres
// o Contar absolutamente todo: letras, números, signos, espacios.
// o Ejemplo entrada: "Hola 123!"
// o Salida: "Total de caracteres: 9"

function ejercicio_10() {
    
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
    
}

// 12. Contar un carácter en el texto
// o Entrada: texto del textarea + un carácter a contar.
// o Salida: número de veces que aparece.
// o Ejemplo:
// 1. Texto: "Hola mundo"
// 2. Carácter: "o"
// 3. Salida: "El carácter 'o' aparece 2 veces."

function ejercicio_12() {
    
}

// 13. Contar caracteres en posiciones pares
// o Entrada: texto del textarea.
// o Recorrer la cadena y contar caracteres en índices pares (0, 2, 4, …).
// o Ejemplo:
// 1. Texto: "Hola"
// 2. Índices: H(0), o(1), l(2), a(3)
// 3. Salida: "Caracteres en posiciones pares: 2"

function ejercicio_13() {
    
}

// 14. Contar caracteres en posiciones impares
// o Entrada: texto del textarea.
// o Recorrer la cadena y contar caracteres en índices impares (1, 3, 5, …).
// o Ejemplo:
// 1. Texto: "Hola"
// 2. Índices: H(0), o(1), l(2), a(3)
// 3. Salida: "Caracteres en posiciones impares: 2"

function ejercicio_14() {
    
}

// 15. Añadir un texto al inicio o al final
// o Entrada: texto del textarea + un nuevo fragmento.
// o Salida: mostrar el texto original con el fragmento agregado al inicio y también
// al final.
// o Ejemplo:
// 1. Texto: "Aprender programación"
// 2. Fragmento: "Hoy"
// 3. Salida:
// 1. Al inicio: "Hoy Aprender programación"
// 2. Al final: "Aprender programación Hoy"
// Reglas de implementación
// • Cada funcionalidad debe hacerse con una función propia:
// o contarPalabras(texto)
// o contarVocales(texto)
// o invertirTexto(texto)
// • Los estudiantes no pueden usar métodos del lenguaje como split, indexOf, replace,
// etc.
// • Únicamente pueden usar:
// o .length para conocer el tamaño de la cadena.
// o .push() para guardar resultados en arreglos.
// • Todo debe resolverse con ciclos y condicionales.
// Ejemplo de Salida General
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

function ejercicio_15() {
    
}