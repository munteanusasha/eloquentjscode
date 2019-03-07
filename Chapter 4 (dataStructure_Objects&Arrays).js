//==============================================================
//=================		Chapter 4		========================
//=========		Data Structure, Objects & Arrays	============
//==============================================================
//=================		Arrays		============================
{
	var listOfNumbers = [2, 3, 5, 7, 11];
	console.log(listOfNumbers[1]);
	console.log(listOfNumbers[3 - 1]);
	console.log(listOfNumbers[3] - 1);
}

//=================		Methods		============================
{
	var doh = "Doh";
	console.log(typeof doh.toUpperCase);
	console.log(doh.toUpperCase());

// -> function
// -> DOH
}

//===============	Another String Methods	====================
{
	var mack = [];
    mack.push("Трест,");
    mack.push("которыи","лопнул");
    console.log(mack);
    console.log(mack.join(" "));
    console.log(mack.pop());
    console.log(mack);

 // [object Array]: ["Трест,", "которыи", "лопнул"]

 // Трест, которыи лопнул

 // лопнул

 // [object Array]: ["Трест,", "которыи"]
}

//==============	Object 		===============================
{
	var day1 = {
	    squirrel : false,
	    events : ["Lucru", "Copac Atins", "Pizza", "Cross", "TV"]
	};
	console.log(day1.squirrel);
	console.log(day1.wolf);
	day1.wolf = false;
	console.log(day1.wolf);
}

//==============	value name unaviable / must be in " "  ===
{
	var description = {
	    work : "Go to work",
	    "touch tree" : "touch tree"
	};
}

//==============	delete and in operators		================
{
	var anObject = {
	    left : 1; right : 2
    };
	console.log(anObject.left);
	delete anObject.left;
	console.log(anObject.left);		// undefined
	console.log("left" in anObject);	// false
	console.log("right" in anObject);	// true
}

//===============	Journal		=================================
{
	var journal = [
	    {
	        events : ["Work", "Tree", "Pizza", "Cross", "TV"],
	        squirrel : false
	    },
	    {
	        events : ["Work", "Ice Cream", "Varza colorat", "Lasagna", "Tree", "Teeth clear"],
	        squirrel : false
	    },
	    {
	        events : ["Weekend", "Bicycle", "Break", "Nuts", "Beer"],
	        squrrel : true
	    }
	];
}

//==================		Mutability		=====================
{
	var object1 = {value : 10};
	var object2 = object1;
	var object3 = {value : 10};
	console.log(object1 == object2);	//true
	console.log(object1 == object3);	//false
	object1.value = 15;
	console.log(object2.value);		// 15
	console.log(object3.value);		// 10	
}

//==================		The Lycantrope's Log 	=============
{
	var journal = [];
	function addEntry(events, didITurnIntoASquirrel){
	    journal.push({
	        events : events,
	        squirrel : didITurnIntoASquirrel
	    });
	}
	addEntry(["Work", "Tree", "Pizza", "Cross", "TV"],false);
	addEntry(["Work", "Ice Cream", "Colorful cabbage", "Lasagna", "Tree", "Teeth Clear"],false);
	addEntry(["Weekend", "Bicycle", "Break", "Nuts", "Beer"], true);
	console.log(journal);
}

//==================