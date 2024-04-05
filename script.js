const slider = document.querySelector('.slider');

function activate(e) {
  const items = document.querySelectorAll('.item');
  e.target.matches('.next') && slider.append(items[0]);e.target.matches('.prev') && slider.prepend(items[items.length - 1]);
}
document.addEventListener('click',activate,false);



var currentSlide = 0;
var slides = document.querySelectorAll('.item');
var nextButton = document.querySelector('.next');
var prevButton = document.querySelector('.prev');

nextButton.addEventListener('click', function() {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active');

  // Reset the description when clicking on the navigation buttons
  expandDescription(null, null, true);
});

prevButton.addEventListener('click', function() {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  slides[currentSlide].classList.add('active');

  // Reset the description when clicking on the navigation buttons
  expandDescription(null, null,true);
});



function expandDescription(button, minimize, reset) {
  var description = document.getElementById('description');
  var moreText = button? button.getAttribute('data-more-text') : '';

  if (reset || minimize || description.classList.contains('expanded')) {
    description.classList.remove('expanded');
    description.textContent = description.textContent.replace(moreText, '');
  } else {
    description.classList.add('expanded');
    description.textContent += moreText;
  }
}
