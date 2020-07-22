

// Sintaxis:  condición ? expr1 : expr2 

let cuota = "La Cuota es de:  " + (isMember ? "$2.00" : "$10.00")

let elvisLives = Math.PI > 4 ? "Sip" : "Nop";

//evaluaciones Multiples, Nota: El operador condicional es asociativo

let firstCheck = false,
    secondCheck = false,
    access = firstCheck ? "Acceso Denegado" : secondCheck ? "Acceso Denegado" : "Acceso Permitido";
  
console.log( access ); // muestra "Acceso Permitido"

//mas de una op separados por comas


let stop = false, age = 23;

age > 18 ? (
    alert("OK, puedes continuar."),
    location.assign("continue.html")
) : (
    stop = true,
    alert("Disculpa, eres menor de edad!")
);