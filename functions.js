var primeiroAcesso = true;

function button(content) {
	// body...
	if(primeiroAcesso===true){
		primeiroAcesso=false;
		document.StormCalc.inputBox.value="";	
	}

	document.StormCalculator.textBoxVisor.value+=content;
}

function calcule() {
	// body...
	if(primeiroAcesso===true){
		primeiroAcesso=false;
	}else{
		primeiroAcesso=true;
	}
	var calculo = eval(document.StormCalculator.textBoxVisor.value);
	document.StormCalculator.textBoxVisor.value=calculo;
}

function clearAll(content) {
	// body...
	primeiroAcesso=true;
	document.StormCalculator.textBoxVisor.value=content;
}