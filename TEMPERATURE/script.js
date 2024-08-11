const val=Number(document.getElementById("no").value);
function convert(){
    if(document.getElementById('c').checked==true){
        document.getElementById("result").innerHTML=((val*9)/5)+32;
    }
    else if(document.getElementById('f').checked==true){
        document.getElementById("result").innerHTML=((val-32)*5)/9;
    }
}
function reset(){
    document.getElementById('c').checked==false;
    document.getElementById('f').checked==false;
    document.getElementById("no").value='';
}