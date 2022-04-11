
function social_buttons_handler(){
    const buttons = document.querySelectorAll(".social-item");

    buttons.forEach((b, i) => {
        b.addEventListener("click", () => {
            switch(i){
                case 0: window.open("https://wa.me/989195490049", "_blank").focus(); break;
                case 1: window.open("https://www.linkedin.com/in/mohamadsarfi46/", "_blank").focus(); break;
                case 2: window.open("https://join.skype.com/invite/Ap90wKxbLRp6", "_blank").focus(); break;
                case 3: window.open("https://www.instagram.com/mohamad_srf/", "_blank").focus(); break;
                case 4: window.open("https://github.com/Mohamad-Sarfi", "_blank").focus(); break;
                case 5: window.open("mailto:sarfimohamad46@gmail.com", "_blank").focus(); break;
            }
        });
    });

}
social_buttons_handler();


const lets_talk_btn_handler = (() => {
    const btn = document.querySelector(".nav-contact");
    btn.addEventListener("click", () => {
        window.open("https://wa.me/989195490049", "_blank").focus();
    });
})();

let navDrawer_flag = 0;
const navDrawer_btn_handler = (() => {
    const btn = document.querySelector(".nav-drawer");
    const sideBar = document.querySelector(".side-menu");

    btn.addEventListener("click", () => {
        if (navDrawer_flag == 0){
            sideBar.classList.add("show");
            navDrawer_flag = 1;
        } else {
            sideBar.classList.remove("show");
            navDrawer_flag = 0;
        }
    });
})();


const sideMenuItems_handler = (() => {
    document.querySelectorAll(".side-li").forEach( node =>{
        node.addEventListener("click",  () => {
            document.querySelector(".side-menu").classList.remove("show");
            navDrawer_flag = 0;
        });
    });
})();


/************************************** skills************************* */
let skill_detail_flag = false;

function skill_deatils_feed(id){
    let txt = "";
    console.log(id);
    switch(id){
        case "android": 
            txt = "I've been working on Android projects (mainly in the university) for a couple of years. I've also been teaching Kotlin. Now in my startup \"Kesht Afzar\" I'm using Kotlin, Jetpack libraries (Room, Compose, ...) to develop a farm management app.";
            break;
        case "data-science":
            txt = "I'm interested in A.I and data science. I've already taken multiple online courses in order to improve my knowledge in ML, DL, data analysis and ... My startup is also concerned with data driven decision making to help farmers.";
            break;
        default:
            txt = "As a computer science teacher I've got a good grasp of JavaScript both in frontend and backend technologies. I'm pretty much familiar with Reach, Node, Postgresql and MongoDB. Currently the backend technology of my sturtup is based on Java Spring.";
    }
    return txt;
}

function remove_all_skills(skill_btns){
    skill_btns.forEach(btn => {
        btn.classList.add("animate-in");
        btn.classList.add("hidden");
        btn.classList.remove("show");
        
    });
}

function show_skill_details(detail){
    skill_detail_flag = true;
    detail.classList.add("animate-in");
    detail.classList.add("show");
    detail.classList.remove("hidden");
}

function show_all_skills(skill_btns){
    skill_btns.forEach(btn => {
        btn.classList.add("show");
        btn.classList.remove("hidden");
    });
}

function remove_skill_details(detail){
    skill_detail_flag = false;
    detail.classList.add("hidden");
    detail.classList.remove("show");
}


function skill_click_handler(){
    const buttons = document.querySelectorAll(".skill-item");
    const details = document.querySelector(".skill-detail");
    const skill_div = document.querySelector(".skills");
    
    buttons.forEach(btn => {
        btn.addEventListener("click", () => {
            remove_all_skills(buttons);
            show_skill_details(details);
            details.innerHTML = skill_deatils_feed(btn.id);
            details.focus();
        });
    });

    details.addEventListener("click", () => {
        show_all_skills(buttons);
        remove_skill_details(details);
    });

}

skill_click_handler();

