let result=null;
let input= " ";
let histdata=[];
let expression = " ";
let result_data =" ";

function updateDisplay(){
	document.getElementById("inputext").value=input;

}
function appendCharacter(character) {
	const lastChar = input.slice(-1);
	if (character === '%' && input !== "") {
		input = (parseFloat(input) / 100).toString();
	} else if (lastChar === '+' || lastChar === '-' || lastChar === '*' || lastChar === '/') {
		input = input.slice(0, -1) + character;
	}
	else {
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
		result_data = result;
		histdata.push({ "expression":expression,"result":result_data});
		showHistory();
		result_data="" ;
		expression = "";
		input = result.toString()
		updateDisplay();
		
	} catch (error) {
		input = "Error";
		updateDisplay();
		result = null;
	}
}
function showHistory(){
	let log = document.getElementById('hist');
	let str="";
	for( let K in histdata){
		str+=histdata[K]["expression"]+"="+histdata[K]["result"]+"<br>";
		log.innerHTML=str;
		updateDisplay();
	}
	
}




