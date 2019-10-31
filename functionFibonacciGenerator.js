function fibonacciGenerator (n) {
    
    var fibonacciArray = [];

    for (var i=0; i < n; i++){
        
        if (i <= 1){
            fibonacciArray.push(i);
        }
        else{
            fibonacciArray.push(fibonacciArray[i-1] + fibonacciArray[i-2]);
        }
    }

alert(fibonacciArray); //return fibonacciArray;
}

fibonacciGenerator(5); //has to be written in console
