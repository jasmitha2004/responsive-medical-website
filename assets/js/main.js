/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close'),
      navLinks = document.querySelectorAll('.nav__link')

if(navToggle){
  navToggle.addEventListener('click', () => navMenu.classList.add('show-menu'))
}

/*=============== REMOVE MENU MOBILE ===============*/
if(navClose){
  navClose.addEventListener('click', () => navMenu.classList.remove('show-menu'))
}

navLinks.forEach(link =>
  link.addEventListener('click', () => navMenu.classList.remove('show-menu'))
)

/*=============== ADD SHADOW HEADER ===============*/
const header = document.getElementById('header')
const shadowHeader = () => {
  if(window.scrollY >= 50) header.classList.add('shadow-header')
  else header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader)

/*=============== SWIPER PRICES ===============*/
const swiperPrices = new Swiper('.prices__container', {
  spaceBetween: 24,
  loop: true,
  grabCursor: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    768: { slidesPerView: 2 },
    1150: { slidesPerView: 3, spaceBetween: 32 },
  },
})

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () => {
  const scrollUp = document.getElementById('scroll-up')
  if(window.scrollY >= 350) scrollUp.classList.add('show-scroll')
  else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
  const scrollDown = window.scrollY

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight,
          sectionTop = current.offsetTop - 80,
          sectionId = current.getAttribute('id'),
          sectionLink = document.querySelector(`.nav__menu a[href*=${sectionId}]`)

    if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
      sectionLink.classList.add('active-link')
    } else {
      sectionLink.classList.remove('active-link')
    }
  })
}
window.addEventListener('scroll', scrollActive)

/*=============== DARK LIGHT THEME ===============*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

if(selectedTheme){
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', () => {
  document.body.classList.toggle(darkTheme)
  themeButton.classList.toggle(iconTheme)

  localStorage.setItem('selected-theme', getCurrentTheme())
  localStorage.setItem('selected-icon', getCurrentIcon())
})

/*=============== SCROLL REVEAL ANIMATION ===============*/
if (typeof ScrollReveal !== 'undefined') {
  const sr = ScrollReveal({
    origin: 'top',
    distance: '40px',
    duration: 1400,
    delay: 200,
    reset: false,
  })

  sr.reveal('.home__data, .section__title, .delivery__data, .about__data, .contact__data')
  sr.reveal('.home__images, .delivery__img, .about__group, .contact__map', { delay: 400 })
  sr.reveal('.home__stats, .delivery__card, .about__list, .prices__card, .gallery__img, .footer__content', { interval: 100 })
}