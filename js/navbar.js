'use strict';

/**
 * Expects a div with id `navbar` to exist in the document.
 */

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
  const navbarInnerHtml = `
    <div class="nav-header">
      <div class="social-button-container">
        <a target="_blank" href="https://www.instagram.com/arimarksteindesign/" class="social-button">
          <img src="img/contact/ig.png" />
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/arimarkstein" class="social-button">
          <img src="img/contact/li.png" />
        </a>
      </div>

      <div class="nav-icon" onclick="toggleNavbar()">
        <span></span>
      </div>

      <div class="nav-link-container">
        <a href="index.html?scrollTo=brands" class="title-font">Projects</a>
        <a href="about.html" class="title-font">About</a>
        <a href="contact.html" class="title-font">Contact</a>
      </div>
    </div>

    <div class="nav-menu animate bg-black">
      <div class="nav-link-container">
        <a href="index.html?scrollTo=brands" class="title-font">Projects</a>
        <a href="about.html" class="title-font">About</a>
        <a href="contact.html" class="title-font">Contact</a>
      </div>
    </div>
  `;
  
  const targetElementId = 'navbar';
  const navbar = document.getElementById(targetElementId);
  navbar.innerHTML = navbarInnerHtml;

  navbarIcon = navbar.querySelector('.nav-icon');
  navMenu = navbar.querySelector('.nav-menu');

  renderNavbar();
}

initNavbar();
