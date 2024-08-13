const menuicon = document.querySelector('.menuicon');
let body = document.body;
const menu = document.querySelector('.menu');

menuicon.addEventListener('click', () => {
    menu.classList.toggle('active');
    menuicon.classList.toggle('active');
    if (menu.classList.contains('active')) {
        body.style.overflow = 'hidden';
    } else {
        body.style.overflow = 'auto';
    }
});

let links = document.querySelectorAll(".navlink");

links.forEach(link => {
    link.addEventListener("click", () => {
        menu.classList.remove('active'); 
        menuicon.classList.remove('active');
        body.style.overflow = 'auto'; 
    });
});
