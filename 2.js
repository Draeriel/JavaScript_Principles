
/**
 * global vs local
 * var to declare local variables
 */

/**
 * Declaramos la variable scope como global. Dentro de la función sobreescribimos el valor de scope y declaramos 
 * la variablo myscope como global, por eso al imprimir el valor de ambas variables el resultado es "local".
 * Pero esto solo es posible porque se ha accedido a la función, de lo contrario habría impreso global y dado un ReferenceError.
 */

scope = "global";

function checkscope2() {
    
    scope = "local";
    myscope = "local";

    return [scope, myscope];
}

console.log(checkscope2());

console.log(scope);
console.log(myscope);           // => WTF ¿?