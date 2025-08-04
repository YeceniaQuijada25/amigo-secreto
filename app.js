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

//Funcion que permite recorrer el array
function recorrerArray(){
//Obtener elementos de la lista

  let lista=document.querySelector("#listaAmigos");

//Limpiar la lista existente
  lista.innerHTML="";
//Iterar sobre el arreglo
  for (let i=0;i<amigo.length;i++)
  {
   //Crea un nuevo elemento li
   let li=document.createElement('li');
  //Asigna el valor al nuevo li

   li.textContent=amigo[i];
  //Agregar nuevo elemento a la lista
   lista.appendChild(li);
  }
}
