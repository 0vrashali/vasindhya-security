burger=document.querySelector('.burger')
navbar=document.querySelector('.navbar')
navList=document.querySelector('.nav-list')
rightNav=document.querySelector('.rightNav')

document.getElementById("contactForm").reset();



burger.addEventListener('click',()=>{
    rightNav.classList.toggle('v-class');
    navList.classList.toggle('v-class');
    navbar.classList.toggle('h-nav');

})