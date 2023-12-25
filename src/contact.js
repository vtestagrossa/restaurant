function createContact(){
    //TODO: Create a contact page with fake phone number,
    //email address.
    const contact = document.createElement('div');
    contact.classList.add('contact-container');

    return contact;
}
function loadContact(sliderClass){
    const container = document.getElementById('hero-frame');
    container.textContent = "";
    const contact = createContact();
    contact.classList.add(sliderClass);
    container.appendChild(contact);
}

export default loadContact;