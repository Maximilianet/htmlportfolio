let page = document.querySelector('.page');
let themeButton = document.querySelector('.changeTheme');
let i = 0;
themeButton.onclick = function () {
    i++;
    page.classList.toggle('dark-theme');
    page.classList.toggle('light-theme');
    console.log('Смена цвета ' + i);
};