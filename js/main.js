$(function () {

    const swiper = new Swiper(".feedbackSlide", {
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },

        breakpoints: {

            375: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            769: {
                slidesPerView: 2,
                spaceBetween: 30
            },

            1280: {
                slidesPerView: 3,
                spaceBetween: 40
            },
        }

    });


    function slowScroll(id) {
        let offset = 0;
        $('html, body').animate({
            scrollTop: $(id).offset().top - offset
        }, 1000);
        return false;
    }

    $('.button_order').on('click', () => slowScroll('#block1'));
});