function createContact(){
    //TODO: Create a contact page with fake phone number,
    //email address.
    const contact = document.createElement('div');
    const title = document.createElement('h1');
    const phone = document.createElement('p');
    const email = document.createElement('a');

    title.textContent = "Contact us!"
    phone.textContent = "Phone: 865-000-0000";
    email.textContent = "support@meatomallys.com"
    email.setAttribute('href', "mailto:support@meatomallys.com");
    email.classList.add("link");
    contact.classList.add('contact-container');
    contact.classList.add('transparent');
    contact.classList.add('medium-font');
    contact.appendChild(title);
    contact.appendChild(phone);
    contact.appendChild(email);

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