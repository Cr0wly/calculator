var numb = 0, waiting=0;
var fPlus=0, fMinus=0, fMult = 0, fDiv = 0, fOneDivX = 0, fSquare = 0, 
fRoot = 0, fDot = 0;

function clickNumber(number){
	var display = document.getElementById('display');
	if(waiting==1){
		display.textContent=0;
		waiting = 0;
		fDot = 0;
	}
	if( display.textContent=='0' )
		display.innerHTML = number;
	else
		display.innerHTML += number;
}

function calculations(){
	if(fPlus==1){
		numb += parseFloat( document.getElementById('display').textContent );
		fPlus = 0;
	} else if (fMinus==1){
		numb -= parseFloat( document.getElementById('display').textContent );
		fMinus = 0;
	} else if (fMult==1){
		numb *= parseFloat( document.getElementById('display').textContent );
		fMult = 0;
	} else if (fDiv==1){
		if (numb!=0)
			numb /= parseFloat( document.getElementById('display').textContent );
		fDiv = 0;
	} else if (fOneDivX==1){
		if (numb!=0)
			numb = 1/numb;
		fOneDivX = 0;
	} else if (fSquare==1){
		numb *= numb;
		fSquare = 0;
	} else if (fRoot==1){
		if(numb>=0)
			numb = Math.sqrt(numb);
		else
			numb = 0;
		fRoot = 0;
	} else {
		if(parseFloat( document.getElementById('display').textContent )!=0)
			numb = parseFloat( document.getElementById('display').textContent );
	}
}

function plus(){
	calculations();
	fPlus = 1;
	display.innerHTML = numb;
	waiting = 1;
}

function minus(){
	calculations();
	fMinus = 1;
	display.innerHTML = numb;
	waiting = 1;
}

function equal(){
	calculations();
	display.innerHTML = numb;
	waiting = 1;
}

function mult(){
	calculations();
	fMult = 1;
	display.innerHTML = numb;
	waiting = 1;
}

function div(){
	calculations();
	fDiv = 1;
	display.innerHTML = numb;
	waiting = 1;
}

function oneDivX(){
	calculations();
	fOneDivX = 1;
	calculations();
	display.innerHTML = numb;
	waiting = 1;
}

function square(){
	calculations();
	fSquare = 1;
	calculations();
	display.innerHTML = numb;
	waiting = 1;
}

function root(){
	calculations();
	fRoot = 1;
	calculations();
	display.innerHTML = numb;
	waiting = 1;
}

function clean(){
	calculations();
	numb = 0;
	fDot = 0;
	display.innerHTML = numb;
}

function del(){
	var display = document.getElementById('display');
	if(waiting==1){
		display.textContent=0;
		waiting = 0;
	} else if( display.textContent > 9 ){
		if(display.textContent[display.textContent.length-1]=='.')
			fDot = 0;
		display.innerHTML = display.textContent.slice(0, -1);
	}
	else if ( display.textContent > 0 )
		display.innerHTML = 0;
}

function dot() {
	if (fDot == 0){
		var display = document.getElementById('display');
		if(waiting==1){
			display.textContent=0;
			waiting = 0;
		}
		display.innerHTML += '.';
		fDot = 1;
	}
}