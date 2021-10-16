const getId = (link) => link.getAttribute('href').replace('#', '');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            document.querySelectorAll('.header_link').forEach((link) => {
                link.classList.toggle(
                    'header_link_active',
                    getId(link) === entry.target.id
                );
            });
        }
    });
}, {
    threshold: 0.28
});

document.querySelectorAll('section').forEach(
    (section) => observer.observe(section),
);

document.querySelector('.header_list').addEventListener('click', (event) => {
    if (event.target.classList.contains('header_link')) {
        event.preventDefault();

        window.scrollTo({
            top: document.getElementById(getId(event.target)).offsetTop,
            behavior: 'smooth',
        })
    }
})

// Burger handler
const burgerItem = document.querySelector('.burger');
const menu = document.querySelector('.header_nav');
const menuCloseItem = document.querySelector('.header_nav_close');
const languageSwitch = document.querySelector('#list');
burgerItem.addEventListener('click', () => {
    menu.classList.add('header_nav_active');
    languageSwitch.classList.add('rotatable_active_header_burger');
});
menuCloseItem.addEventListener('click', () => {
    menu.classList.remove('header_nav_active');
    languageSwitch.classList.remove('rotatable_active_header_burger');
});

const headerItem = document.querySelectorAll('.header_item');
headerItem.forEach((item) => {
    item.addEventListener('click', () => {
        menu.classList.remove('header_nav_active');
        languageSwitch.classList.remove('rotatable_active_header_burger');
    });
});