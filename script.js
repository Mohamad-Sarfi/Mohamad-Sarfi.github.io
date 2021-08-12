async function typeSentence(sentence, eleRef, delay = 300){
    const letters = sentence.split("");
    let i = 0;
    while (i < letters.length){
        await waitForMS(delay);
        document.getElementById(eleRef).append(letters[i])
        i++;
    }
    return
}

async function deleteSentence(eleRef){
    eleRef = document.getElementById(eleRef);
    let text = eleRef.textContent;
    const letters = text.split("");
    console.log("started")
    let i = 0;
    while(letters.length > 0){
        console.log("started")
        await waitForMS(100)
        letters.pop()
        eleRef.innerHTML = letters.join("");
    }
}

function waitForMS(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

typeSentence("Mohamad Sarfi, developer and data analyst", "sentence")
deleteSentence("sentence")

/***********************************************************************************Contact button***************/
const contact_btn = document.getElementById("contact-btn");
const contacts_list = document.getElementById("contacts-lists");

contact_btn.addEventListener('click', contact_collapse)
let contact_toggle = 0;
async function contact_collapse(){
    if (contact_toggle == 0){
        contacts_list.className = 'fadeIn';
        contacts_list.style.opacity = '1.0';
        contact_toggle++;    
    }
    else {
        contacts_list.style.opacity = '0';
        contact_toggle--;
    }
    
}


/********************************************************LANGUAGES**************** */
const language = document.getElementById("language-btn");
const language_images = document.querySelector(".language-imgs")
const persian = document.getElementById("language-fa")
const english = document.getElementById("language-en")
const deutsch = document.getElementById("language-de")

language.addEventListener('click', ()=>{
    language.style.display = 'none';
    persian.classList.add("visible-inline")
    persian.classList.remove("hidden")
    console.log(persian.classList)
    deutsch.classList.add("visible-inline")
    deutsch.classList.remove("hidden")
    english.classList.add("visible-inline")
    english.classList.remove("hide  ")
});