//Declaración del array amigo
let amigo=[];

//Función para agregar amigos en el array amigos

function agregarAmigo(){

//Captura el valor de entrada

  let nombre=document.querySelector('#amigo');


//Valida la entrada
  if (nombre.value==""){
//Envia mensaje de error

    alert("Por favor, inserte un nombre");

  }else{
//Actualiza el array amigos
    amigo.push(nombre.value);
    console.log(amigo);
    document.querySelector("#amigo").value="";
    recorrerArray()
  }
}
