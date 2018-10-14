/**
 * Variables declaradas por let tienen por alcance el bloque
 * en el que se han definido, así mismo, como en cualquier bloque interno. 
 * De esta manera, let trabaja muy parecido a var. 
 * La más notable diferencia es que el alcance de una variable var es la función contenedora.
 * https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/let
 */

/**
 * La variable se declara dentro de la función, y vuelve a ser declarada dentro de la función usando var con otro valor
 * (lo que habría sido lo mismo que cambiar su valor sin necesitar volver a declararla).
 */
function varTest() {

    var x = 31;

    if (true) {
        var x = 71;             
        console.log(x);         // 71
    }

    console.log(x);             // 71
}

/**
 * La variable se declara dentro de la función, y vuelve a ser declarada dentro de la función usando let con otro valor.
 * El alcance de let solo funciona dentro de su bloque, por lo que ahí su valor es el suyo, mientras que fuera no ha sido mosdificado
 */
function letTest() {

  var x = 31;
  
  if (true) {
      let x = 71;               
      console.log(x);           // 71
    }
    
    console.log(x);             // 31
}

/**
 * "w" es declarada más adelante con var, por lo que su valor es indefinido. Pero "z" es declarada con let, por lo que su valor 
 * no es accesible desde fuera de su bloque ni antes de inicializarla, por lo que da ReferenceError.
 * Dentro del bloque el valor de "x" es el internamente declarado, sin modificar el externo por haber sido declarado con let
 * El valor de "y" en el bloque es del ámbito más cercano y la delcaración de "z" solo funciona en el bloque, mientras que la de "w"
 * sí que es accesible desde fuera de este. Y la variable "u" es declarada como global, por lo que es accesible también desde
 * fuera de la función.
 */
function hoistingTest() {

    console.log(w);               
    // console.log(z);               // ReferenceError

    var x = 31;
    let y = 91;
    u = 1;                        
    
    if (true) {
        let x = 71;               
        console.log(x);           // 71
        console.log(y);           // 91
        let z = 101;
        var w = 1001;             
    }
      
    console.log(x);               // 31
    // console.log(z);             // ReferenceError
    console.log(w);               // 1001
  }


varTest();

letTest();

hoistingTest();

console.log(u);                  