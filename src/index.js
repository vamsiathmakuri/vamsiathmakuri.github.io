import 'fullpage.js/dist/fullpage.css'
import 'flickity/css/flickity.css'
import './styles.scss'
import 'fullpage.js/vendors/scrolloverflow'
import fullpage from 'fullpage.js'
import anime from 'animejs/lib/anime.es.js'
import 'particles.js'
import Flickity from 'flickity'
import $ from 'cash-dom'

let pageInstance

function fullPageInit () {
  pageInstance = fullpage('#myFullpage', {
    navigation: false,
    licenseKey: 'asds',
    sectionsColor: ['#212121', '#212121', '#212121', '#212121'],
    lazyLoading: true,
    normalScrollElements: '.scrollable-content',
    scrollOverflow: true,
    scrollingSpeed: 900,
    onLeave: function (origin, destination, direction) {
      if (origin.index === 0) {
        pageInstance.setAllowScrolling(false)
      } else {
        pageInstance.setAllowScrolling(true)
      }
    }
  })

  setTimeout(() => {
    $('.loading-section').remove()
    textAnimationInit()
  }, 1000)

  $('.info-card .more-info').on('click', function () {
    $(this).parent().find('.description').addClass('active')
  })

  $('.description .close').on('click', function () {
    $(this).closest('.description').removeClass('active')
  })
}

function textAnimationInit () {
  const textWrapper = document.querySelector('.main-title .letters')
  textWrapper.innerHTML = textWrapper.textContent.replace(/[.',]|\w/g, "<span class='letter'>$&</span>")

  anime.timeline({})
    .add({
      targets: '.main-title .line',
      scaleY: [0, 1],
      opacity: [0.5, 1],
      easing: 'easeOutExpo',
      duration: 700
    })
    .add({
      targets: '.main-title .line',
      translateX: [0, document.querySelector('.main-title .letters').getBoundingClientRect().width + 10],
      easing: 'easeOutExpo',
      duration: 700,
      delay: 100
    }).add({
      targets: '.main-title .letter',
      opacity: [0, 1],
      easing: 'easeOutExpo',
      duration: 600,
      offset: '-=775',
      delay: (el, i) => 34 * (i + 1)
    }).add({
      targets: '.main-title .line1',
      opacity: 0,
      duration: 1000,
      easing: 'easeOutExpo',
      delay: 1000
    })

  const textWrapper2 = document.querySelector('.secondary-title .letters')
  textWrapper2.innerHTML = textWrapper2.textContent.replace(/\S/g, "<span class='letter'>$&</span>")

  anime.timeline()
    .add({
      targets: '.secondary-title .letter',
      scale: [0.3, 1],
      opacity: [0, 1],
      translateZ: 0,
      easing: 'easeOutExpo',
      duration: 600,
      delay: (el, i) => 70 * (i + 1)
    }).add({
      targets: '.secondary-title .line',
      scaleX: [0, 1],
      opacity: [0.5, 1],
      easing: 'easeOutExpo',
      duration: 700,
      offset: '-=875',
      delay: (el, i, l) => 80 * (l - i)
    })
}

function init () {
  fullPageInit()
  particlesJS.load('particles-js', 'assets/particles.json', function () {
    console.log('callback - particles.js config loaded')
  })

  const data = new Flickity('.main-projects', {
    cellAlign: 'left',
    contain: true
  })

  $('body').on('click', '.main-content .scroll-section', () => {
    pageInstance.setAllowScrolling(true)
    pageInstance.moveSectionUp()
  })

  $('body').on('click', '.main-row .scroll-section', () => {
    pageInstance.moveSectionDown()
  })
}

window.onload = init
