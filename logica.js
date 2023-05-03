
const campotexto1 = document.getElementById("input1");
campotexto1.addEventListener("focus", function() {
	campotexto1.value = "";
  })

	var str = document.querySelector("#input1");

	function encriptar() {

		var palabra = "";
		var arr = Array.from(str.value);
        const contenido = document.getElementById("input2");
		
		for(var posicion = 0; posicion < arr.length; posicion++){
		
			if ("a" == arr[posicion] ) {

				arr[posicion] = "ai";

			}
			else if ("e" == arr[posicion] ) {

				arr[posicion] = "enter";

			}
			else if ("i" == arr[posicion] ) {

				arr[posicion] = "imes";

			}
			else if ("o" == arr[posicion] ) {

				arr[posicion] = "ober";

			}
			else if ("u" == arr[posicion] ) {

				arr[posicion] = "ufat";
			}
			
			palabra = palabra + arr[posicion];
			
		}


		//alert(palabra);
		contenido.innerHTML = palabra;
		//console.log(palabra);
	} 

	var button1 = document.querySelector(".button1");
	button1.onclick = encriptar;


	var scr = document.querySelector("#input1");

	
	
	function desencriptar() {

		

    const contenido = document.getElementById("input2");
	
	var arr = Array.from(scr.value);

		for( var i = arr.length; i >= 0 ; i--){

			if ( arr[i] == "a" && arr[i+1] == "i"){

				arr[i+1] = "a"

			}

			if ( arr[i] == "i" && arr[i+1] == "m" && arr[i+2] == "e" && arr[i+3] == "s"){

				arr[i+1] = "i"  
				arr[i+2] = "i"
				arr[i+3] = "i"

			}

			if ( arr[i] == "e" && arr[i+1] == "n" && arr[i+2] == "t" && arr[i+3] == "e" && arr[i+4] == "r"){

				arr[i+1] = "e"  
				arr[i+2] = "e"
				arr[i+3] = "e"
				arr[i+4] = "e"

			}

			if ( arr[i] == "o" && arr[i+1] == "b" && arr[i+2] == "e" && arr[i+3] == "r"){

				arr[i+1] = "o"  
				arr[i+2] = "o"
				arr[i+3] = "o"
				
			}

			if ( arr[i] == "u" && arr[i+1] == "f" && arr[i+2] == "a" && arr[i+3] == "t"){

				arr[i+1] = "u"  
				arr[i+2] = "u"
				arr[i+3] = "u"
			
			}
				
		}

		var newArr = [];
		
		for(var i = 0; i <= arr.length; i++){

			//console.log(array[i])

			if(arr[i+1] != arr[i] ){

				newArr.push(arr[i]);

			}

		}

		console.log(arr);
		console.log(newArr);

		var suma = "";
	
		for(var j=0; j < newArr.length; j++){

			suma = suma + newArr[j];

		}

        contenido.innerHTML = suma;
		console.log(suma);
		
	} 

	var button2 = document.querySelector(".button2");
	button2.onclick = desencriptar;

	document.getElementById("button3").onclick = function() {
        var text = document.getElementById("input2").value;
        navigator.clipboard.writeText(text)}





    
    




