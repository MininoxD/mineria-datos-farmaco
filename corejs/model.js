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

  console.log(edad.value);
  console.log(sexo.value);
  console.log(ps.value);
  console.log(colesterol.value);
  console.log(na.value);
  console.log(k.value);

  if(k.value <= 0.055){
    if(k.value <= 0.037){
      printResponse("drogaY");
    }
    else if(na.value <= 0.685){
      if(ps.value == "ALTO"){
        printResponse("drogaA");
      }
      if (ps.value == "NORMAL") {
        printResponse("drogaX");
      }
      if (ps.value == "BAJO") {
        if (sexo.value == "M"){
          printResponse("drogaX");
        }
        if (sexo.value == "F") {
          printResponse("drogaC");
        }
      }
    }
    else{
      printResponse("drogaY");
    }
  }
  else{
    if (ps.value == "ALTO") {
      if (edad.value <= 50) {
        printResponse("drogaA");
      }
      else{
        printResponse("drogaB");
      }
    }
    if (ps.value == "BAJO") {
      if (colesterol.value == "NORMAL") {
        printResponse("drogaX");
      }
      if (colesterol.value == "ALTO") {
        printResponse("drogaC");
      }
    }
    if (ps.value == "NORMAL") {
      printResponse("drogaX");
    }
  }
});

