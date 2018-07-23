/**
 * Ex-02: isEven()
 *
 * Write a function called isEvent that takes an integer and returns
 * true or false based on whether that integer is odd or even
 *
**/

function isEven(aEvaluar){
	var resultado= false

	var evaluado = aEvaluar/2
	 	var evaludadoBol=Number.isInteger(evaluado);

	 if (aEvaluar===0) {
	 	var resultado= true;
	 } else	if (evaludadoBol=== true) {
	 	resultado= true
	 }
	 console.log(resultado);
	 return resultado

}



//*~*~*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~
console.log("[0] Should return true for 0");
console.assert(isEven(0) === true )
console.log("==================================");
console.log();

console.log("[2] Should return true for 4");
console.assert(isEven(4) === true )
console.log("==================================");
console.log();

console.log("[3] Should return true for 10");
console.assert(isEven(10) === true )
console.log("==================================");
console.log();

console.log("[4] Should return false for 17");
console.assert(isEven(17) === false )
console.log("==================================");
