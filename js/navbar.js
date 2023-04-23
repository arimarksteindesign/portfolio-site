'use strict';

let isNavbarExpanded = false;
let navbarIcon;
let navbarItemArea;
let title;
let projectsLink;
let aboutLink;
let contactLink;

function renderNavbar() {
  let navBarItems = [];
  if (isNavbarExpanded) {
    navbarIcon.className = 'nav-icon nav-icon--open';
    title.classList.add('hidden');
    [
      projectsLink,
      aboutLink,
      contactLink
    ].forEach((el) => el.classList.remove('hidden'));
  } else {
    navbarIcon.className = 'nav-icon';
    title.classList.remove('hidden');
    [
      projectsLink,
      aboutLink,
      contactLink
    ].forEach((el) => el.classList.add('hidden'));
  }
}

function toggleNavbar() {
  isNavbarExpanded = !isNavbarExpanded;
  renderNavbar();
}

function createNavLink(text, href) {
  const navLink = document.createElement('a');
  navLink.href = href;
  navLink.className = 'nav-link hidden';
  navLink.innerHTML = text;
  return navLink;
}

function initNavbar() {
  navbarIcon = document.createElement('div');
  navbarIcon.className = 'nav-icon';
  navbarIcon.innerHTML = '<span></span>';
  navbarIcon.addEventListener('click', toggleNavbar);

  navbarItemArea = document.createElement('div');
  navbarItemArea.className = 'nav-item-container';

  title = document.createElement('h3');
  title.id = 'title';
  title.innerHTML = '<a href="index.html">ari markstein design</a>';

  projectsLink = createNavLink('projects', 'index.html');
  aboutLink = createNavLink('about', 'about.html');
  contactLink = createNavLink('contact', 'contact.html');

  [title, projectsLink, aboutLink, contactLink].forEach((el) => navbarItemArea.appendChild(el));

  const targetElementId = 'navbar';
  const navbar = document.getElementById(targetElementId);
  navbar.appendChild(navbarIcon);
  navbar.appendChild(navbarItemArea);

  renderNavbar();
}

initNavbar();
