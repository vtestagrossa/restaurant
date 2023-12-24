import './style.css';
import loadHome from './home.js';
import loadMenu from './menu.js';
import loadContact from './contact.js';

function createNav() {
    const navbar = document.createElement('div');
    navbar.classList.add('navbar');

    const logoContainer = document.createElement('div');
    logoContainer.classList.add('logo');
    const logo = document.createElement('h1');
    logo.textContent = "Meat O'Malley's";

    const navigation = document.createElement('div');
    navigation.classList.add('navigation');
    const homeBtn = document.createElement('button');
    homeBtn.classList.add('navigation-button');
    homeBtn.setAttribute('id', 'homeBtn');
    homeBtn.textContent = "Home";
    homeBtn.addEventListener(('click'), (e) => {
        if (e.target.classList.contains("navigation-active")) return;
        const sliderClass = getSliderDirection(homeBtn);
        setActiveButton(homeBtn);
        loadHome(sliderClass);
    });

    const menuBtn = document.createElement('button');
    menuBtn.classList.add('navigation-button');
    menuBtn.setAttribute('id', 'menuBtn');
    menuBtn.textContent = "Menu";
    menuBtn.addEventListener(('click'), (e) => {
        if (e.target.classList.contains("navigation-active")) return;
        const sliderClass = getSliderDirection(menuBtn);
        setActiveButton(menuBtn);
        loadMenu(sliderClass);
    });

    const contactBtn = document.createElement('button');
    contactBtn.classList.add('navigation-button');
    contactBtn.setAttribute('id', 'contactBtn');
    contactBtn.textContent = "Contact";
    contactBtn.addEventListener(('click'), (e) => {
        if (e.target.classList.contains("navigation-active")) return;
        const sliderClass = getSliderDirection(contactBtn);
        setActiveButton(contactBtn);
        loadContact(sliderClass);
    });

    navigation.appendChild(homeBtn);
    navigation.appendChild(menuBtn);
    navigation.appendChild(contactBtn);

    logoContainer.appendChild(logo);

    navbar.appendChild(logoContainer);
    navbar.appendChild(navigation);

    return navbar;
}
function getSliderDirection(button){
    if (button === document.getElementById('homeBtn')){
        return "slideInRight";
    }
    else if (button === document.getElementById('contactBtn')){
        return "slideInLeft";
    }
    else {
        const activeBtn = document.querySelector('.navigation-active');
        if (activeBtn === document.getElementById('homeBtn')){
            return "slideInLeft";
        }
        else {
            return "slideInRight";
        }
    }
}
function setActiveButton(button) {
    const buttons = document.querySelectorAll('.navigation-button');
    buttons.forEach((button) => {
        if (button !== this) {
            button.classList.remove('navigation-active');
        }
    });
    button.classList.add('navigation-active');
}

function createHeroFrame(){
    const heroFrame = document.createElement('div');
    heroFrame.classList.add('hero-frame');
    heroFrame.setAttribute('id', 'hero-frame');

    return heroFrame;
}

function createFooter(){

    const date = new Date().getFullYear();
    const footer = document.createElement('div');
    const footInner = document.createElement('footer');
    footer.textContent = `Copyright \u00A9 ${date} Vincent Testagrossa`;
    footer.classList.add('footer');
    footer.appendChild(footInner);

    return footer;
}

function renderPage() {
    const content = document.createElement('div');
    content.classList.add('content');
    document.body.appendChild(content);

    const nav = createNav();
    const heroFrame = createHeroFrame();
    const footer = createFooter();

    content.appendChild(nav);
    content.appendChild(heroFrame);
    document.body.appendChild(footer);

    setActiveButton(document.querySelector(".navigation-button"));
    loadHome();
}

export default renderPage;