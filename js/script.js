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
    dots: !true,
    infinite: false,
      speed: 500,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
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


  document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('.header');
    const logo = document.querySelector('.logo');

    window.addEventListener('scroll', function () {
      if (window.scrollY > 50) { // Adjust the scroll threshold as needed
        header.classList.add('scrolled');
        logo.src = '/assets/icon/logo.svg';
      } else {
        header.classList.remove('scrolled');
        logo.src = '/assets/icon/logoDark.svg';
      }
    });
  });