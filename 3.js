
/**
 * global vs local
 * nested scopes
 */

 /**
  * Declaramos la variable scope como global y dentro de la función declaramos otra variable con el mismo como local.
  * Dentro de esa función a su vez hay otra función que declara scope también como local. 
  * Al pedirle que imprima el valor de la función anidada, nos devuelve el valor declarado en esa función,
  * en cambio, al pedir que nos devuelva el valor de la variable, nos da la global, porque no ha sido modificado su valor.
  * Si imprimimos el valor de la primera función después de llamar a la función anidada, el valor de scope permanece igualemnte inalterado.
  */

var scope = "global scope";

function checkscope() {
    
    var scope = "local scope";
    
    function nested() {
        
        var scope = "nested scope";
        return scope;
    }

    return nested();
}

console.log(checkscope());              // => "nested scope"
console.log(scope);                     // => "global scope"