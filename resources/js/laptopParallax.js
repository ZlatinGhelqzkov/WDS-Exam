window.addEventListener('scroll', function() {
    var scrollTop = window.scrollY || document.documentElement.scrollTop;
    var laptopParallax = document.querySelector('.laptop-parallax');


    //tablet 768

    if(window.innerWidth < 768){
        if(scrollTop < 300){
            laptopParallax.style.transform = 'translateY(' + (scrollTop * 0.05) + 'px)';
       }
    }

    else if(window.innerWidth >= 768 && window.innerWidth < 1024){
        if(scrollTop < 500){
            laptopParallax.style.transform = 'translateY(' + (scrollTop * 0.15) + 'px)';
        }
    }

    // min-width 1024 && max-width 1599
    else if (window.innerWidth >= 1024 && window.innerWidth <= 1599) {
        if (scrollTop < 500) {
            laptopParallax.style.transform = 'translateY(' + (scrollTop * 0.6) + 'px)';
        }
    }

    //min-width 1600
    else if(window.innerWidth >= 1600){
        if(scrollTop < 300){
            laptopParallax.style.transform = 'translateY(' + (scrollTop * 0.13) + 'px)';
        }
    }
  
});
