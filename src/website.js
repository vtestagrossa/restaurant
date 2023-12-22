import './style.css';

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
    const menuBtn = document.createElement('button');
    menuBtn.textContent = "Menu";
    const contactBtn = document.createElement('button');
    contactBtn.textContent = "Contact";

    navigation.appendChild(homeBtn);
    navigation.appendChild(menuBtn);
    navigation.appendChild(contactBtn);

    logoContainer.appendChild(logo);

    navbar.appendChild(logoContainer);
    navbar.appendChild(navigation);

    return navbar;
}

function renderPage() {
    const content = document.createElement('div');
    content.classList.add('content');
    document.body.appendChild(content);

    content.appendChild(createNav());

}

export default renderPage;