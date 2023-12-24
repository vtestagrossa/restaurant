function createMenuContainer(){
    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menu-container');

    return menuContainer;
}
function createMenuItem(){
    //TODO: add item name, image url and description to args
    const menuItem = document.createElement('div');
    menuItem.classList.add('menu-item');

    return menuItem;
}
function loadMenu(sliderClass){
    const container = document.getElementById('hero-frame');
    container.textContent = "";
    const menuContainer = createMenuContainer();
    menuContainer.classList.add(sliderClass);
    for (let i = 0; i < 12; i++){
        menuContainer.appendChild(createMenuItem());
    }

    container.appendChild(menuContainer);
}

export default loadMenu;