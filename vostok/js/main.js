var swiper = new Swiper(".worksSlide", {
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


var swiper = new Swiper(".partnersSlide", {
    slidesPerView: 2,
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

    }
});

$('.mobile-select').on('change', function (e) {
    $('.mobile-table').removeClass('active');
    let value = $(this).val();

    $(`#${value}`).addClass('active');
});

$(".youtube").each(function () {
    $(this).css({ 'background-image': 'url(https://i.ytimg.com/vi/' + this.id + '/sddefault.jpg)' });
    $(this).append($('<div/>', { 'class': 'play' }));

    $(document).delegate('#' + this.id, 'click', function () {
        var iframe_url = "https://www.youtube.com/embed/" + this.id + "?autoplay=1&autohide=1&rel=0";
        if ($(this).data('params')) iframe_url += '&' + $(this).data('params');
        var iframe = $('<iframe/>', { 'frameborder': '0', 'src': iframe_url, 'width': $(this).width(), 'height': $(this).height(), 'allowfullscreen': 'allowfullscreens' })
        $(this).replaceWith(iframe);
    });
});