//TODO: Implement and include in website.js

function loadContact(sliderClass){
    const container = document.getElementById('hero-frame');
    container.textContent = "";
    container.classList.add(sliderClass);
}

export default loadContact;