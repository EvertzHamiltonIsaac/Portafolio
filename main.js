import './js/mixitup.js'
import './js/swiper.js'

const iconMenu = document.querySelector('#icon_menu');
const menu = document.querySelector("#menu"); 

iconMenu.addEventListener('click', function(){
    menu.classList.toggle("menu-show");
});

const home = document.querySelector('#home_id');
const about = document.querySelector('#about_id');
const skills = document.querySelector('#skills_id');
const language = document.querySelector('#language_id');
const exp = document.querySelector('#exp_id');
const brief = document.querySelector('#brief_id');
const contact = document.querySelector('#contact_id');

home.addEventListener('click', function(){
    menu.classList.toggle("menu-show");
});
about.addEventListener('click', function(){
    menu.classList.toggle("menu-show");
});
skills.addEventListener('click', function(){
    menu.classList.toggle("menu-show");
});
language.addEventListener('click', function(){
    menu.classList.toggle("menu-show");
});
exp.addEventListener('click', function(){
    menu.classList.toggle("menu-show");
});
brief.addEventListener('click', function(){
    menu.classList.toggle("menu-show");
});
contact.addEventListener('click', function(){
    menu.classList.toggle("menu-show");
});

const all = document.querySelector('#all_id');
const cir = document.querySelector('#cir_id');
const web = document.querySelector('#web_id');

all.addEventListener('click', function(){

    if(!all.classList.contains("styles-buttons-brief"))
    {
        all.classList.add("styles-buttons-brief");
        cir.classList.remove("styles-buttons-brief");
        web.classList.remove("styles-buttons-brief");
    }
  
});
cir.addEventListener('click', function(){
    if(!cir.classList.contains("styles-buttons-brief"))
    {
        all.classList.remove("styles-buttons-brief");
        cir.classList.add("styles-buttons-brief");
        web.classList.remove("styles-buttons-brief");
    }
});
web.addEventListener('click', function(){
    if(!web.classList.contains("styles-buttons-brief"))
    {
        all.classList.remove("styles-buttons-brief");
        cir.classList.remove("styles-buttons-brief");
        web.classList.add("styles-buttons-brief");
    }
}); 





