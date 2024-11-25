document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');
  const openIcon = document.querySelector('.open-icon');
  const closeIcon = document.querySelector('.close-icon');

  menuToggle.addEventListener('click', function() {
    nav.classList.toggle('active');
    openIcon.style.display = nav.classList.contains('active') ? 'none' : 'inline';
    closeIcon.style.display = nav.classList.contains('active') ? 'inline' : 'none';
  });
});

  $(document).ready(function(){
    $('.slider').slick({
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      arrows: true,
      dots: false,
      autoplay: true,
      autoplaySpeed: 4000

    });
  });

// Add this to your JavaScript file
document.addEventListener('DOMContentLoaded', function() {
    const magic360 = document.querySelector('.Magic360 img');
    const images = [
        'https://placehold.co/1920x1080',
        'https://placehold.co/1920x1080/ff0000',
        'https://placehold.co/1920x1080/00ff00',
        'https://placehold.co/1920x1080/0000ff'
    ];
    let currentIndex = 0;

    magic360.addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % images.length;
        magic360.src = images[currentIndex];
    });
});