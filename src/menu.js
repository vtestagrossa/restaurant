function createMenuContainer(){
    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menu-container');
    menuContainer.classList.add('slideInLeft');

    return menuContainer;
}
function createMenuItem(){
    //TODO: add item name and description to args
    const menuItem = document.createElement('div');
    menuItem.classList.add('menu-item');

    return menuItem;
}
function loadMenu(){
    const container = document.getElementById('hero-frame');
    container.textContent = "";
    const menuContainer = createMenuContainer();
    for (let i = 0; i < 12; i++){
        menuContainer.appendChild(createMenuItem());
    }

    container.appendChild(menuContainer);
}

export default loadMenu;