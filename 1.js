/**
 * global vs local
 */

/**
 * Declaramos la variable scope como global, y en la función declaramos una variable local con el mismo nombre.
 * Al imprimir el resultado de checkscope nos devuelve la variable local, ya que es la más cercana a su ámbito.
 * En cambio si imprimimos el valor de la variable, nos muestra la global, porque a pesar de ser variables con el mismo nombre no se sobreescriben,
 * porque viven en ámbitos distintos.
 */
var scope = "global";

function checkscope() {
    var scope = "local";
    return scope;
}

console.log(checkscope());      // => "local"
console.log(scope);             // => "global"