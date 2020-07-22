
//para yrabajar logicas o una serie de algoritmos que queramos ver d enuestro lado e ir ejecutandolos.


function* helloWord(){
    if(true){
        yield 'hello' ;
    } if (true) {
        yield 'word';
    }
};

const generatorHello = helloWord();
console.log(generatorHello.next().value)
console.log(generatorHello.next().value)
console.log(generatorHello.next().value)