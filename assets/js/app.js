const menuicon = document.querySelector('.menuicon');
let body = document.body;
const menu = document.querySelector('.menu');

menuicon.addEventListener('click', () => {
    menu.classList.toggle('active');
    if (menu.classList.contains('active')) {
        body.style.overflow = 'hidden';
    } else {
        body.style.overflow = 'auto';
    }
});

document.querySelector('.menuicon').addEventListener('click', function() {
    this.classList.toggle('active');
});

