function createTop() {
    const top = document.createElement('div');
    top.classList.add('hero-top');
    const heroLogo = document.createElement('div');
    heroLogo.classList.add('hero-logo');
    const heading = document.createElement('h1');
    heading.textContent = "Come Eat, Drink Your Fill!";
    const subHeading = document.createElement('p');
    subHeading.textContent = "Try our signature gastro pub fare and our selection of draft beers.";

    top.appendChild(heroLogo);
    heroLogo.appendChild(heading);
    heroLogo.appendChild(subHeading);

    return top;
}

function createBottom(){
    const bottom = document.createElement('div');
    bottom.classList.add('hero-bottom');
    const locationHeading = document.createElement('h2');
    locationHeading.textContent = "Location:";
    const location = document.createElement('a');
    location.href = "https://maps.app.goo.gl/y4Ns8J3LVqgQwarS9";
    location.textContent = "1101 N Central St, Knoxville TN 37917";
    const hoursHeading = document.createElement('h2');
    hoursHeading.textContent = "Hours:";
    const hours = document.createElement('p');
    hours.textContent = "Su-Th: 1100-2200, Fri-Sat: 1000-2300";

    bottom.appendChild(locationHeading);
    bottom.appendChild(location);
    bottom.appendChild(hoursHeading);
    bottom.appendChild(hours);
    
    return bottom;
}

function loadHome() {
    const container = document.getElementById('hero-frame');
    container.textContent = "";
    const top = createTop();
    const bottom = createBottom();

    container.appendChild(top);
    container.appendChild(bottom);
}

export default loadHome;