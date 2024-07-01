function calculate(){
    var height= document.getElementById('height').value;
    var weight= document.getElementById('weight').value;
    var age= document.getElementById('age').value;
    var m=document.getElementById('male').checked;
    var f=document.getElementById('female').checked;
    if(height==null || weight==null || age==null){
        alert('Please Check Your Field Values');
    }
    if(height=='' || weight=='' || age==''){
        alert('Please Check Your Field Values');
    }
    if(age.length>=3){
        alert('Please Check Your Field Values');
    }
    if(height&&weight&&age){
        calbmi();
    }

    
    function calbmi(){
        
        var meter=height/100;
        var result= weight / (meter*meter);
        if(result<18.5){
            document.getElementById('type').innerHTML = 'You are Underweight';
        }else if(18.5<=result && result<=24.9){
            document.getElementById('type').innerHTML = 'You are Healthy';
        }else if(25<= result && result<=29.9){
            document.getElementById('type').innerHTML  = 'You are Overweight';
        }else if(30<= result && result<=34.9){
            document.getElementById('type').innerHTML  = 'You are Obese';
        }else if(35<= result){
            document.getElementById('type').innerHTML  = 'You are Extremely obese';
        }else{
            document.getElementById('type').innerHTML  = 'Plaese Check your values';
        }
        document.getElementById('no').innerHTML=  result;
    }
    

}



function reset(){
    document.getElementById('height').value='';
    document.getElementById('weight').value='';
    document.getElementById('age').value='';
    document.getElementById('male').checked='';
    document.getElementById('female').checked='';
}
