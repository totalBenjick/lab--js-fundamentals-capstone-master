
/**
 * toCamelCase()
 *
 * Write a `toCamelCase` function that takes a multi word string as an argument
 * and returns a string that follows camel case convention

ya hay algo, un array de 2 elementos cada letra del segundo arra

 *
 */
 function toCamelCase(frase){
 	var salidaCamel ="";

 	var frase = frase.toLowerCase() ;
 	var frase = frase.split(" ");


 	salidaCamel+= frase[0]

 	for (var i = 1; i < frase.length; i++) {
 		var palabra = frase[i];
 		var palabraMayusc= "";
 		var primeraLetra = palabra[0];
 		
 		if (primeraLetra === primeraLetra.toLowerCase()) {
 			primeraLetra = primeraLetra.toUpperCase()
 			palabraMayusc = palabraMayusc + primeraLetra ;
 		}

 		for (var j=1 ;  j<palabra.length; j++){

 			palabraMayusc = palabraMayusc + palabra[j];

 		 }	

 	salidaCamel = salidaCamel + palabraMayusc

 	}
 	console.log(salidaCamel);
   return salidaCamel;
 }




//~+~+~+~+~+~+~+~Don't Touch~+~+~++~+~+~+~+~+~+~+
console.log("[1] Should return 'fetchRecords'");
console.assert(toCamelCase("fetch records") === 'fetchRecords')
console.log("====================================");
console.log();

console.log("[2] Should return 'createTableRow'");
console.assert(  toCamelCase("create table row") === 'createTableRow'  )
console.log("====================================");
console.log();

console.log("[3] Should return 'convertToHtml'");
console.assert(  toCamelCase("convert to HTML") === 'convertToHtml'  )
console.log("====================================");
console.log();

console.log("[4] Should return 'getUserAccountId'");
console.assert(  toCamelCase("get user account ID") === 'getUserAccountId'  )
console.log("====================================");
