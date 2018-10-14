
/**
 * Ejemplos de uso de Let:
 * - Reemplazar var en bucles for
 * - Definicion de variables en un bloque:
 *   block vs lexical scope
 */

 /**
  * Cuando delcaramos o definimos una variable con let, estamos diciendo que solo será accesible en su bloque. 
  * Si intentamos acceder a esa variable desde fuera del bloque, hay un ReferenceError.
  */

function oddsums(n) {

    let total = 0, result = []; 
    
    for(let x = 1; x <= n; x++) {
        let odd = 2*x-1;
        total += odd;
        result.push(total);
    }

    // console.log(x);              // que sucede y por que?
    // console.log(odd);            // que sucede y por que?
    // console.log(total);          // que sucede y por que?
    
    return result;
}

console.log(oddsums(5));            // Returns [1,4,9,16,25]