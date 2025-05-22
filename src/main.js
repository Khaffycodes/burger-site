//To open and close menu icon in sm screen
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const closeIcon = document.getElementById('nav-close');
const navLink = document.querySelectorAll('.nav__link');

hamburger.addEventListener('click', () => {
  navMenu.classList.remove('hidden');
});

closeIcon.addEventListener('click', () => {
  navMenu.classList.add('hidden');
});

navLink.forEach((link) => {
  link.addEventListener('click', () => {
    navMenu.classList.add('hidden');
  });
});

/////////Tabs///////////
const tabs = document.querySelectorAll('.tab_wraps ul li');

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    tabs.forEach((tab) => tab.remove.classList('active'));
  });
  tab.add.classList('active');
});
