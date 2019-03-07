// One line direction!
//----------------------------------->
{
	var theNumber = Number(prompt("alege un nr. ", ""));
	alert("Nr. tau are radacina patrata din :" + theNumber * theNumber);
}

// two line direction!
//------\\\>
//------///>
{
	var theNumber = prompt("Introdu un nr: ", "0");
		if(!isNaN(theNumber)){
	    alert("radacina patrata a nr :" + theNumber * theNumber);
		}
}

//=======================================================

{
		var theNumber = Number(prompt("introdu un nr."));
	if(!isNaN(theNumber)){
	    console.log("radacina patrata a nr:" + theNumber * theNumber);
	}
	else{
	    console.log("Numere nu stii?! o_O");
	}

}

//========================================================
// three line direction!

{
		var num = Number(prompt("introdu nr."));
	if(num < 10)
	    console.log("Putin!");
	else if(num < 100)
	    console.log("bine!");
	else
	    console.log("Prea mult!");
}

//=========================================================
// while loop
// even nr's
{
	var number = 0;
	var proc = 1;
	while(number <= 12){
    	console.log(number);
    	console.log(proc++);
    	number += 2;
	}
}

// 2 powered by 10
{
	var number = 0;
	var proc = 1;
	while(number <= 12){
	    console.log(number);
	    console.log(proc++);
	    number += 2;
	}
}

// do while loop
{
	do{
    var name = prompt("Who are you?");
	}
	while(!name)
		console.log(name);
}


//=========================================================
// for loop
//	even nr's

{
	    for(var number = 0; number <= 12; number +=2)
        	console.log(number);
    	
}

// 2 powered by 10

{
	var result = 1;
	for(var counter = 0; counter < 10; counter++)
    	result *=2;
	console.log(result);
}





