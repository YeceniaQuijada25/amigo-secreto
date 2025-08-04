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

//Función para sortear los amigos
function sortearAmigo(){
//Validación de que existen amigos disponibles
 if (amigo.length==0){
  alert("Debes ingresar los nombres de los amigos. Por favor..!")
 }else {
   //Generar un indice aleatorio
  let indiceAleatorio=Math.floor(Math.random()*amigo.length);

  
  //Obtener el nombre sorteado
  let nombreSorteado=amigo[indiceAleatorio];


 //Mostrar el resultado
 let resultado= document.getElementById("resultado");

 resultado.innerHTML=nombreSorteado;
 }

}


