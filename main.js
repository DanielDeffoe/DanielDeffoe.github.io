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
        if(text.includes('go to flight') || text.includes('flight')){
            selection(0);
            
        }
        if(text.includes('go to music') || text.includes('Music')){
            selection(1);
            
        }
        if(text.includes('go to video') || text.includes('Video')){
            selection(2);
            
        }
        p = document.createElement('p');
    }
    console.log(text);
})

recognition.addEventListener('end',()=>{
    document.getElementById('PTT').style.background = 'white';
})
function start_voice(){
    document.getElementById('PTT').style.background = 'red';
}
function selection(title)
{
    document.getElementById('Flight').style.background = 'white';
    document.getElementById('Music').style.background = 'white';
    document.getElementById('Video').style.background = 'white';
    switch(title)
    {
        case 0:
            document.getElementById('Flight').style.background = 'red';
        break;
        case 1:
            document.getElementById('Music').style.background = 'red';
        break;
        case 2:
            document.getElementById('Video').style.background = 'red';
        break;
    }

}
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