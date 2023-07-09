window.addEventListener('scroll', function() {
  var header = document.querySelector('.scroll-header');
  var scrollPosition = window.scrollY;
  
  if (scrollPosition > 0) {
    header.classList.add('shadow');
  } else {
    header.classList.remove('shadow');
  }
});


