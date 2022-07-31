var hamMenu  = document.querySelector('.ham-menu');
var nav = document.querySelector('nav');
var navList = nav.querySelector('ul');
hamMenu.addEventListener('click',()=>{
    hamMenu.classList.toggle('open');
    navList.classList.toggle('active');
})