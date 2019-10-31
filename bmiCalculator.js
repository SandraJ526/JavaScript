

function bmiCalculator(weight, height) {

    var interpretation;
    
    var bmi = Math.round(weight / Math.pow(height,2)); 
    
    
       if (bmi <= 18.5) {
        interpretation= alert("Your BMI is " + bmi + ", so you are underweight.");

      } else if (bmi > 18.5 && bmi <= 24.9) {
        interpretation= alert("Your BMI is " + bmi + ", so you have a normal weight.");

      } else if  (bmi > 24.9) {
        interpretation= alert("Your BMI is " + bmi + ", so you are overweight.");
      }
       return interpretation;
     }
        bmiCalculator(60, 1.7);
    
    
    
    