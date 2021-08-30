const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


//Navigation Bar
const navItems = document.querySelectorAll('a');
const navImg = document.querySelector('#logo-img');

let navTargets = Object.values(siteContent.nav);

for(let i = 0; i < navItems.length; i++) {
  navItems[i].textContent = navTargets[i];
  navItems[i].style.color = "green";
}
navImg.src = "img/logo.png";

//New Nav Bar Items
const newNavItem1 = document.createElement('a');
newNavItem1.textContent = 'Blog';
newNavItem1.href = '#';
newNavItem1.style.color = 'green';
document.querySelector('nav').appendChild(newNavItem1);

const newNavItem2 = document.createElement('a');
newNavItem2.textContent = 'Home';
newNavItem2.href = '#';
newNavItem2.style.color = 'green';
document.querySelector('nav').prepend(newNavItem2);

//CTA
const cta = document.querySelector('.cta');
const ctaHeader = document.querySelector('h1');
const ctaButton = document.querySelector("button");
const ctaImage = document.querySelector("#cta-img");

ctaHeader.innerHTML = "DOM <br> Is <br> Awesome";

ctaButton.textContent = "Get Started";

ctaImage.src = "img/header-img.png";


//Main Content

const textContent = document.querySelectorAll('.text-content');
let mainContent = Object.values(siteContent["main-content"]);

const middleImg = document.querySelector("#middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

mainContent = mainContent.filter(a => a !== mainContent.filter(b => b.match(/img/))[0]);

for(let i = 0; i < mainContent.length; i+=2) {
  textContent[i/2].childNodes[1].innerHTML = mainContent[i];
  textContent[i/2].childNodes[3].innerHTML = mainContent[i+1];
}

//Contact Section
const contact = document.getElementsByClassName('contact');
let contactContent = Object.values(siteContent["contact"]);

for(let i = 1; i < contact[0].childNodes.length; i+=2) {
  contact[0].childNodes[i].textContent = contactContent.shift();

}
//Footer
let footer = document.getElementsByTagName('footer');

footer[0].childNodes[1].textContent = Object.values(siteContent['footer'])

