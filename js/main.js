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

        document.addEventListener('DOMContentLoaded',function() {
            const hero = new HeroSlider('.swiper-container');
            hero.start({delay: 4000});

            // setTimeout(()=>{
            //     hero.stop();
            // },5000)
        });

        class HeroSlider {
            constructor(el) {
                this.el = el;
                this.swiper = this._initSwiper();

            }   

            _initSwiper() {
                return new Swiper(this.el,{
                    // Optional parameters
                    // direction: 'vertical',
                    
                    loop: true,
                    grabCursor: true,
                    effect: 'coverflow',
                    centeredSlides: true,
                    slidesPerView: 1,
                    speed: 1000,
                    breakpoints: {
                        600: {
                            slidesPerView: 2,
                        }
                    },

                });

            }

            start(options = {}) {
                Object.assign({
                    delay:3000,
                    disableOnInteraction: false
                },options);

                this.swiper.params.autoplay = options;
                    this.swiper.autoplay.start();
            }

            stop(){
                this.swiper.autoplay.stop();
            }
        }


}