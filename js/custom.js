/*==================================
            SERVICES
==================================*/
$(function () {
    //animate on scroll
    new WOW().init();
});

/*==================================
            WORK
==================================*/
$(function () {

    $("#work").magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }

    });
});

/*==================================
            TEAM
==================================*/
$(function () {

    $("#team-members").owlCarousel({
        items: 3,
        autoplay: true,
        smartspeed: 700,
        loop: true,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },

            480: {
                items: 2
            },
            768: {
                items: 3
            }

        }
    });
});

/*==================================
            TESTIMONIALS
==================================*/
$(function () {

    $("#customers-testimonials").owlCarousel({
        items: 1,
        autoplay: true,
        smartspeed: 700,
        loop: true,
        autoplayHoverPause: true
    });
});

/*==================================
            STATISTICS
==================================*/
$(function () {
    $('.counter').counterUp({
        delay: 10,
        time: 3000
    });

});


/*==================================
            NAVIGATION
==================================*/
$(function () {
    //on scroll event
    $(window).scroll(function () {
        if ($(this).scrollTop() < 50) {
            //hide navigation bar
            $("nav").removeClass("res-top-nav");
            $("#back-to-top").fadeOut();
        } else {
            //show navigation bar
            $("nav").addClass("res-top-nav");
            $("#back-to-top").fadeIn();
        }
    });

});

//smoothscrollig
$(function () {
    $("a.nav-link").click(function (event) {
        event.preventDefault();

        //get /return id like #about, #work, #item etc.
        let section = $(this).attr("href");

        $('html, body').animate({
            scrollTop: $(section).offset().top - 67
        }, 1250, "easeInOutExpo"); //easy jquery
    });
});
//cloase mobile menu on click
$(function () {
    $(".navbar-collapse ul li a").on("click touch", function () {
        $(".navbar-toggler").click();
    })
})
/*==================================
            CLIENTS
==================================*/
$(function () {

    $("#clients-list").owlCarousel({
        items: 6,
        autoplay: true,
        smartspeed: 700,
        loop: true,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },

            480: {
                items: 3
            },
            768: {
                items: 5
            },
            992: {
                items: 6
            }

        }

    });
});
/*==================================
            CONTACTS
==================================*/
$('#contact-right').submit(function(e) {
    const name = document.getElementById('inputName'),
          email = document.getElementById('inputEmail'),
          message = document.getElementById('inputMessage');

    if(!name.value||!email.value||!message.value){
        alertify.error('Все поля должны быть заполнены')
    
    }
    else{
        message = $("#contact-right").serialize();
        $.ajax({
            url: "//formspree.io/ms.estete@gmail.com",
            method: "POST",
            data: {message: message},
            dataType: "json"
        });
        e.preventDefault();
        $(this).get(0).reset()
        alertify.success('Сообщение отпралено')
    }
});