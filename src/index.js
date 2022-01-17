import './styles.scss'
import anime from 'animejs/lib/anime.es.js'
import 'particles.js'
import $ from 'cash-dom'


function fullPageInit () {
  setTimeout(() => {
    $('.loading-section').remove()
    textAnimationInit()
  }, 250)

  $('.info-card .more-info').on('click', function () {
    $(this).parent().find('.description').addClass('active')
    $('body').addClass('no-overflow')
  })

  $('.description .close').on('click', function () {
    $(this).closest('.description').removeClass('active')
    $('body').removeClass('no-overflow');
  })

  $('body').on('click', '.main-row .scroll-section', () => {
    window.scrollTo({
      top: document.getElementById('main-home').clientHeight,
      behavior: 'smooth'
    });
  });
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

  document.getElementById('main-home').style.height = `${window.innerHeight}px`;
  
  setTimeout(() => {
    window.scrollTo({
      top: 0
    })
  }, 10)
}

window.onload = init
