'use strict';

let isNavbarExpanded = false;
let navbarIcon;
let navMenu;

function renderNavbar() {
  if (isNavbarExpanded) {
    navbarIcon.className = 'nav-icon nav-icon--open';
    navMenu.classList.add('open');
  } else {
    navbarIcon.className = 'nav-icon';
    navMenu.classList.remove('open');
  }
}

function toggleNavbar() {
  isNavbarExpanded = !isNavbarExpanded;
  renderNavbar();
}

function initNavbar() {
  // create social buttons
  const socialButtonContainer = document.createElement('div');
  socialButtonContainer.className = 'social-button-container';

  const instagramButtom = document.createElement('a');
  instagramButtom.className = 'social-button';
  instagramButtom.href = 'https://www.instagram.com/arimarksteindesign/';
  instagramButtom.innerHTML = '<img src="img/contact/ig.png" />';

  const linkedInButton = document.createElement('a');
  linkedInButton.className = 'social-button';
  linkedInButton.href = 'https://www.linkedin.com/in/arimarkstein';
  linkedInButton.innerHTML = '<img src="img/contact/li.png" />';

  socialButtonContainer.appendChild(instagramButtom);
  socialButtonContainer.appendChild(linkedInButton);

  // create menu button
  navbarIcon = document.createElement('div');
  navbarIcon.className = 'nav-icon';
  navbarIcon.innerHTML = '<span></span>';
  navbarIcon.addEventListener('click', toggleNavbar);

  // create menu
  navMenu = document.createElement('div');
  navMenu.className = 'nav-menu animate bg-black';
  navMenu.innerHTML = `
    <div class="nav-link-container">
      <a href="about.html" class="title-font">About</a>
      <a href="index.html?projects" class="title-font">Projects</a>
      <a href="contact.html" class="title-font">Contact</a>
    </div>
  `;

  // compose navbar
  const navHeader = document.createElement('div');
  navHeader.className = 'nav-header';
  navHeader.appendChild(socialButtonContainer);
  navHeader.appendChild(navbarIcon);
  
  const targetElementId = 'navbar';
  const navbar = document.getElementById(targetElementId);
  navbar.appendChild(navHeader);
  navbar.appendChild(navMenu);


  renderNavbar();
}

initNavbar();
