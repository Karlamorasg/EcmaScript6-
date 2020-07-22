
// antes para usar saltos de linea
let lorem = "lorem uhdiu liudhiouw lhciuwnc linciunliu \n" +
" jwiduhiudshic "

//EC6
let lorem2 = `esta es una frse epica 
ahora esta es otra frase epica `; 


console.log(lorem)
console.log(lorem2)


//Destructuring de ec6


let person = {
    'name': 'Karla',
    'age' : 28,
    'country': 'CR'
}


let  {name , age , country} = persona

console.log(name, age)


let team1 = ['oscar', 'ricard0', 'julio']
let team2 = ['valeria', 'ericka', 'maria']

// como traerse un array entero a unoo nuevo
let education = [ 'david', ...team1, ...team2]

console.log(education);


// LET - CONST 
//let tiene alcanza de scope local
// const no cambia su valor nunca 


// Objetos 

let name2 = 'karla'
let lastname = 'mora'

//es5
obj = {name2: name2 , lastname : lastname}

//es6
obj2 = {name2,  lastname}
console.log(obj)
console.log(obj2)

//arrowFuntions (codigo màs reducido y un this NO vinculante)
// si se va a pasar solo un parametro no ocupa parentesis en el mismo

const names = [
    {name: 'Karla', age : 17},
    {name: 'Daniela', age : 16}
]

//es5
let listOfNames = names.map(function(item){
    console.log(item.name)
})

//es6 arrow 
let listOfNames2 = names.map(item=> console.log(item.name))

const listOfNames3 = (name, age) =>{
    console.log()
}

// sin parentesis en el parametro , se omite el return y los corchetes
const square = num => num * num;

// Promesas (para trabajar el asincronismo)
//llegaron para solucionar el callback hell 

const hellowPromise = () => {
    return new Promise ((resolve, reject) =>{
        if (true){
            resolve ('Hey! todo bien')
        }else {
            reject ('Ups')
        }
    })
}


//para ejecutarla

hellowPromise()
    .then(response=> console.log(response)) // se pueden anidar cuantos then necesites
    .catch(err => console.log(err));
 