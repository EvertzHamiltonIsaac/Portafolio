const swiper = new Swiper('.swiper', {
            
    breakpoints: {
        // when window width is >= 320px
        200: {
            slidesPerView: 1.3,
            spaceBetween: 20
        },

        320: {
            slidesPerView: 2,
            spaceBetween: 20
        },

        360:{
            slidesPerView: 2.5,
            spaceBetween: 10,
            loop: true
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 2.5,
            spaceBetween: 20
        },
        // when window width is >= 640px
        640: {
            slidesPerView: 2.5,
            spaceBetween: 10
        },
    }
});