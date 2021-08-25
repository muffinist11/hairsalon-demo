'use strict';
{

        // observer
    
        const targets = document.querySelectorAll('section');

        function callback(entries, obs) {
            console.log(entries);
        
            entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            }
        
            entry.target.classList.add('appear');
            obs.unobserve(entry.target);
            });
        }
        
        const options = {
            threshold: 0.2,
        }
        
        const observer = new IntersectionObserver(callback, options);
        
        targets.forEach(target => {
            observer.observe(target);
        });
        
        //humburger

        const open = document.getElementById('open');
        const overlay = document.querySelector('.overlay');
        const aclose = document.getElementById('inner');
        const close = document.getElementById('close');


        open.addEventListener('click', ()=> {
            overlay.classList.add('show');
            open.classList.add('hide');
        });

        aclose.addEventListener('click', ()=> {
            overlay.classList.remove('show');
            open.classList.remove('hide');
        });


        close.addEventListener('click', ()=> {
            overlay.classList.remove('show');
            open.classList.remove('hide');
        });


        //swiper

        const swiper = new Swiper(".myswiper", {
          effect: "coverflow",
          grabCursor: true,
          centeredSlides: true,
          slidesPerView: 2,
          loop:true,
          autoplay: {
            delay: 5000,
            disableOnInteraction: false,
          },
          coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          },
          pagination: {
            el: ".swiper-pagination",
          },
        });



}