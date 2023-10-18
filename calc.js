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
	
	if ((lastChar === '+' || lastChar === '-' || lastChar === '*' || lastChar === '/') && (character === '+' || character === '-' || character === '*' || character === '/')) {
		
		input = input.slice(0, -1) + character;
	} else if (character === '%' && input !== "") {
		
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
		result_data = result;
		histdata.push({ "expression":input,"result":result_data});
		showHistory();
		result_data="" ;
		expression = "";
		input = result.toString()
		updateDisplay();
		
	} catch (error) {
		input = "Error";
		expression="Error";
		updateDisplay();
		result = null;
	}
}
function showHistory() {
	let log = document.getElementById('hist');
	let str = "";
	for (let i = 0; i < histdata.length; i++) {
		str += histdata[i]["expression"] + " = " + histdata[i]["result"] + "<br>";
	}
	log.innerHTML =str;
}
let historyVisible = false; 

function toggleHistory() {
	const historyLog = document.getElementById("hist");
	const historyButton = document.getElementById("showHistoryButton");
	
	if (!historyVisible) {
		historyLog.style.display = "block";
		historyButton.textContent = "Hide ";
		showHistory();
	} else {
		historyLog.style.display = "none";
		historyButton.textContent = "History";
	}
	
	historyVisible = !historyVisible;
}






