var numberOfBottles = 99

while (numberOfBottles >= 1) {
    var bottleWord = "bottle";
       
    if (numberOfBottles >=2) {
        bottleWord = "bottles";
    }
    
    console.log(numberOfBottles + " " + bottleWord + " of beer,");
    console.log("Take one down, pass it around,");
	numberOfBottles--;
	
    if (numberOfBottles === 1) {
        bottleWord = "bottle";
    } 
    else if (numberOfBottles === 0){
       var numberOfBottles= "No more" ;
       bottleWord = "bottles";
    }
       console.log(numberOfBottles + " " + bottleWord + " of beer on the wall.");
}