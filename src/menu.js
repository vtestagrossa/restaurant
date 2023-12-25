import json from './data.json5';
/**
 * TODO: need to add a function to handle building the menu using createMenuItem
 * and the data.json5 to build all menu items in a loop.
 * 
 * dynamic image loading from json needs work.
 * @returns loadMenu
 */
function createMenuContainer(){
    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menu-container');

    return menuContainer;
}
function createMenuItem(title, description, url){
    //TODO: accept menu item object and build a menu item from it
    const menuItem = document.createElement('div');
    const menuHeader = document.createElement('span');
    const menuTitle = document.createElement('h1');
    const menuImage = document.createElement('img');
    const menuDescription = document.createElement('p');

    menuTitle.textContent = title;
    menuDescription.textContent = description;

    menuItem.classList.add('menu-item');
    menuHeader.classList.add('menu-item-header');
    menuImage.setAttribute('src', url);
    menuImage.classList.add('menu-image');

    menuItem.appendChild(menuHeader);
    menuHeader.appendChild(menuImage);
    menuHeader.appendChild(menuTitle);
    menuItem.appendChild(menuDescription);


    return menuItem;
}
function loadMenu(sliderClass){
    const container = document.getElementById('hero-frame');
    container.textContent = "";
    const menuContainer = createMenuContainer();
    menuContainer.classList.add(sliderClass);
    for (let i = 0; i < 12; i++){
        menuContainer.appendChild(createMenuItem("test", "testing the test", "../src/images/background.jpg"));
    }

    container.appendChild(menuContainer);
}

export default loadMenu;