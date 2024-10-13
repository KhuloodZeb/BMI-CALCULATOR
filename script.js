var calculateBmi = document.getElementById('button');
var output = document.getElementById('output');
calculateBmi.onclick = function(){
    var input1 = document.getElementById('input1').value;
    var input2 = document.getElementById('input2').value;
    
    if(input1 === "" || input2 === ""){
        output.textContent = "Enter values first";
    }
    else{
        var weight = parseInt(input1);
        var height = parseInt(input2);

        if(height === 0){
            output.textContent = "Error! Height cannot be zero";
        } else {
            var calculatedValue = weight / (height * height);
            output.textContent = "Your BMI is " + calculatedValue.toFixed(2);
        }
    }
}