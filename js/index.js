const toggle = document.querySelector('.nav-toggle');
const links = document.querySelectorAll('.nav__link');
const none = document.querySelector('#none')


toggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
    none.classList.remove('none');
});

links.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})