
var carousel = document.querySelector('#carousel');
var prevArrow = document.querySelector('.carousel-control-prev');
var nextArrow = document.querySelector('.carousel-control-next');

var carouselInstance = new bootstrap.Carousel(carousel);

prevArrow.addEventListener('click', function() {
  carouselInstance.prev();
});

nextArrow.addEventListener('click', function() {
  carouselInstance.next();
});
