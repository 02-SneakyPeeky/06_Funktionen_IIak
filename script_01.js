
"use strict";

/*** Rechner */
/*
0. a+b | a-b | a*b | a/b  --> Ergebnis c 

1. Dateneingabe + -überprüfung : check! /
2. Auswahl Rechenart :           check!
3. Fkt. Grundrechenarten :       check!
4. Ausgabe in Konsole :          check!
*/




// Konstanten
const ERROR_STR_DIV = "Division durch 0 nicht möglich!";
const ERROR_STR_GEN = "Irgendetwas ging schief!"

// wäre auch ,möglich aber unübersichtlich
// output(calculator(parseFloat(prompt("zahl1"),prompt("zahl2"),prompt("operator")));

startApp();
function startApp() {
	output(calculator(getNum1(),getNum2(),getOp()));
}
function getNum1() {
	return parseFloat(prompt("Zahl1"));
}
function getNum2() {
	return parseFloat(prompt("Zahl2"));
}
function getOp() {
	return prompt("Operator");
}


// module: calculator | tests:
// agreement : "+","-","*",":","/"
// output(calculator(3,2,"+"));
// output(calculator(3,2,"-"));
// output(calculator(3,2,"*"));
// output(calculator(3,2,":"));
// output(calculator(3,2,"/"));
// output(calculator(3,0,"/"));
// output(calculator(3,2,"#?!"));
function calculator(a,b,op) {
	switch (op) {
		case "+":
			return add(a,b);
		case "-":
			return subtract(a,b);
		case "*":
			return multiply(a,b);
		case ":":   //ob ":" oder "/" ist egal -              
		case "/":   // - funktioniert nun beides//
			return divide(a,b);
		default:
			return ERROR_STR_GEN;
	}   

}


// module: division a / b |  test:
// output(divide(4,2));
// output(divide(3,2));
// output(divide(3,-2));
// output(divide(3,0));
function divide(a,b) {
	
	// if (b != 0) {            // Variante 1
	// return a / b;	        // ""
 	// } else {                 // ""
	// 	return ERROR_STR_DIV    // ""
	// }                        // ""
	// return a / b;            // ""

	if (b == 0) {            // Variante 2
	return ERROR_STR_DIV     // ""
	}                        // ""
	return a / b;            // ""
}

// module: multiplication a * b |  test:
// output(multiply(3,2));
// output(multiply(3,-2));
// output(multiply(3,0));
function multiply(a,b) {
	return a * b
}

// module: subtraction a - b |  test:
// output(subtract(3,2));
// output(subtract(3,-2));
// output(subtract(3,0));
function subtract(a,b) {
	return a - b; 	
}

// module: addition a + b |  test:
// output(add(2,2));
// output(add(2,-2));
// output(add(2,0));
function add(a,b) {
	return a + b;
}


// module: output | test:
// output("hello");
// output(2);
function output(outputData) {
	console.log(outputData);
}
  