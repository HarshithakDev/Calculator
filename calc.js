let result=null;
let input= " ";
function updateDisplay(){
	document.getElementById("inputext").value=input;

}
function appendCharacter(character) {
	if (character === '%' && input !== "") {
		input = (parseFloat(input) / 100).toString();
	} else {
		input += character;
	}
	updateDisplay();
}

function clearDisplay(){
	input="";
	result=null;
	updateDisplay();
}
function DeletelastCharacter() {
	input = input.slice(0, -1);
	updateDisplay();
}
 function Changesign(){
	 if (input !== "") {
		 if (input[0] === '-') {
			 input = input.slice(1);
		 } else {
			 input = '-' + input;
		 }
		 updateDisplay();
	 }
 }

function calculateResult() {
	try {
		result = eval(input);
		input = result.toString()
		updateDisplay();
	} catch (error) {
		input = "Error";
		updateDisplay();
		result = null;
	}
}


