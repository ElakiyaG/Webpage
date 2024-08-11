//Billing Total items in a cart

const item1=Number(prompt("Enter ammount for item1"))
const item2=Number(prompt("Enter ammount for item2"))
const item3=Number(prompt("Enter ammount for item3"))
const item4=Number(prompt("Enter ammount for item4"))
const item5=Number(prompt("Enter ammount for item5"))
document.getElementById("main").innerHTML=`you have 5 items in your Cart.
And you total Bill is Rs.`+(item1+item2+item3+item4+item5)