////////////////////////////////////////////////////////////////
//==============================================================
//============				Exxercises Chapter 3		========
//==============================================================
//======================		Exercise 1		================
//======================		min function	================
{
	function min(a,b){
		if(a < b) return a;
		else return b;
	}
	console.log(min(-11, -22));
	// -22
	console.log(min(3, 2));
	// 2
}


//======================		Exercise 2		================
//=============		isEven simple if else statement		========
{
	function isEven(n){
		if(n%2 == 0)
			return true;
		else
			return false;
	}
	console.log(isEven(2));	 
	// true
	console.log(isEven(51)); 
	// false
}

//======================	Recursion isEven	================
{
	function isEven(n){
		if(n == 0) return true;
		else if(n == 1) return false;
		else if (n < 0) return isEven( -n );
		else return isEven(n - 2);
	}
	console.log(isEven(50));
	console.log(isEven(75));
	console.log(isEven(-1));
	console.log(isEven(-2));
}

//=====================		count Bs	========================
{
	function countBs(string){
	    var result = 0;
	    for(var count = 0; count < string.length - 1; count++)
	        if(string.charAt(count) == "b" || string.charAt(count) == "B")
	            result ++;
	    return result;
	}
	console.log(countBs("toobs boobs bubbles"), ": - b chars in strng.");
}

//====================		countBs & countChar		============
{
	function countBs(string){
	    var result = 0;
	    for(var count = 0; count < string.length - 1; count++)
	        if(string.charAt(count) == "b" || string.charAt(count) == "B")
	            result ++;
	    return result;
	}
	function countChar(string, char){
	    var result = 0;
	    for(var count = 0; count < string.length - 1; count++)
	        if(string.charAt(count) == char)
	            result ++;
	    return result;
	}
	console.log(countBs("bbboooobbbbsbsbsbsbsbsbsbsbsbsbsbsbsbsbsbsbsbsbsbsbsbsbss"));
	console.log(countChar("kjjsadfkjahsfkjasfkjasdfkasjdfkasdjfkasdfjkjaskfjakjfdaksdjf","j"));
}

//===================		Author style		=================
{
	function countChar(string, ch){
	    var counted = 0;
	    for(var i = 0; i < string.length; i++)
	        if(string[i] == ch.toUpperCase() || string[i] == ch.toLowerCase()) // .toLowerCase() & .toUpperCase() is mi idea!
	                counted ++;
	    return counted;
	}
	function countBs(string){
	    return countChar(string, "B");
	}
	console.log(countBs("Bumblebee"));
	console.log(countChar("BumblebeE","e"));
}
