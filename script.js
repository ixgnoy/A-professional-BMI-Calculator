document.getElementById("bmiform").addEventListener('submit',function(e){
    e.preventDefault();

    const gender=document.getElementById('gender').value;
    const age=parseInt(document.getElementById('age').value);
    const heightCm=parseInt(document.getElementById('height-cm').value);
    const weight=parseInt(document.getElementById('weight').value);

    if(gender && age && heightCm && weight){

        const heightInMeters=(heightCm/100);
        const bmi=weight/(heightInMeters*heightInMeters);
        const resultElement=document.getElementById("result");

        let category="";
        if(bmi<18.5){
            category='Underweight.';
        }else if(bmi>=18.5 && bmi< 24.9){
            category='Normal weight.';
        }else if(bmi>=25 && bmi<29.9){
            category='Overweight.'
        }else{
            category='obese.'
        }

        let resultMessage='Your BMI: '+ bmi.toFixed(2) +'<br>';
        resultMessage+='Category: '+category;
        resultElement.innerHTML=resultMessage;
    }
})