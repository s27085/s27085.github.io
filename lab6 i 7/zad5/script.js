const accordions = document.getElementsByClassName('accordion');
for (let i = 0; i < accordions.length; i++) {
    accordions[i].addEventListener('click', function() {
        turnOffAllAccordions();
        this.classList.toggle('active');

        const bar = this.nextElementSibling;
        if (bar.style.display === 'block') {
            bar.style.display = 'none';
        } else {
            bar.style.display = 'block';
        }
    });
}

function turnOffAllAccordions() {
    for (let i = 0; i < accordions.length; i++) {
        accordions[i].classList.remove('active');
        accordions[i].nextElementSibling.style.display = 'none';
    }
}