// Simulador de juego de Multiplicaciones

let nombre
let vidas = 3

function saludo(nombreUsuario) {
    alert("¡Bienvenido " + nombreUsuario + "\nHoy probaremos tus conocimientos en diferentes niveles de complejidad multiplicando.\nCominenzas con " + vidas + " vidas y pierdas una por cada error")
}

function ingresoNombre() {
    nombre = prompt("¡Empecemos!\n¿Cómo te llamas?")
}

function Aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

function ingresoNumero() {
    return Number(prompt("Elige un número a tu antojo"))
}

function ingresoNivel() {
    let nivel = Number(prompt("Elige un nivel de dificultad desde el 1 al 5"))

    switch (nivel) {
        case 1:
            jugarNivel(2, 5); // Multiplicar por números entre 2 y 5
            break;
        case 2:
            jugarNivel(5, 10); // Multiplicar por números entre 5 y 10
            break;
        case 3:
            jugarNivel(10, 15); // Multiplicar por números entre 10 y 15
            break;
        case 4:
            jugarNivel(15, 20); // Multiplicar por números entre 15 y 20
            break;
        case 5:
            jugarNivel(20, 25); // Multiplicar por números entre 20 y 25
            break;
        default:
            alert("No elegiste un nivel correcto, esto es un juego serio...")
            break;
    }
}

function jugarNivel(minFactor, maxFactor) {
    let numeroElegido = ingresoNumero()
    let resultadoCorrecto
    
    while (vidas > 0) {
        let factorAleatorio = Aleatorio(minFactor, maxFactor)
        resultadoCorrecto = numeroElegido * factorAleatorio
        let respuestaUsuario = Number(prompt("Multiplicar " + numeroElegido + " por " + factorAleatorio))
        
        if (respuestaUsuario === resultadoCorrecto) {
            vidas ++
            alert("¡Respuesta correcta! Avanzas al siguiente intento.");
        }
        else {
            vidas--
            alert("Era: " + resultadoCorrecto + "¡Respuesta incorrecta! Pierdes una vida. Te quedan " + vidas + " vidas.")
        }
        if (vidas >= 5) {
            alert ("Felicitaciones, cumpliste con el objetivo")
            break
        }
        if (vidas === 0) {
            alert("Hasta aquí llegaste... Sorry")
        }
    }
}

ingresoNombre()
saludo(nombre)
ingresoNivel()
