const buttons = document.querySelectorAll('#faq-section-content button');

buttons.forEach(button => {
  button.addEventListener('click', function() {

    if(button.parentNode.parentNode.querySelector('p').classList.contains('display-none')) {
      button.parentNode.parentNode.querySelector('p').classList.remove('display-none');
      this.classList.remove('icon-plus');
      this.classList.add('icon-minus');
    } else {
      button.parentNode.parentNode.querySelector('p').classList.add('display-none');
      this.classList.remove('icon-minus');
      this.classList.add('icon-plus');
    }
  });
});