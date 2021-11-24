//Accordition
var faqs = document.querySelectorAll('.faq');
Array.from(faqs).forEach( faq =>{
    var title = faq.querySelector('.title');
    title.addEventListener('click',()=>{
        //open accordition on click
        title.querySelector('.icon').textContent = faq.classList.contains('hide') ? '-' : '+';
        faq.classList.toggle('hide');
        //close other active accorditions
        Array.from(faqs).forEach( item =>{
            if( faq != item && !item.classList.contains('hide')){
                item.classList.add('hide');
                item.querySelector('.icon').textContent="+";
            }
        });
    });
});