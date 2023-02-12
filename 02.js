/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
function stringMasLarga(strings) {
  // La función llamada 'stringMasLarga', recibe como argumento un arreglo de strings llamado 'strings'
  // y debe devolver el string más largo que hay en el arreglo (Es decir el de mayor cantidad de caracteres)
  // Ej:
  // stringMasLarga(['hi', 'hello', 'ni hao', 'guten tag']); debe retornar 'guten tag'
  // stringMasLarga(['JavaScript', 'HTML', 'CSS']); debe retornar 'JavaScript'

  // Tu código aca:
  for(let i=0; i<strings.length -1; i++) {
    for(let j=0; j<strings.length -i -1; j++) {
      if(strings[j].length > strings[j+1].length) {
        auxiliar = strings[j];
        strings[j] = strings[j+1];
        strings[j+1] = auxiliar;
      }
    }
    };
    return strings[strings.length-1]
  };

// No modifiques nada debajo de esta linea //

module.exports = stringMasLarga