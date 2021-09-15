let tl = new gsap.timeline({
    onComplete: () => {
        document.querySelector('.hero_heading').style.transform = 'none'
        document.querySelector('.gr').style.transform = 'none'
    }
})

window.addEventListener('load', () => {
    tl
    .add('preloader')
    .to('.preloader', .8, {
        background: '#1b1b1b',
        ease: Power3.easeInOut
    }, 'preloader')
    .to('.preloader svg', .8, {
        autoAlpha: 0,
        ease: Power3.easeInOut
    })
    .to('.preloader', .8, {
        autoAlpha: 0,
        ease: Power3.easeInOut
    })
    .add('homeAnimation')
    .from('.background', 3.2, {
        autoAlpha: 0,
    }, 'homeAnimation')
    .from('.hero_heading, .gr, .ow', .6, {
        letterSpacing: '40px',
        ease: Power3.easeOut
    }, '-=3')
    .from('.tree', 4.6, {
        autoAlpha: 0,
        ease: Power3.easeOut
    }, '-=2')
    .from('.hero_description, .hero_button, .social_wrapper', .6, {
        y: '20px',
        autoAlpha: 0,
        stagger: .4,
        ease: Power3.easeOut
    }, '-=3.5')
    .from('.hero_heading, .gr, .ow', .6, {
        y: '40px',
        ease: Power3.easeOut
    }, '-=4')
    .from('nav ul li', .4, {
        y: '6px',
        autoAlpha: 0,
        stagger: .4,
        ease: Power3.easeOut
    }, '-=4.5')
    .from('.logo, .hamburger_button', .5, {
        autoAlpha: 0,
        ease: Power3.easeOut
    }, '-=2')
})

let navButton = document.querySelector('.hamburger_button')

let toggleNav = () => {
    if(!document.querySelector('.root').classList.contains('nav_open')) {
        new gsap.timeline({
            onComplete: () => {
                document.querySelector('.root').classList.toggle('nav_open')
            }
        })
        .add('blurContent')
        .to('.hero_heading, .tree', .6, {
            filter: 'blur(40px)',
            ease: Power3.easeInOut
        }, 'blurContent')
        .to('.hero_content_bottom, .social_wrapper', .4, {
            filter: 'blur(25px)',
            ease: Power3.easeInOut
        }, '-=.3')
        .to('.hamburger_button', .2, {
            scale: 0,
            ease: Power3.easeInOut
        }, '=-.6')
        .add('hamburger')
        .to('.hamburger_button .top_line', .2, {
            rotate: 45,
            ease: Power3.easeInOut
        }, 'hamburger')
        .to('.hamburger_button .middle_line', .2, {
            scaleX: 0,
            ease: Power3.easeInOut
        }, '-=.05')
        .to('.hamburger_button .bottom_line', .2, {
            rotate: -45,
            ease: Power3.easeInOut
        }, '-=.1')
        .add('showNav')
        .to('nav.mobile_nav', 1.8, {
            autoAlpha: 1,
            ease: Power3.easeInOut
        }, '-=1.2')
        .from('nav.mobile_nav ul li', .4, {
            y: '6px',
            autoAlpha: 0,
            stagger: .2,
            ease: Power3.easeOut
        }, '-=.2')
        .to('.hamburger_button', .2, {
            scale: 1,
            ease: Power3.easeInOut
        })
    } else {
        new gsap.timeline({
            onComplete: () => {
                document.querySelector('.root').classList.toggle('nav_open')

                document.querySelectorAll('nav.mobile_nav ul li').forEach(e => {
                    e.style.opacity = '1'
                    e.style.visibility = 'inherit'
                    e.style.transform = 'translate(0)'
                })
            }
        })
        .add('hideNav')
        .to('.hamburger_button', .2, {
            scale: 0,
            ease: Power3.easeInOut
        }, 'hideNav')
        .to('nav.mobile_nav ul li', .4, {
            y: '-6px',
            autoAlpha: 0,
            stagger: .2,
            ease: Power3.easeOut
        }, 'hideNav')
        .to('nav.mobile_nav', 1.4, {
            autoAlpha: 0,
            ease: Power3.easeInOut
        }, '-=.6')
        .to('.hero_heading, .tree', 1.4, {
            filter: 'blur(0px)',
            ease: Power3.easeInOut
        }, '=-1.5')
        .to('.hero_content_bottom, .social_wrapper', 1.4, {
            filter: 'blur(0px)',
            ease: Power3.easeInOut
        }, '-=1.5')
        .add('hamburger')
        .to('.hamburger_button .top_line', .2, {
            rotate: 0,
            ease: Power3.easeInOut
        }, 'hamburger')
        .to('.hamburger_button .middle_line', .2, {
            scaleX: 1,
            ease: Power3.easeInOut
        }, '-=.05')
        .to('.hamburger_button .bottom_line', .2, {
            rotate: 0,
            ease: Power3.easeInOut
        }, '-=.1')
        .to('.hamburger_button', .2, {
            scale: 1,
            ease: Power3.easeInOut
        }, '=-.1')

    }

}

navButton.addEventListener('click', toggleNav, false)