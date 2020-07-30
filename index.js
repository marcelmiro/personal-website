'use strict'

const checkBrowser = () => {
    if (is.mobile()) return 'mobile'
    else if (is.tablet()) return 'tablet'
    else if (is.touchDevice()) return 'touch'
    else if (is.chrome()) return 'chrome'
    else if (is.firefox()) return 'firefox'
    else if (is.ie()) return 'ie'
    else if (is.edge()) return 'edge'
    else if (is.opera()) return 'opera'
    else if (is.safari()) return 'safari'
    else if (is.phantom()) return 'phantom'
}

const checkMobile = () => {
    return Boolean(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4)))
}

const smoothScroll = () => {
    $('a[href*="#"]:not([href="#"])').click(function () {
        $('html, body').clearQueue()
        if (
            location.pathname.replace(/^\//, '') ===
            this.pathname.replace(/^\//, '') &&
            location.hostname === this.hostname
        ) {
            let target = $(this.hash)
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']')
            if (target.length) $('html, body').animate({ scrollTop: target.offset().top }, 1500)
        }
    })
}

const isMobile = checkMobile() || checkBrowser() === 'mobile'

window.addEventListener('load', () => {
    smoothScroll()
    starsPos()
    scrollMagic()
    projectResize()
})

window.addEventListener('resize', () => {
    starsPos()
    projectResize()
})

window.addEventListener('scroll',() => projectScroll())

let isStarsPos = false
const stars = $('.section__home .bg .earth-stars')
const earth = $('.section__home .bg__earth')
const starsPos = () => {
    if (checkBrowser() === 'edge') {
        if (window.getComputedStyle(stars[0]).getPropertyValue('display') !== 'none'){
            stars.css({ visibility: 'hidden', display: 'none' })
        }
        return
    }
    
    const windowW = $(window).width()
    let starsWidth, starsTop
    
    if (windowW <= 500) starsTop = earth.position().top - 25
    else if (windowW <= 990) starsTop = earth.position().top - ((3 * windowW) / 98 + 475 / 49)
    else if (windowW <= 1500) {
        starsTop = earth.position().top - (windowW / 51 + 350 / 17)
        starsWidth = earth.width() * 4.5
    } else if (windowW <= 2000) starsTop = earth.position().top - (windowW / 100 + 35)
    else if (windowW <= 2500) starsTop = earth.position().top - ((3 * windowW) / 500 + 43)
    else {
        starsTop = earth.position().top - 58
        starsWidth = earth.width() * 6
    }
    
    stars.css({
        top: starsTop,
        width: starsWidth,
        'margin-left': starsWidth / -2
    })
    
    if (isStarsPos === false) {
        stars.fadeTo('slow', 1)
        isStarsPos = true
    }
}

let pomodoroEnter, pomodoroLeave//, jnEnter, jnLeave
const pomodoroBrowser = $('.project#pomodoro .showcase .browser img.website')
const pomodoroMobile = $('.project#pomodoro .showcase .mobile img.website')
// const jnBrowser = document.querySelector('#projects > .content > #jupiter-notify.projectWebsite > .browser .website')
// const jnMobile = document.querySelector('#projects > .content > #jupiter-notify.projectWebsite > .mobile .website')

const projectResize = () => {
    const windowH = $(window).height()
    
    pomodoroEnter = pomodoroBrowser.offset().top - .75 * windowH
    pomodoroLeave = pomodoroEnter + pomodoroBrowser.height() + .5 * windowH
    
    // let jnWebsite = $('#projects > .content > #jupiter-notify.projectWebsite > .browser .website')
    // jnEnter = jnWebsite.offset().top - .75 * windowH
    // jnLeave = jnEnter + jnWebsite.height() + .5 * windowH

    projectScroll()
}

const projectScroll = () => {
    if (isMobile) {
        if (pomodoroBrowser.attr('src') !== 'assets/work_pomodoro_1080.gif') {
            pomodoroBrowser.attr({ 'src': 'assets/work_pomodoro_1080.gif' })
            pomodoroMobile.attr({ 'src': 'assets/work_pomodoro_mobile.gif' })
        }
        return
    }
    
    const scrollPos = $(document).scrollTop()
    if (scrollPos >= pomodoroEnter && scrollPos <= pomodoroLeave) {
        if (pomodoroBrowser.attr('src') !== 'assets/work_pomodoro_1080.gif') {
            pomodoroBrowser.attr({ 'src': 'assets/work_pomodoro_1080.gif' })
            pomodoroMobile.attr({ 'src': 'assets/work_pomodoro_mobile.gif' })
        }
    } else if (pomodoroBrowser.attr('src') !== 'assets/work_pomodoro_1080.jpg') {
        pomodoroBrowser.attr({ 'src': 'assets/work_pomodoro_1080.jpg' })
        pomodoroMobile.attr({ 'src': 'assets/work_pomodoro_mobile.jpg' })
    }
    
    /*if (scrollPos >= jnEnter && scrollPos <= jnLeave) {
		if (jnBrowser.paused) {
			jnBrowser.play()
			jnMobile.play()
		}
	} else if (!jnBrowser.paused) {
        jnBrowser.pause()
        jnMobile.pause()
	}*/
}

const copyEmail = () => {
    let $temp = $('<input>')
    $('body').append($temp)
    $temp.val('info@marcelmiro.com').select()
    document.execCommand('copy')
    $temp.remove()
    
    new TypeIt('.section__contact #copy-email-feedback', {
        speed: 50,
        deleteSpeed: 50,
        waitUntilVisible: true,
        lifeLike: true,
        breakLines: false,
        cursor: true,
        afterComplete: () => $('.section__contact #copy-email-feedback').find('.ti-cursor').addClass('is-hidden')
    })
        .type('Email copied to clipboard :)')
        .pause(3000).delete().go()
}

const scrollMagic = () => {
    if (checkBrowser() === 'ie') return
    const controller = new ScrollMagic.Controller()
    const tweenHome = new TimelineMax(), tweenPromotion = new TimelineMax(),
        tweenProjectMajor36 = new TimelineMax(), tweenContact = new TimelineMax()
    
    tweenHome.to('.section__home .bg .planet.yellow', 1, {ease: Power1.easeOut, y: '40vh'}, 0)
        .to('.section__home .bg .planet.blue', 1, {ease: Power1.easeOut, y: '10vh'}, 0)
        .to('.section__home .bg .planet.red', 1, {ease: Power1.easeOut, y: '50vh'}, 0)
        .to('.section__home .bg .planet.earth', 1, {ease: Power1.easeOut, y: '25vh'}, 0)
    
    tweenPromotion.to('.section__promotion .bg .planet.beige', 1, {y: '12vh'}, 0)
        .to('.section__promotion .bg .planet.pink', 1, {y: '-12vh'}, 0)
        .from('.section__promotion .bg .satellite', 1, {x: '8vw', y: '35vh'}, 0)
    
    tweenProjectMajor36.to('.project#major36 .showcase .browser img.website', 1, {ease: 'none', y: '-55%'}, 0)
        .to('.project#major36 .showcase .mobile img.website', 1, {ease: 'none', y: '-55%'}, 0)
    
    tweenContact.to('.section__contact .bg .rocket', 1, {y: '-20vh'}, 0)

    const sceneHome = new ScrollMagic.Scene({
        offset: 1,
        triggerHook: '.section__home',
        duration: '100%',
        reverse: true
    })
        .setTween(tweenHome)
        .addTo(controller)
    
    const scenePromotion = new ScrollMagic.Scene({
        offset: 1,
        triggerElement: '.section__promotion',
        triggerHook: .9,
        duration: '100%',
        reverse: true
    })
        .setTween(tweenPromotion)
        .addTo(controller)
    
    const sceneProjectMajor36 = new ScrollMagic.Scene({
        offset: -100,
        triggerElement: '#major36 .text',
        duration: '100%',
        reverse: true
    })
        .setTween(tweenProjectMajor36)
        .addTo(controller)
    
    const sceneContact = new ScrollMagic.Scene({
        offset: -($(window).height() / 2),
        triggerElement: '.section__contact',
        duration: $(document).height() - $('.section__contact').offset().top,
        reverse: true
    })
        .setTween(tweenContact)
        .addTo(controller)
}
