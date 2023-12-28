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
    menuImage.setAttribute('src', "./images/" + url);
    menuImage.classList.add('menu-image');
    menuDescription.classList.add('menu-description');

    menuItem.appendChild(menuImage);
    menuItem.appendChild(menuHeader);
    menuHeader.appendChild(menuTitle);
    menuHeader.appendChild(menuDescription);


    return menuItem;
}
function createMenuHeader(headingTitle){
    const headingContainer = document.createElement('div');
    headingContainer.classList.add('menu-item');
    headingContainer.classList.add('col-2');
    headingContainer.classList.add('transparent');
    headingContainer.classList.add('large-font');
    const heading = document.createElement('h1');
    heading.textContent = headingTitle;
    heading.classList.add('menu-title');
    headingContainer.appendChild(heading);

    return headingContainer;
}
function loadMenu(sliderClass){
    const container = document.getElementById('hero-frame');
    container.textContent = "";
    const menuContainer = createMenuContainer();
    menuContainer.classList.add(sliderClass);

    const entreeHeading = createMenuHeader("Entrees");
    const sidesHeading = createMenuHeader("Sides");
    const drinksHeading = createMenuHeader("Drinks");

    menuContainer.appendChild(entreeHeading);
    json.menu.forEach((entree) => {
        menuContainer.appendChild(createMenuItem(entree.name, entree.description, entree.img_url));
    });
    menuContainer.appendChild(sidesHeading);
    json.sides.forEach((side) => {
        menuContainer.appendChild(createMenuItem(side.name, side.description, side.img_url));
    });
    menuContainer.appendChild(drinksHeading);
    json.drinks.forEach((drink) => {
        menuContainer.appendChild(createMenuItem(drink.name, drink.description, drink.img_url));
    });

    container.appendChild(menuContainer);
}

export default loadMenu;