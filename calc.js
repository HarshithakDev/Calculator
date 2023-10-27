let result=null;
let input= " ";
let histdata=[];
// let expression = " ";
let result_data =" ";
let x=true;
let y="";
function updateDisplay(){
	//if(input.slice(-1)==="*"){
		//document.getElementById("inputext").value=input.slice(0,-1);
	//}else {
		document.getElementById("inputext").value=input;
}
function appendCharacter(character) {
	const lastChar = input.slice(-1);
	
	if ((lastChar === '+' || lastChar === '-' || lastChar === '*' || lastChar === '/') && (character === '+' || character === '-' || character === '*' || character === '/')) {
		
		input = input.slice(0, -1) + character;
	} else if (character === '%' && input !== "") {
		input=input + '%';
	
		
		if (input.includes('+') === false && input.includes('-') === false && input.includes('*') === false && input.includes('/') === false) {
			// input = (parseFloat(input) / 100).toString()+'*';
			result = (parseFloat(input.slice(0,-1)) / 100).toString();
		} else {
			for (let i = 1; i <= input.length; i++) {
				if (input.slice(-i).includes('+') || input.slice(-i).includes('-') || input.slice(-i).includes('*') || input.slice(-i).includes('/')) {
					temp = eval(input.slice(0, -i));
					per = input.slice(-(i - 1));
					if (input.slice(-i).includes('+')) {
						tempper = (parseFloat(temp) + (parseFloat(per.slice(0,-1)) / 100 * parseFloat(temp))).toString();
					} else if (input.slice(-i).includes('-')) {
						tempper = (parseFloat(temp) - (parseFloat(per.slice(0,-1)) / 100 * parseFloat(temp))).toString();
					} else if (input.slice(-i).includes('*')) {
						tempper =(parseFloat(temp) * (parseFloat(per.slice(0,-1)) / 100 * parseFloat(temp))).toString();
					} else if (input.slice(-i).includes('/')) {
						tempper = (parseFloat(temp) / parseFloat(per.slice(0,-1)) * 100).toString();
					}//else if(input.slice(-i).includes('%')){
						//tempper=(parseFloat(temp)/parseFloat(per.slice(0,-1))*100).toString();
					//}
					result=tempper;
					if(x===true){
						x=false;
						y+= result;
					}
					break;
				}
			}
		}
	}
	else
		{   if(x===true){
			input += character;
			}
			else{
			x=true;
			input = y+character;
			}
		}
		updateDisplay();
	}
	function clearDisplay() {
		input = "";
		y="";
		result = null;
		updateDisplay();
	}
	function DeletelastCharacter() {
		input = input.slice(0, -1);
		y=y.slice(0,-1);
		updateDisplay();
	}
	function Changesign() {
		if (input !== "") {
			if (input[0] === '-') {
				input = input.slice(1);
			} else {
				input = '-' + input;
			}
			updateDisplay();
		}
	}
	
	let resultAddedToHistory = false;
	function calculateResult() {
		if (input.trim() !== "") {
			try {
				if (input.slice(-1) === '%') {
					result = eval(result);
				} else {
					result = eval(input);
				}
				
				if (!isNaN(result)) {
					if (!resultAddedToHistory) {
						result_data = result;
						histdata.push({"expression":input, "result": result_data});
						resultAddedToHistory = true;
					}
					showHistory();
					result_data = "";
					//expression = "";
					input = result.toString();
					updateDisplay();
				} else {
					input = "Error";
					// expression = "Error";
					updateDisplay();
					result = null;
				}
				resultAddedToHistory = false;
			} catch (error) {
				input = "Error";
				// expression = "Error";
				updateDisplay();
				result = null;
			}
		}
	}
	function showHistory() {
		let log = document.getElementById('hist');
		let str = "";
		for (let i = 0; i < histdata.length; i++) {
			str += histdata[i]["expression"] + " = " + histdata[i]["result"] + "<br>";
			log.innerHTML = str;
		}
		//str+=histdata[1]["expression"]+"="+ histdata[1]["result"];
		//log.innerHTML =str;
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







