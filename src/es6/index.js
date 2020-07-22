/**
 * Default Params
 */

 // antes los parametros se pasaban asi 
function newFunction(name, age, country) {
    var name = name || 'Oscar';
    var age = age || 32;
    var country = country || 'MX';
    console.log(name, age, country);
  }
  
  //  es6 permite hacerlo de esta forma
  function newFunctionES6(name = 'Karla', age = 28, country = 'Costa Rica') {
    console.log(name, age, country);
  }
  
  newFunctionES6();
  newFunctionES6('Tania', 31, 'Costa Rica');
  
  /**
   * Concatenation - Template Literals
   */
  let hello = 'Hello';
  let world = 'World';
  let epicPhrase = hello + ' ' + world + '!';
  
  // es6
  let epicPhraseES6 = `${hello}${world}!`;
  
  console.log(epicPhrase);
  console.log(epicPhraseES6);