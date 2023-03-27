const texts = document.querySelector(".texts");

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new window.SpeechRecognition();
recognition.interimResults = true;

let p = document.createElement('p');

recognition.addEventListener('result', (e)=>{

    const text = Array.from(e.results)
    .map(result =>result[0])
    .map(result =>result.transcript)
    .join('');

    p.innerText = text;
    texts.appendChild(p);
    if(e.results[0].isFinal){
        if(text.includes('shades down') || text.includes('lower shade')){
            shades_down();
        }
        if(text.includes('shades up') || text.includes('raise shade')){
            shades_up();
        }
        if(text.includes('lights on') || text.includes('turn on lights')){
            Light_on();
        }
        if(text.includes('lights off') || text.includes('turn off lights')){
            Light_off();
        }
        p = document.createElement('p');
    }
    console.log(text);
})

recognition.addEventListener('end',()=>{
    recognition.start()
})
function Light_on(){
    console.log('hello');
    document.getElementById('Light').src = "Daco_on.png";
}
function Light_off(){
    console.log('hello');
    document.getElementById('Light').src = "Daco.png";
}
function shades_down(){
    console.log('hello');
    document.getElementById('Shade').src = "shadeDown.png";
}
function shades_up(){
    console.log('hello');
    document.getElementById('Shade').src = "shadeUp.png";
}
recognition.start();