/**
 * global vs local
 * function scope and hoisting
 */


 /**
  * Aquí se nos muestra el poder del hoisting, cosa que solo se puede hacer (que yo sepa) al declarar una variable con var.
  * Lo que ocurre es que esa variable vive a través de toda la función. Se nos muestra como variables declaradas dentro de un bucle
  * pueden ser accesibles fuera de él, incluso antes de haber sido declaradas (dando en este caso como resultado
  * 'undefined' en vez de ReferenceError).
  */

function test(o) {
    
    var i = 0;
    
    if (typeof o == "object") {
        
        var j = 0;
    
        for(var k=0; k < 10; k++) {
            console.log(k);             // print numbers 0 through 9
        }
    
        console.log(k);                 // prints 10
    }
    
    console.log(j);                     // j is defined, but may not be initialized
}

o = {};
test(o);