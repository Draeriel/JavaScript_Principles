/**
 * global vs local
 * function scope and hoisting
 */

 /**
  * Lo mismo que el anterior, pero mostrando como funciona exactamente el hoisting. La variable scope es declarada como global en 
  * y luego definida como local en la función, para más adelante ser inicializada.
  */

var scope = "global";

function f() {

    var scope;
    console.log(scope);
    scope = "local";
    console.log(scope);
}

f();

console.log(scope);