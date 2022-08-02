// Ham menu
var hamMenu  = document.querySelector('.ham-menu');
var nav = document.querySelector('nav');
var navList = nav.querySelector('ul');
hamMenu.addEventListener('click',()=>{
    hamMenu.classList.toggle('open');
    navList.classList.toggle('active');
});

// Accordition
var accorditionItems = document.querySelectorAll('.accordition-item');
accorditionItems.forEach(item => {
    var title = item.querySelector('.accordition-title');
    var titleIcon  = title.querySelector('span');
    title.onclick = ()=>{
        item.classList.toggle('hide');
        if( item.classList.contains('hide')){
            titleIcon.textContent = '+';
        }else{
            titleIcon.textContent = '-';
        }
    }
});