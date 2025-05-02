document.addEventListener('DOMContentLoaded', function () {
  // navbar-fixed dan hamburger background on scroll
  const header = document.querySelector('header');
  const hamburger = document.querySelector('#hamburger');
  const navMenu = document.querySelector('#nav-menu');
  const scrollUpBtn = document.getElementById("scroll-up");

  window.addEventListener('scroll', function() {
      const fixedNav = header.offsetTop;

      if (window.pageYOffset > fixedNav) {
          header.classList.add('navbar-fixed');
          hamburger.classList.remove('bg-transparent');
          hamburger.classList.add('backdrop-blur-sm', 'rounded-md');
      } else {
          header.classList.remove('navbar-fixed');
          hamburger.classList.remove('bg-white/30', 'backdrop-blur-sm', 'rounded-md');
          hamburger.classList.add('bg-transparent');
      }

      // tombol scroll up
      if (window.pageYOffset >= 250) {
          scrollUpBtn.classList.remove('-bottom-1/2');
          scrollUpBtn.classList.add('bottom-4');
      } else {
          scrollUpBtn.classList.add('-bottom-1/2');
          scrollUpBtn.classList.remove('bottom-4');
      }
  });

  // hamburger toggle
  hamburger.addEventListener('click', function() {
      hamburger.classList.toggle('hamburger-active');
      navMenu.classList.toggle('hidden');
  });
});


/*~~~~~~~~~~~~~~~ SHOW SCROLL UP ~~~~~~~~~~~~~~~*/
const scrollUp = () => {
    const scrollUpBtn = document.getElementById("scroll-up")
  
    if(this.scrollY >= 250) {
      scrollUpBtn.classList.remove("-bottom-1/2");
      scrollUpBtn.classList.add("bottom-4");
    } else {
      scrollUpBtn.classList.add("-bottom-1/2");
      scrollUpBtn.classList.remove("bottom-4");
    }
  }
  window.addEventListener('scroll', scrollUp)
  