/**
 * global vs local
 * function scope and hoisting
 */

 /**
  * Otro caso de hoisting. Declaramos la variable scope como global, y al acceder a una función e intentar imprimirla
  * nos muestra su valor como undefined. Eso es porque más adelante en esa función se está declarando una variable 
  * con el mismo nombre, y lo que hace es imprimir el valor de la variable del ámbito más cercano. Al imprimir el valor
  * tras haber declarado la variable nos muestra normalmente su valor, y al hacerlo fuera de la función, el valor de la global.
  */
var scope = "global";

function f() {

    console.log(scope);             // WTF !!
    var scope = "local";
    console.log(scope);             // Prints "local"
}

f();

console.log(scope);                 // Prints "global"