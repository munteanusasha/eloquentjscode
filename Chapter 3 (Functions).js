//	Functions and it's call // 
{
	var square = function(x){
    return x*x;
	}
	console.log(square(7));
}

//	power function 		=======================================================

{
	var makeNoise = function(){
    console.log("Crack!");
	};
	makeNoise();

	var power = function(base, exponent){
	    var result = 1;
	    for(var count = 0; count < exponent; count++)
	        result *= base;
	    return result;
	};
	console.log(power(2,10));
}

//	outside and inside variables	==========================================

{
	var x = "outside";
	var f1 = function(){
	    var x = "inside f1";
	};
	f1();
	console.log(x);

	var f2 = function(){
	    x = "inside f2";
	};
	f2();
	console.log(x);
}

//============================================================================

{
	var landscape = function(){
    var result = "";
    var flat = function(size){
        for(var count = 0; count < size; count++)
        result += "_"
    };
    var mountain = function(size){
        result += "/";
        for(var count = 0; count < size; count++)
            result += "'";
        result += "\\"
    };
    flat(3);
    mountain(4);
    flat(6);
    mountain(1);
    flat(1);
    return result;
	};
	console.log(landscape());
}

//	in block local var
{
	{
		let number = 1;
	}
	let number = 2;
} 

//	another function square
{
	function square(x){
		return x*x;
	}
	console.log(square(3));
}

//	function is called before its declaration
{
	console.log("The future says:", future());
	function future(){
		return "We STILL jave no flying cars.";
	}
}

//	call stack
{
		function greet(who){
			console.log("Hello, " + who)
		}
		greet("Semion");
		console.log("Pakeda!");
}

//======================    Stack overflow  ================================
{
    function chicken(){
    	return egg();
    }
    function egg(){
        return chicken();
    }
    console.log(chicken() + "come first.");
}

//======================	Base & Exponent function 	====================
{
	function power(base, exponent){
	    if(exponent == undefined)
	        exponent = 2;
	    var result = 1;
	    for(var count = 0; count < exponent; count++)
	        result *= base;
	    return result;
	};
	console.log(power(4));
	//->	16
	console.log(power(2,6));
	//->	64
}

//======================	function as value	============================
{
	var power = function(base, exponent){
	    var result = 1;
	    if(exponent == undefined)
	        exponent = 2;
	    for(var count = 0; count < exponent; count++)
	        result *= base;
	    return result;
	};
	var power = power(12);
	console.log(power);
}

//===========================	Closure		================================
{
	function wrapValue(n){
	    var localVariable = n;
	    return function() {return localVariable;};
	}
	var wrap1 = wrapValue(1);
	var wrap2 = wrapValue(2);

	console.log(wrap1());
	console.log(wrap2());
}

//=====================		Multiplier 		================================
{
	function multiplier(factor){
	    return function(number){
	        return number * factor;
	    };
	}
	var twice = multiplier(3);	//multiplier retutn frozen code
	console.log(twice(5));
}

//======================	Devision	====================================
{
	function division(factor){
	    return function(number){
	        return number / factor;
	    };
	}
	var divide = division(7);
	console.log(divide(21));
}


//======================	Recursion		================================
{
	function power(base, exponent){
	    if(exponent == 0 || exponent == undefined)
	        return 1;
	    else
	        return base * power(base, exponent -1);       
	};
	console.log(power(2));
	console.log(power(2,5));
	//1
	//32
}

//======================	Recursion / FindSolution	====================
{
	function findSolution(target){
	    function find(start, history){
	        if(start == target)
	            return history;
	        else if(start > target)
	            return null;
	        else 
	            return find(start + 5 , "(" + history + "+5)") ||
	                   find(start * 3 , "(" + history + "*3)");
	    }
	    return find(1, "1");
	}
	console.log(findSolution(32));

 //((((1*3)*3)*3)+5)
}

//===========================================================================
{

	function findSolution(target){
	    function find(start, history){
	        if(start == target)
	            return history;
	        else if(start > target)
	            return null;
	        else 
	            return find(start + 5 , "(" + history + "+5)") ||
	                   find(start * 3 , "(" + history + "*3)");
	    }
	    return find(1, "1");
	}
	var find = findSolution(24);
	console.log(find);
	console.log(findSolution(32));

 //  (((1*3)+5)*3)
 //  ((((1*3)*3)*3)+5)
}

//=======================	Growinf Functions	==============================
//=======================	printFarmInventory 1.0	==========================
{
	function printFarmInventory(cows, chickens){
	    var cowString = String(cows);
	    while(cowString.length < 3)
	        cowString = "0" + cowString;
	    console.log(cowString + " Cows");
	    var chickenString  = String(chickens);
	    while(chickenString.length < 3)
	        chickenString = "0" + chickenString;
	    console.log(chickenString + " Chickens")
	}
	printFarmInventory(3,11);

// 003 Cows
// 011 Chickens
}
//======================	printFarmInventory 2.0	============================
{

	function printZeroPaddedWithLabel(number, label){
	    var numberString = String(number);
	    while(numberString < 3)
	        numberString = "0" + numberString;
	    console.log(numberString + " " + label);
	}
	function printFarmInventory(cows, chickens, pigs){
	    printZeroPaddedWithLabel(cows, "Cows");
	    printZeroPaddedWithLabel(chickens, "Chickens");
	    printZeroPaddedWithLabel(pigs, "Pigs");
	}
	printFarmInventory(7,11,3);

// 7 Cows
// 11 Chickens
// 3 Pigs
}
//======================	printFarmInventory 3.0	=============================
{
	function zeroPad(number, width){
	    var string = String(number);
	    while(string.length < width)
	        string = "0" + string;
	    return string;
	}
	function printFarmInventory(cows, chickens, pigs){
	    console.log(zeroPad(cows, 3) + " Cows");
	    console.log(zeroPad(chickens, 3) + " Chickens");
	    console.log(zeroPad(pigs, 3) + " Pigs");
	}
	printFarmInventory(7, 11, 3);

// 007 Cows
// 011 Chickens
// 003 Pigs
}