var output= [];


function fizzBuzz (){

for (var count= 100; count > 0; count--) {
    if ( count % 3 === 0 && count % 5 ===0){
        output.push("FizzBuzz");
    }
    else if (count % 3 === 0){
        output.push("Fizz");
    }
    else if (count % 5 ===0){
       output.push("Buzz"); 
    }else{
        output.push(count);
    }
    
    }
    console.log(output);
}