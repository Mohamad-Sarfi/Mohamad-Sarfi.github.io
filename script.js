//**********************************************************************Elements of the page *******/
const contact_btn = document.getElementById("contact-btn");
const contacts_list = document.getElementById("contacts-lists");

const ageElement = document.getElementById("age");
const dayElement = document.getElementById("day");

const menu_btn = document.getElementById("menu-btn");
const side_menu = document.getElementById("side-nav");

const side_nav = document.getElementById("side-nav");
const side_links = document.getElementsByClassName("side-link");

//Main divs of the document
const main_divs = {}
main_divs[home] = document.getElementById('home');
main_divs[aboutMe] = document.getElementById('aboutMe');
main_divs['experience'] =  document.getElementById("experience");
main_divs[skills]  = document.getElementById('skills')

/************************************************************************************************/


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

typeSentence("Mohamad Sarfi", "sentence")
deleteSentence("sentence")



/********************************************************NEXT BOTTON JOBS**** */

const next_button = document.getElementsByClassName('job-circle');


Array.from(next_button).forEach(Element => {
    
    Element.addEventListener('click', () => {
        
        id = Element.id
        id = id.split('-')
        if (id[1] == 3) id[1] = 1
        console.log(`#circle-${id[1]}`)
        window.location = `#circle-${id[1]}`;
    });
})




/***********************************************************************************Contact button***************/


contact_btn.addEventListener('click', contact_collapse)
let contact_toggle = 0;
async function contact_collapse(){
    contact_btn.style.display = 'none';
    console.log(contact_toggle);
    if (contact_toggle == 0){
        contacts_list.className = 'fadeIn';
        contacts_list.style.opacity = '1.0';
        contacts_list.style.display = 'flex';
        contact_toggle++; 

    }
    else {
        contacts_list.style.opacity = '0';
        contacts_list.style.display = 'none';
        contact_toggle--;
    }
    
}

/*************************************************************AGE****** */



const date = new Date();
const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDate()

let age = 0;
let exact_age = 0;
age = year - 1995;

const start = new Date(year, 5,25);
let diff = date - start;
diff = Math.floor(diff / 1000 / 60 / 60 / 24);
console.log(diff)


ageElement.innerHTML = age;
dayElement.innerHTML = diff;
/********************************************************LANGUAGES**************** */
/*const language = document.getElementById("language-btn");
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
});*/

/********************************************************************Mobile menu***** */

let menu_toggle = 0;

menu_btn.addEventListener('click', () => {
    if (menu_toggle == 0){
        side_menu.style.display = "block";
        menu_toggle++;
    }
    else {
        side_menu.style.display = "none";
        menu_toggle--;
    }
})


/***************************************************************************SKILLS DETAILS ***********/
const list_of_skills = document.getElementsByClassName("skill-card");
const skills_details = document.getElementById("skill-details-back");
const skills_details_img = document.getElementById("skill-img-details")
const skill_details_title = document.getElementById("skill-details-title");
const skill_explain = document.getElementById("skill-explain");
const skill_detail_list = document.getElementById("skill-detail-list");

const close_x = document.getElementById("close-skill-details-btn");
close_x.addEventListener('click', () => {
    skills_details.style.display = 'none';
    let child = skill_detail_list.lastElementChild;
    console.log(child);

    while(child){
        skill_detail_list.removeChild(child);
        child = skill_detail_list.lastElementChild;
    }
});

const skills_description = {
    'python' : "I've been writing Python code for almost 2 years, and I'm familiar with SciPy stack (Numpy, Pandas, Matplotlib, Seaborn), Machine learning libraries (Tensorflow, Pytorch) and PyQt.",
    "javascript": "JavaScript is my favorite language. I've been teaching JavaScript for almost 1 year and have mastered most details and concepts of it (ES6). I also do some self-defined web projects, hence I've included HTML/CSS as well.",
    'java': "I've been in touch with Java ever since I was in college, so it's been about 7 years since I know Java and I've developed a couple of simple Android apps with it.",
    'kotlin': "I've been teaching this wonderful language for a couple of months and I'm also developing my 'farm management' android app with it.",
    'sql': "As a computer graduate I feel confident about basic SQL instructions (CRUD), I've also been using SQLite for my android app and desktop finacial management app and I'm also familiar with Postgresql and MongoDB",
    'uiux': "As I'm intersted in web and app design and beside being a computer science teacher I've been working as a graphic designer, creating posters, infographics and... ",
    'ai': "Data science and Artificial intelligence are my favorite fields. In my free time I usually take AI related online classes.",
    'android' : "I've developed a farm management app for android and I'm familiar with Modern Android Development (MAD) like Jetpack, Room, MVVM architecture and ... "

}

const skills_sublist = {
    'python': ['Pandas', 'Numpy', 'Matplotlib', 'Seaborn', 'PyQt', 'Tensorflow', 'Jupyter'],
    'javascript': ['Vanilla ES6', 'React', 'Redux', 'Next', 'Node', 'D3'  ],
    'java': ['Java EE','Android SDK'],
    'kotlin' : ['Croutines', 'flow', 'Android SDK'],
    'sql': ['SQLite', 'Postgresql', 'MongoDB'],
    'uiux': ['Photoshop', 'Illustrator', 'InDesign', 'Adobe XD', 'Material Design'],
    'ai': ['Data Analysis', 'Machine learning', 'Deep learning', 'Computer Vision'],
    'android': ['Android SDK', 'Jetpack', 'Android Studio', 'MVVM', 'Material design', 'Room']
}

let new_li;

Array.from(list_of_skills).forEach(e => {
    e.addEventListener('click', () => {
        skills_details.style.display = 'block';
        skills_details_img.src = `images/${e.id}.png`;
        skill_details_title.innerHTML = `${e.id}`;
        skill_explain.innerHTML = skills_description[e.id];

        for (li of skills_sublist[e.id]){
            new_li = document.createElement('li');
            new_li.innerHTML = li;
            new_li.classList.add("skill-detail-list-li");
            skill_detail_list.appendChild(new_li);
        }

    });
});



/*******************************************************************SIDE NAV*********************** */

Array.from(side_links).forEach(e => {
    e.addEventListener('click', () => {
        side_nav.style.display = 'none';
    })
})

//highlight menu items if visible
const side_nav_items = document.getElementsByClassName('side-nav-item');

for (d in main_divs) {
    if (d.offsetParent !== null){
        console.log(d + 'is visible')
        for (e of side_nav_items){
            if (e.firstChild.href = `#${e}`){
                
            }
        }
    }
}


/********************************ABOUTME */
const about = document.getElementById('aboutMe')
window.addEventListener('scroll', o => {
    let color = getComputedStyle(about)['background-color'];
    let colorNumber = color.split('(');
    colorNumber = colorNumber[1].split(')');
    colorNumber = colorNumber[0].split(',');
    let new_color = []
    colorNumber.forEach(x => {
        let nx = Number(x)
        nx -= 1
        new_color.push(nx)
    });
    console.log(`rgb(${new_color.join()})`)
    
    //about.style.backgroundColor = `rgb(${new_color.join()})`
});