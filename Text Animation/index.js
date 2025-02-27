const containerE1 = document.querySelector('.container');

const careers = ["Software Engineer", "Web Developer", "Freelancer", "Data Scientist"];

let careersIndex = 0;
let charactersIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

updateText();

function updateText() {
    const currentText = careers[careersIndex];
    
    if (!isDeleting) {
        containerE1.innerHTML = `<h1>I am a ${currentText.substring(0, charactersIndex)}</h1>`;
        charactersIndex++;
        
        if (charactersIndex > currentText.length) {
            isDeleting = true;
            typingSpeed = 50;
            setTimeout(updateText, 1500); // Pause at the end of the word
            return;
        }
    } else {
        containerE1.innerHTML = `<h1>I am a ${currentText.substring(0, charactersIndex)}</h1>`;
        charactersIndex--;
        
        if (charactersIndex === 0) {
            isDeleting = false;
            careersIndex = (careersIndex + 1) % careers.length;
            typingSpeed = 100;
        }
    }
    
    setTimeout(updateText, typingSpeed);
}

