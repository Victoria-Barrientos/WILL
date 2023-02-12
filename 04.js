/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/

function numeroSimetrico(num) {
  // La funcion llamada 'numeroSimetrico' recibe como argumento un numero entero 'num'
  // Esta devuelve true o false dependiendo de si el número es simétrico o no. 
  // Un número es simétrico cuando es igual a su reverso.
  // Ej:
  // numeroSimetrico(11711) devuelve true

  // Tu código:
  String.prototype.reverse = function(){
    const stringReverse = [];
    stringSplit = this.split('');
    for(let i=stringSplit.length-1; i>=0 ; i--) {
      letterI = stringSplit.pop();
      stringReverse.push(letterI);
    };
    return stringReverse.join('');
  };

  const number = num.toString();
  if(number === number.reverse()) {
    return true;
  } else {
    return false;
  }

}

// No modifiques nada debajo de esta linea //

module.exports = numeroSimetrico