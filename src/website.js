import './style.css';
import loadHome from './home.js';

function createNav() {
    const navbar = document.createElement('div');
    navbar.classList.add('navbar');

    const logoContainer = document.createElement('div');
    logoContainer.classList.add('logo');
    const logo = document.createElement('h1');
    logo.textContent = "Gastro Pub";

    const navigation = document.createElement('div');
    navigation.classList.add('navigation');
    const homeBtn = document.createElement('button');
    homeBtn.textContent = "Home";
    homeBtn.classList.add('navigation-button');
    homeBtn.addEventListener(('click'), (e) => {
        if (e.target.classList.contains("navigation-active")) return;
        setActiveButton(homeBtn);
        loadHome();
    });

    const menuBtn = document.createElement('button');
    menuBtn.classList.add('navigation-button');
    menuBtn.textContent = "Menu";
    menuBtn.addEventListener(('click'), (e) => {
        if (e.target.classList.contains("navigation-active")) return;
        setActiveButton(menuBtn);
        //TODO: loadMenu
    });

    const contactBtn = document.createElement('button');
    contactBtn.classList.add('navigation-button');
    contactBtn.textContent = "Contact";
    contactBtn.addEventListener(('click'), (e) => {
        if (e.target.classList.contains("navigation-active")) return;
        setActiveButton(contactBtn);
        //TODO: loadContact
    });

    navigation.appendChild(homeBtn);
    navigation.appendChild(menuBtn);
    navigation.appendChild(contactBtn);

    logoContainer.appendChild(logo);

    navbar.appendChild(logoContainer);
    navbar.appendChild(navigation);

    return navbar;
}

function setActiveButton(button) {
    const buttons = document.querySelectorAll('.navigation-button');
    console.log('test');
    buttons.forEach((button) => {
        if (button !== this) {
            console.log(button.textContent);
            button.classList.remove('navigation-active');
        }
    });
    console.log('active');
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
    content.appendChild(footer);

    setActiveButton(document.querySelector(".navigation-button"));
    loadHome();
}

export default renderPage;