const hamburger = document.getElementById('hamburger-icon');
const hamburgerList = document.getElementById('hamburger-list');

hamburger.addEventListener('click', function () {
    hamburgerList.classList.toggle('flexbox');
});
