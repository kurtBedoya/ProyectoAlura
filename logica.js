const campotexto = document.getElementById("input1");    // obtiene el valor del textarea donde se ingresa el texto en la const campotexto
campotexto.addEventListener("focus", function() {      // registra el evento de enfocar el mouse con un click en el textarea donde se ingresa el texto      
	campotexto.value = "";								// devuelve vacio al registrar el evento focus
  })

  const contenido = document.getElementById("input2"); // obtiene el valor del textarea donde se muestra el resultado en la const contenido
  
  contenido.style.display = "none" // elimina el textarea input2 segun las especificaciones del desafio
  
  var str = document.querySelector("#input1"); // convierte el textarea donde se ingresa el texto en una variable str para la funcion encriptar

	function encriptar() { // crea la funcion encriptar

		var palabra = "";  // inicializa la variable palabra en vacio
		var arr = Array.from(str.value); //convierte una todo lo que se ingresa en la variable str en un arreglo para poder trabajar letra por letra
		
		for(var posicion = 0; posicion < arr.length; posicion++){ // revisa cada letra del arreglo para cambiarlo segun sea el caso en las condiciones mas adelante
		
			if ("a" == arr[posicion] ) { 

				arr[posicion] = "ai"; // cambia la letra segun la condicion del desafio

			}
			else if ("e" == arr[posicion] ) {

				arr[posicion] = "enter"; // cambia la letra segun la condicion del desafio

			}
			else if ("i" == arr[posicion] ) {

				arr[posicion] = "imes"; // cambia la letra segun la condicion del desafio

			}
			else if ("o" == arr[posicion] ) {

				arr[posicion] = "ober"; // cambia la letra segun la condicion del desafio

			}
			else if ("u" == arr[posicion] ) {

				arr[posicion] = "ufat"; // cambia la letra segun la condicion del desafio
			}
			
			palabra = palabra + arr[posicion]; // una vez realizado el cambio de las letras convierte el arreglo en una variable con la concatenacion de la misma
		}

		//alert(palabra);

		contenido.innerHTML = palabra;  // pega al varable palabra en el textarea donde se muestra el resultado en una sintaxis de HTML

		//console.log(palabra);

		var reemplazar = document.getElementById("informacion")  // obtiene el valor del div con la clase informacion en la var reemplazar 
		      
		if (contenido !== "") { 

			reemplazar.style.display = "none"; // devuelve el estilo display:none; para el div con la clase informacion (segun las especificaciones del desafio)
			contenido.style.display = "block"; // devuelve el estilo display:block; para el textarea donde se muestra el resultado (segun las especificaciones del desafio)
			}

		if ((str.value == "Ingrese el texto aquí") || (str.value == "") ){  

			alert ("debe ingresar texto") // muestra la alerta en caso no escribir nada
			location.reload(true) // actualiza la pagina para reiniciar en caso no escribir nada (puse esta condicion ya que al presionar encriptar, encriptaba el texto por defecto ("Ingrese el texto aquí"))

			}
	} 
	
	var button1 = document.querySelector(".button1"); // convierte el boton1 en una variable 
	button1.onclick = encriptar; // ejecuta la funcion encriptar al hacer click en el boton1

	var scr = document.querySelector("#input1"); //convierte el textarea donde se ingresa el texto en una variable str para la funcion desencriptar
	
	function desencriptar() { // crea la funcion desencriptar

	var arr = Array.from(scr.value); //convierte una todo lo que se ingresa en la variable scr en un arreglo para poder trabajar letra por letra

		for( var i = arr.length; i >= 0 ; i--){ // revisa cada letra del arreglo para cambiarlo segun sea el caso en las condiciones mas adelante

			if ( arr[i] == "a" && arr[i+1] == "i"){ // cambia las letras segun la condicion del desafio

				arr[i+1] = "a"
			}

			if ( arr[i] == "i" && arr[i+1] == "m" && arr[i+2] == "e" && arr[i+3] == "s"){ // cambia las letras segun la condicion del desafio

				arr[i+1] = "i"  
				arr[i+2] = "i"
				arr[i+3] = "i"
			}

			if ( arr[i] == "e" && arr[i+1] == "n" && arr[i+2] == "t" && arr[i+3] == "e" && arr[i+4] == "r"){ // cambia las letras segun la condicion del desafio

				arr[i+1] = "e"  
				arr[i+2] = "e"
				arr[i+3] = "e"
				arr[i+4] = "e"
			}

			if ( arr[i] == "o" && arr[i+1] == "b" && arr[i+2] == "e" && arr[i+3] == "r"){ // cambia las letras segun la condicion del desafio

				arr[i+1] = "o"  
				arr[i+2] = "o"
				arr[i+3] = "o"
			}

			if ( arr[i] == "u" && arr[i+1] == "f" && arr[i+2] == "a" && arr[i+3] == "t"){ // cambia las letras segun la condicion del desafio

				arr[i+1] = "u"  
				arr[i+2] = "u"
				arr[i+3] = "u"
			}
		}

		var newArr = []; // crea un nuevo arreglo
		
		for(var i = 0; i <= arr.length; i++){ //revisa nuevamente el arreglo con las letra cambiadas segun el desafio

		//console.log(arr[i]);

			if(arr[i+1] != arr[i] ){ 

				newArr.push(arr[i]); //crea la condicion si la letra consecutiva es diferente a la letra inicial ingresarlo al arreglo creado anteriormente de esta forma si hay un repetido solo agregara uno de los repetidos
			}
		}
		//console.log(arr);

		//console.log(newArr);

		var suma = ""; // inicializa la variable palabra en vacio
	
		for(var j=0; j < newArr.length; j++){ //revisa nuevamente el nuevo arreglo sin las letras repetidas

			suma = suma + newArr[j]; // convierte el arreglo en una variable con la concatenacion de la misma
		}

        contenido.innerHTML = suma; // pega al varable palabra en el textarea donde se muestra el resultado en una sintaxis de HTML
		//console.log(suma);
		//console.log(contenido)

		var reemplazar = document.getElementById("informacion") // obtiene el valor del div con la clase informacion en la var reemplazar 
		      
		if (contenido !== "") {

			reemplazar.style.display = "none"; // devuelve el estilo display:none; para el div con la clase informacion (segun las especificaciones del desafio)
			contenido.style.display = "block"; // devuelve el estilo display:block; para el textarea donde se muestra el resultado (segun las especificaciones del desafio)
		} 

		
		if ((scr.value == "Ingrese el texto aquí") || (scr.value == "") ){

			alert ("debe ingresar texto") // muestra la alerta en caso no escribir nada
			location.reload(true) // actualiza la pagina para reiniciar en caso no escribir nada (puse esta condicion ya que al presionar encriptar, encriptaba el texto por defecto ("Ingrese el texto aquí"))
		}
	} 

	var button2 = document.querySelector(".button2"); // convierte el boton2 en una variable 
	button2.onclick = desencriptar; // ejecuta la funcion desencriptar al hacer click en el boton2


	
	function copiar(){ // crea la funcion desencriptar

		var text = document.getElementById("input2").value; // obtiene el valor del textarea donde se muestra el resultado en la var text
        navigator.clipboard.writeText(text); // ejecuta la opcion de copiar lo escrito en la varialbe text
	}

	var button3 = document.querySelector("#button3"); // convierte el boton3 en una variable
	button3.onclick = copiar; // ejecuta la funcion copiar al hacer click en el boton3





	








			
		

		
		
	
	
	






    
    




