let val=document.getElementById("no").value;
function calculate(){
    let from=document.getElementById("unitfrom").value;
    let to=document.getElementById("unitto").value;
    if(from=="cm" && to=="m"){
        document.getElementById("result").innerHTML=val/100;
    }
    else if(from=="m" && to=="cm"){
        document.getElementById("result").innerHTML=val*100;
    }
    else if(from=="in" && to=="cm"){
        document.getElementById("result").innerHTML=val*2.54;
    }
    else if(from=="cm" && to=="in"){
        document.getElementById("result").innerHTML=val/2.54;
    }
    else if(from=="cm" && to=="ft"){
        document.getElementById("result").innerHTML=val*0.0328084;
    }
    else if(from=="ft" && to=="cm"){
        document.getElementById("result").innerHTML=val*30.48;
    }
    else if(from=="ft" && to=="m"){
        document.getElementById("result").innerHTML=val*0.3048;
    }
    else if(from=="m" && to=="ft"){
        document.getElementById("result").innerHTML=val*3.28084;
    }
    else if(from=="m" && to=="in"){
        document.getElementById("result").innerHTML=val*39.37001;
    }
    else if(from=="in" && to=="m"){
        document.getElementById("result").innerHTML=val*0.0254;
    }
    else if(from=="in" && to=="ft"){
        document.getElementById("result").innerHTML=val/12;
    }
    else if(from=="ft" && to=="in"){
        document.getElementById("result").innerHTML=val*12;
    }
    else if(from=="kg" && to=="Ib"){
        document.getElementById("result").innerHTML=val*2.20462;
    }
    else if(from=="Ib" && to=="kg"){
        document.getElementById("result").innerHTML=val/2.20462;
    }
    else{
        document.getElementById("result").innerHTML="Conversion not Possible";
    }
}
function reset(){
    document.getElementById("no").value='';
}