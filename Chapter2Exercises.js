////////////////////////////////////////////////////////////////
//==============================================================
//============				Exxercises Chapter 2		========
//==============================================================
//============		Exercise 1		==================
//============ whyle style, triangle Char ============
{
	var n = "#";
	var i = 0;
	while(i<7){
	    console.log(n);
	    n+="#";
	    i++;
	}
}


//================= for style =================================
{
	var i = 0;
	for(var n = "#"; i < 7; i++){
	    console.log(n);
	    n += "#";
	}
}

{
	var i = 0;
	for(var n = "#"; i < 7; n +="#"){
	    console.log(n);
	    i++;
	}
}

//===========	smallest variant in for style	===============

{
	for(var n = "#"; n.length < 7; n += "#")
		console.log(n);
}

//=============================================================
//==================		Exercise 2		===================
//==================		FizzBuzz!		===================
//==================	Fizz Buzz, while style	===============
{
	var n = 1;
	while(n <= 100){
    	if(n % 3 == 0)
        	console.log("Fizz");
    	else if(n % 5 == 0)
        	console.log("Buzz")
    	else 
        	console.log(n);
		n++;
	}
}

//==================		FizzBuzz		===================
{
		var n = 1;
	while(n <= 100){
	    if(n%3==0 && n%5==0)
	        console.log("FizzBuzz");
	    else if(n % 3 == 0)
	        console.log("Fizz");
	    else if(n % 5 == 0)
	        console.log("Buzz")
	    else 
	        console.log(n);
	n++;
	}
}

//==================	Fizz Buzz, for style	===============
//
{
	for(var n = 1; n <= 100; n++){
	    if(n%3 == 0)
	        if(n%5 != 0)
	            console.log("Fizz");
	    else if(n%5 == 0)
	            if(n%3 != 0)
	                console.log("Buzz")
	    else
	        console.log(n);
	}
}

//==================		FizzBuzz		===================
{
	for(var n = 1; n <= 100; n++){
	    if(n%3==0 && n%5==0)
	        console.log("FizzBuzz");
	    else if(n%3==0)
	        console.log("Fizz");
	    else if(n%5==0)
	        console.log("Buzz")
	    else
	        console.log(n);
	}
}

//=============================================================
//==================	Author style	=======================
//=============================================================

{
	for(let n = 1; n <= 100; n++){
	    let output = "";
	    if(n % 5 == 0) output += "Fizz";
	    if(n % 3 == 0) output += "Buzz";
	    console.log(output || n);
	}
}


//=============================================================
//==================		Exercise 3		===================
//==================		Chess Board		===================
//==================		while style		===================
//=============================================================

//================		while style		=======================

{
	let size = Number(prompt("introdu nr.","8"));
	let board = "";
	let x = 0, y = 0;
	while (x < size){
	    while(y < size){
	        if((x+y) % 2 == 0) board += " ";
	        else board += "#";
	        board += "\n";
	        y++;
	    }
	    x++;
	}
	console.log(board);
}

//================		for style		=======================
{
	var n = Number(prompt("Introdu nr.","8"));
	var c = "";
	for(var i = 0; i < n; i++){
	    c += "# ";
	    for(var j = 0; j < (n/2) - 1; j++){
	        c += "# ";
	    }
	    c += "\n";
	    if(i%2 == 0) c += " ";
	}
	console.log(c);
}


//=============================================================
//==================	Author style	=======================
//=============================================================

{
	let size = Number(prompt("introdu nr.","8"));
	let board = "";
	for(let x = 0; x < size; x++){
	    for(let y = 0; y < size; y++){
	        if((x+y)%2 == 0) board += " ";
	        else board += "#";
	    }
	    board +="\n";
	}
	console.log(board);
}