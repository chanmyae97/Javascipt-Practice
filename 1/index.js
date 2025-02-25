const containerE1 = document.querySelector('.container')

const careers =[ "Software Engineer","Web Developer", 'Freelencer', 'Data Scientist' ];

let careersIndex = 0;

let charactersIndex = 0;

updateText();

function updateText(){
    charactersIndex++;
    containerE1.innerHTML = `<h1> I am a ${careers[careersIndex].slice(0,charactersIndex)} </h1>`;
    if(charactersIndex === careers[careersIndex].length){
        careersIndex++;
        charactersIndex = 0;
    }
    if(careersIndex === careers.length){
        careersIndex = 0;
    }
    setTimeout(updateText, 100);
}

