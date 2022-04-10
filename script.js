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