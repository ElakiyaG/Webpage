const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const apikey="950bc50277077cd84fb121d8a7194924";

const s=document.querySelector(".text").value;
const b=document.querySelector("button");
const icon=document.querySelector(".cloud");
console.log(s)

async function checkweather(city) {
    const response=await fetch(apiurl + city + `&appid=${apikey}`);
    var data=await response.json();
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=data.main.temp + "°C";
    document.querySelector(".humid").innerHTML=data.main.humidity + "%";
    document.querySelector(".val").innerHTML=data.wind.speed + " km/h";

    if (data.weather[0].main=="Clouds")
        icon.src="assets/images/clouds.png"
    else if (data.weather[0].main=="Clear")
        icon.src="assets/images/clears.png"
    else if (data.weather[0].main=="Rain")
        icon.src="assets/images/rain.png"
    else if (data.weather[0].main=="Drizzle")
        icon.src="assets/images/drizzle.png"
    else if (data.weather[0].main=="Mist")
        icon.src="assets/images/mist.png"

    document.querySelector(".main").style.display="block";   
}

b.addEventListener("click",()=>{
    checkweather(s);
})