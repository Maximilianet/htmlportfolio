let page = document.querySelector('.page');
let themeButton = document.querySelector('.changeTheme');

themeButton.onclick = function () {
    page.classList.toggle('dark-theme');
    page.classList.toggle('light-theme');
};