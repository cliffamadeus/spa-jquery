//toggle content
function toggleColorAndContent() {
    var faddImage = document.querySelector('.fadd');
    var teddyContent = document.querySelector('.teddy-content');
    var robertContent = document.querySelector('.robert-content');

    // Toggle grayscale effect on the "fadd" image
    faddImage.style.filter = faddImage.style.filter === 'grayscale(100%)' ? '' : 'grayscale(100%)';

    // Toggle visibility of content
    teddyContent.classList.toggle('hidden');
    robertContent.classList.toggle('hidden');
}

//smooth scroll
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  });
