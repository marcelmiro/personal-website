let lazyLoadInstance = new LazyLoad({ elements_selector: ".lazy" });

$(window).on('beforeunload', function () {
    //$(window).scrollTop(0);
});

window.addEventListener("load", function () {
    smoothScroll();
    starsPos();
    //planetsPos();
    //roverPos();

    if (isMobile) {
        $('#projects > .content > #pomodoro.projectWebsite > .browser img.website').attr({ "src": "assets/work_pomodoro_1080.gif" });
        $('#projects > .content > #pomodoro.projectWebsite > .mobile img.website').attr({ "src": "assets/work_pomodoro_mobile.gif" });
    }
});

window.addEventListener("resize", function () {
    starsPos();
    projectResize();
});

window.addEventListener("scroll", function() {
    projectScroll();
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

let isMobile = false;
if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) {
    isMobile = true;
}

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
        let starsWidth, starsTop;

        if (windowW <= 500) {
            starsTop = earth.position().top - 25;
        } else if (windowW <= 990) {
            starsTop = earth.position().top - ((3 * windowW) / 98 + 475 / 49);
        } else if (windowW <= 1500) {
            starsTop = earth.position().top - (windowW / 51 + 350 / 17);
            starsWidth = earth.width() * 4.5;
        } else if (windowW <= 2000) {
            starsTop = earth.position().top - (windowW / 100 + 35);
        } else if (windowW <= 2500) {
            starsTop = earth.position().top - ((3 * windowW) / 500 + 43);
        } else {
            starsTop = earth.position().top - 58;
            starsWidth = earth.width() * 6;
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


let windowH, pomodoroEnter, pomodoroLeave, jnEnter, jnLeave;
function projectResize() {
    let pomodoroWebsite = $('#projects > .content > #pomodoro.projectWebsite > .browser .website');
    let jnWebsite = $('#projects > .content > #jupiter-notify.projectWebsite > .browser .website');

    windowH = $(window).height();

    pomodoroEnter = pomodoroWebsite.offset().top - .75 * windowH;
    pomodoroLeave = pomodoroEnter + pomodoroWebsite.height() + .5 * windowH;

    jnEnter = jnWebsite.offset().top - .75 * windowH;
    jnLeave = jnEnter + jnWebsite.height() + .5 * windowH;

    projectScroll();
}

let videoBrowser = document.querySelector("#projects > .content > #jupiter-notify.projectWebsite > .browser .website");
let videoMobile = document.querySelector("#projects > .content > #jupiter-notify.projectWebsite > .mobile .website");
function projectScroll() {
    if (!isMobile) {
        let scrollPos = $(document).scrollTop();

        if (scrollPos >= pomodoroEnter && scrollPos <= pomodoroLeave) {
            if ($('#projects > .content > #pomodoro.projectWebsite > .browser img.website').attr("src") !== "assets/work_pomodoro_1080.gif") {
                $('#projects > .content > #pomodoro.projectWebsite > .browser img.website').attr({ "src": "assets/work_pomodoro_1080.gif" });
                $('#projects > .content > #pomodoro.projectWebsite > .mobile img.website').attr({ "src": "assets/work_pomodoro_mobile.gif" });
            }
        } else {
            if ($('#projects > .content > #pomodoro.projectWebsite > .browser img.website').attr("src") !== "assets/work_pomodoro_1080.jpg") {
                $('#projects > .content > #pomodoro.projectWebsite > .browser img.website').attr({ "src": "assets/work_pomodoro_1080.jpg" });
                $('#projects > .content > #pomodoro.projectWebsite > .mobile img.website').attr({ "src": "assets/work_pomodoro_mobile.jpg" });
            }
        }

        if (scrollPos >= jnEnter && scrollPos <= jnLeave) {
            if (videoBrowser.paused) {
                videoBrowser.play();
                videoMobile.play();
            }
        } else {
            if (!videoBrowser.paused) {
                videoBrowser.pause();
                videoMobile.pause();
            }
        }
    }
}
projectResize();


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
    // let browserH = document.querySelector("#projects > .content > #major36.projectWebsite > .browser .website").style.height;6
    tweenProjectRestaurant.to("#projects > .content > #major36.projectWebsite > .browser .website", 1, {ease: "none", y: "-55%"}, 0)
        .to("#projects > .content > #major36.projectWebsite > .mobile .website", 1, {ease: "none", y: "-55%"}, 0);

    let tweenContact = new TimelineMax();
    tweenContact.to("#contact > .bg > div > #rocket", 1, {y: "-20vh"}, 0)
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
        offset: -100,
        triggerElement: "#projects > .content > .text.right",
        duration: "100%",
        reverse: true
    })
        .setTween(tweenProjectRestaurant)
        .addTo(controller);

    let h1 = $(window).height() / 2;
    let h2 = $(document).height() - $("#contact").offset().top;
    let sceneContact = new ScrollMagic.Scene({
        offset: -h1,
        triggerElement: "#contact",
        duration: h2,
        reverse: true
    })
        .setTween(tweenContact)
        //.addIndicators()
        .addTo(controller);

}