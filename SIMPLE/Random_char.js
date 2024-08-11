//Extracting a character from random index everytime when code runs 

const str=prompt("Enter a String")
const len=Math.floor(Math.random()*str.length)
document.getElementById("main").innerHTML="Index of "+len+" in word "+str+" is "+str[len]