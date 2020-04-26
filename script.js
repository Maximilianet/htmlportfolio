let upButton = document.querySelector('.up-button');
console.log(pageYOffset);

window.onscroll = function () {
    if (window.pageYOffset > 500) {
        upButton.classList.add('shown');
        console.log(this.pageYOffset);
    } else {
        upButton.classList.remove('shown');
    }
};

upButton.onclick = function() {
    window.scrollTo(0,0);
};

