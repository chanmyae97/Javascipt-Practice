const imgEl = document.querySelector('img');
const textEl = document.querySelector('.text');
const usernameEl = document.querySelector('.username');


let idx = 0;

updateTestimonial();

function updateTestimonial(){
    const {name, content, userImage } = testimonials[idx];
    imgEl.src = userImage;
    textEl.innerText = content;
    usernameEl.innerText = name;
    idx++;
    if(idx === testimonials.length){
        idx = 0;
    }
    setTimeout(() => {
        updateTestimonial();
    },4000);
}