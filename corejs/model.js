const form = document.getElementById('form')
const response = document.getElementById('response')

/* variables que se usan para hacer los if */
let edad = form.elements['edad']
let sexo = form.elements['sexo']
let ps = form.elements['ps']
let colesterol = form.elements['colesterol']
let na = form.elements['na']
let k = form.elements['k']

/* llamar a la funcion y pasar la palabra a mostrar */
const printResponse = (texto) =>{
  response.innerHTML = "Se le receta la: "+texto
}

form.addEventListener('submit', (event) => {
  // handle the form data
  event.preventDefault();
  /* Logica de los if */

  if(edad.value < 18){
    printResponse("Papas")
  }

});

