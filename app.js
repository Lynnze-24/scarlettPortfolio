const hamburger = document.querySelector('#hamburger');
const hamburgerCon = document.querySelector('#main-nav');
const links= document.querySelectorAll('.main-nav__links li');


hamburger.addEventListener('click',function(){
    hamburgerCon.classList.toggle('clicked');
    links.forEach(function(link){
        link.classList.toggle('fade');
    })
})