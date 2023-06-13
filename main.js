let search = document.querySelector('.search-box');
let menu = document.querySelector('.navbar');

document.querySelector('#search-icon').onclick = () =>{
    search.classList.toggle('active');
    if(search.classList.contains('active')){
        menu.classList.remove('active');
    }
}

document.querySelector('#menu-icon').onclick = () =>{
    menu.classList.toggle('active');
    if(menu.classList.contains('active')){ // check if menu icon has active class
        search.classList.remove('active');
    }
}
//hide menu and search box on scroll
/*
window.onscroll = () => {
    menu.classList.toggle('active');
    search.classList.remove('active');

}*/

// header
let header = document.querySelector('header');

window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);
});