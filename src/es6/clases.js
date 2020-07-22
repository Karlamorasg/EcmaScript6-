class calculator {
    //el constructor es para inicializar la clase,
    // se asignan las variables que estaran en un entorno de scope global
    constructor(){
        this.valueA = 0;
        this.valueB = 0;
        
    }

    sum(valueA, valueB){
        this.valueA = valueA;
        this.valueB= valueB;
        return this.valueA + this.valueB
    }
}

const calc = new calculator();
console.log(calc.sum(2,2))

// importar o exportar modulos 
// import { hello } from './module'; (tambien podria funcioanr asi)


const hello = require('./module')

console.log(hello())


