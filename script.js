const form=document.querySelector('form');

form.addEventListener("submit",function(e){
    e.preventDefault();


    const height=parseInt(document.querySelector('#height').value);
    const weight=parseInt(document.querySelector('#weight').value);
    const result=document.querySelector('.result');
    
    if(height==='' || height<=0 || isNaN(height)){
        result.innerHTML= "Please give valid height";
    }
    else if(weight==='' || weight<=0 || isNaN(weight)){
        result.innerHTML= "Please give valid weight";
    }
    else{
        const bmi=(weight/((height*height)/10000)).toFixed(2);
        result.innerHTML=`Your BMI is calculated and it is: ${bmi}`
        const analysis = document.querySelector('.analysis');
        if(bmi<18.6){
            analysis.innerHTML="You are underweight please take care of your health."
        }
        else if(bmi >=18.6 && bmi <24.9){
            analysis.innerHTML="You are fit and fine. Keep it up."
        }
        else{
            analysis.innerHTML="You are overweight. Please take care of your health."
        }
    }
    
    

})