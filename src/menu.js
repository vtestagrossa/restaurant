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
    menuTitle.classList.add('menu-title');
    menuImage.setAttribute('src', "../src/images/" + url);
    menuImage.classList.add('menu-image');
    menuDescription.classList.add('menu-description');

    menuItem.appendChild(menuImage);
    menuItem.appendChild(menuHeader);
    menuHeader.appendChild(menuTitle);
    menuItem.appendChild(menuDescription);


    return menuItem;
}
function loadMenu(sliderClass){
    const container = document.getElementById('hero-frame');
    container.textContent = "";
    const menuContainer = createMenuContainer();
    menuContainer.classList.add(sliderClass);

    json.menu.forEach((item) => {
        menuContainer.appendChild(createMenuItem(item.name, item.description, item.img_url));
    });

    container.appendChild(menuContainer);
}

export default loadMenu;