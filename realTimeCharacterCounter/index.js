const textareaEl = document.getElementById("textarea");
const totalCounterEl = document.getElementById("total-counter");
const remainingCounterEl = document.getElementById("remaining-counter");
textareaEl.addEventListener("keyup",()=>{
    updateCounter()
})

updateCounter()

function updateCounter(){
    totalCounterEl.innerHTML = textareaEl.value.length;
    const maxLengthEL = textareaEl.getAttribute("maxlength");
    remainingCounterEl.innerHTML = maxLengthEL - textareaEl.value.length;
}
