const url="https://api.dictionaryapi.dev/api/v2/entries/en/";   
//https://dictionaryapi.dev/
const head=document.getElementById("heading");
const btn_search=document.getElementById("button");
const sound=document.getElementById("sound");

btn_search.addEventListener("click",() => {
    let val=document.getElementById("type").value;
    fetch(`${url}${val}`).then((response)=>response.json()).then((data) => {
        console.log(data);

        if(data.title!=="No Definitions Found"){
            result.innerHTML=`
        <div class="section">
                <h1 class="heading" id="heading">${val}</h1>
                <button class="sound" onclick="play()"><i class="fa-solid fa-microphone"></i></button>
            </div>
            <div class="details">
                <p class="p1">${data[0].meanings[0].partOfSpeech}${data[0].phonetic}</p>
                <p class="p2"></p>
            </div>
            <div class="output">
                <p class="meaning">${data[0].meanings[0].definitions[0].definition}</p>
                <p class="example">${data[0].meanings[0].definitions[0].example ||" "}</p>
        </div>`;
        sound.setAttribute("src", `${data[0].phonetics[0].audio}`);
        console.log(sound);
        }else{
            result.innerHTML=`
        <div class="section" style="margin-top:50px">
                <h2 class="heading" id="heading">${data.title}</h2>
        </div>`;
    
        }
    });
});

function play(){
    sound.play();
}