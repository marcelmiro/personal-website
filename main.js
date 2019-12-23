let lazyLoadInstance = new LazyLoad({
    elements_selector: ".lazy"
    // ... more custom settings?
});

$(window).on('beforeunload', function () {
    $(window).scrollTop(0);
});

window.addEventListener("load", function () {
    smoothScroll();
    starsPos();
    //planetsPos();
    //roverPos();
});

window.addEventListener("resize", function () {
    starsPos();
});

function checkBrowser() {
    if (is.ie()) {
        return "IE";
    } else if (is.chrome()) {
        return "Chrome";
    } else if (is.firefox()) {
        return "Firefox";
    } else if (is.edge()) {
        return "Edge"
    } else if (is.opera()) {
        return "Opera"
    } else if (is.safari()) {
        return "Safari"
    } else if (is.phantom()) {
        return "Phantom"
    } else if (is.mobile()) {
        return "Mobile"
    } else if (is.tablet()) {
        return "Tablet"
    } else if (is.touchDevice()) {
        return "Touch device"
    } else {
        return "Unknown"
    }
}

let browser = checkBrowser();

function smoothScroll() {
    $('a[href*="#"]:not([href="#"])').click(function () {
        $("html, body").clearQueue();
        if (
            location.pathname.replace(/^\//, "") ==
            this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                if ($(window).width() <= 700) {
                    $("html, body").animate(
                        {
                            scrollTop: target.offset().top
                        },
                        1500
                    );
                } else {
                    $("html, body").animate(
                        {
                            scrollTop: target.offset().top
                        },
                        1500
                    );
                }
                return false;
            }
        }
    });
}

let stars = $("#introSection > #introBg > #bgTinyStars, #introSection > #introBg > #bgSmallStars");
let earth = $("#introSection > #introBg > #bgEarth");
let isStarsPos = false;

if (browser === "Edge") {
    stars.css({visibility: "hidden", display: "none"});
} else {
    function starsPos() {
        let windowW = $(window).width();
        let starsWidth = earth.width() * 4.5;
        let starsTop;

        if (windowW <= 500) {
            starsTop = earth.position().top - 25;
        } else if (windowW <= 990) {
            starsTop = earth.position().top - ((3 * windowW) / 98 + 475 / 49);
        } else if (windowW <= 1500) {
            starsTop = earth.position().top - (windowW / 51 + 350 / 17);
        } else if (windowW <= 2000) {
            starsTop = earth.position().top - (windowW / 100 + 35);
        } else if (windowW <= 2500) {
            starsTop = earth.position().top - ((3 * windowW) / 500 + 43);
        } else {
            starsTop = earth.position().top - 58;
        }

        stars.css({
            top: starsTop,
            width: starsWidth,
            "margin-left": starsWidth / -2
        });

        if (isStarsPos === false) {
            stars.fadeTo("slow", 1);
            isStarsPos = true;
        }
    }
}


let textSpeed = 50;
let copyElem = "#contact > .text > #copied-text";
function copyTypeWriter() {
    new TypeIt(copyElem, {
        speed: textSpeed,
        deleteSpeed: textSpeed,
        waitUntilVisible: true,
        lifeLike: true,
        breakLines: false,
        cursor: true,
        afterComplete: (instance) => {
            $("#copied-text").find('.ti-cursor').addClass('is-hidden');
        },
    })
        .type("Email copied to clipboard :)")
        .pause(3000)
        .delete()
        .go();
}

let email = "info@marcelmiro.com";
function copyEmail() {
    let $temp = $("<input>");
    $("body").append($temp);
    $temp.val(email).select();
    document.execCommand("copy");
    $temp.remove();
    copyTypeWriter();
}


if (browser !== "IE") {
    let controller = new ScrollMagic.Controller();

    let tweenPlanets = new TimelineMax();
    tweenPlanets.to("#introSection > #introBg > .planet.yellow", 1, {ease: Power1.easeOut, y: "40vh"}, 0)
        .to("#introSection > #introBg > .planet.blue", 1, {ease: Power1.easeOut, y: "10vh"}, 0)
        .to("#introSection > #introBg > .planet.red", 1, {ease: Power1.easeOut, y: "50vh"}, 0)
        .to("#introSection > #introBg > .planet.earth", 1, {ease: Power1.easeOut, y: "25vh"}, 0);

    let tweenNeedWeb = new TimelineMax();
    tweenNeedWeb.to(".spaceSeparator > .bg > .planet.beige", 1, {y: "12vh"}, 0)
        .to(".spaceSeparator > .bg > .planet.pink", 1, {y: "-12vh"}, 0)
        .from(".spaceSeparator > .bg > .satellite", 1, {x: "8vw", y: "35vh"}, 0);

    let tweenProjectRestaurant = new TimelineMax();
    tweenProjectRestaurant.to("#projects > .content > .projectWebsite.left > .browser .website", 1, {ease: Power1.easeOut, y: "-35vh"}, 0)
        .to("#projects > .content > .projectWebsite.left > .mobile .website", 1, {ease: Power1.easeOut, y: "-60vh"}, 0);

    /*
    let tweenProjectVideogame = new TimelineMax();
    tweenProjectVideogame.to("#projects > .content > .projectWebsite.right > .browser .website", 1, {ease: Power1.easeOut, y: "-35vh"}, 0)
        .to("#projects > .content > .projectWebsite.right > .mobile .website", 1, {ease: Power1.easeOut, y: "-60vh"}, 0);
     */

    let tweenContact = new TimelineMax();
    tweenContact.to("#contact > .bg > #rocket", 1, {y: "-40vh"}, 0)
    //.fromTo("#contact > .bg > div", 1, {rotation: 15, scale: 0.2} , {rotation: -25, y: "-20vh", x: "45vw", scale: 1.2}, 0)
    ;

    let scenePlanets = new ScrollMagic.Scene({
        offset: 1,
        triggerHook: "#introSection",
        duration: "100%",
        reverse: true
    })
        .setTween(tweenPlanets)
        .addTo(controller);

    let sceneNeedWeb = new ScrollMagic.Scene({
        offset: 1,
        triggerElement: "#needWeb",
        triggerHook: .9,
        duration: "100%",
        reverse: true
    })
        .setTween(tweenNeedWeb)
        .addTo(controller);

    let sceneProjectRestaurant = new ScrollMagic.Scene({
        offset: 1,
        triggerElement: "#projects > .content > .text.right",
        duration: "100%",
        reverse: true
    })
        .setTween(tweenProjectRestaurant)
        //.addIndicators()
        .addTo(controller);

    /*
    let sceneProjectVideogame = new ScrollMagic.Scene({offset: 1, triggerElement: "#projects > .content > .text.left", duration: "100%", reverse: true})
        .setTween(tweenProjectVideogame)
        //.addIndicators()
        .addTo(controller);
     */

    let sceneContact = new ScrollMagic.Scene({
        offset: -400,
        triggerElement: "#contact",
        duration: "104%",
        reverse: true
    })
        .setTween(tweenContact)
        //.addIndicators()
        .addTo(controller);

}