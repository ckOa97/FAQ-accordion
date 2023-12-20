const faqElements = document.querySelectorAll('#faq-content-section > div');

faqElements.forEach(el => {
    el.addEventListener('click', function () {

        if (this.querySelector('p').classList.contains('display-none')) {
            this.querySelector('p').classList.remove('display-none');
            this.querySelector('span').classList.remove('icon-plus');
            this.querySelector('span').classList.add('icon-minus');
        } else {
            this.querySelector('p').classList.add('display-none');
            this.querySelector('span').classList.remove('icon-minus');
            this.querySelector('span').classList.add('icon-plus');
        }
    });
});