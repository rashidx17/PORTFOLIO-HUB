// Mobile Menu Toggle
const navMenu = document.querySelector('nav ul');
const openBtn = document.querySelector('.fa-bars');
const closeBtn = document.querySelector('.fa-times');

openBtn.onclick = () => navMenu.style.right = '0';
closeBtn.onclick = () => navMenu.style.right = '-100%';

// Tab Switching
function openTab(tabName) {
  document.querySelectorAll('.tab-links').forEach(link => link.classList.remove('active-link'));
  document.querySelectorAll('.tab-contents').forEach(content => content.classList.remove('active-tab'));
  event.currentTarget.classList.add('active-link');
  document.getElementById(tabName).classList.add('active-tab');
}
