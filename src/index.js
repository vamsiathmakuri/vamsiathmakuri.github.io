import './styles.scss'
import anime from 'animejs/lib/anime.es.js'
import $ from 'cash-dom'


function fullPageInit() {
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

  $('body').on('click', '.on-scroll', () => {
    window.scrollTo({
      top: document.getElementById('main-home').clientHeight,
      behavior: 'smooth'
    });
  });
}

function textAnimationInit() {
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

function animation() {
  window.human = false;

  var canvasEl = document.querySelector('.fireworks');
  var ctx = canvasEl.getContext('2d');
  var numberOfParticules = 12;
  var pointerX = 0;
  var pointerY = 0;
  var tap = ('ontouchstart' in window || navigator.msMaxTouchPoints) ? 'touchstart' : 'mousedown';
  var colors = ['#FF1461', '#18FF92', '#5A87FF', '#FBF38C'];

  function setCanvasSize() {
    canvasEl.width = window.innerWidth * 2;
    canvasEl.height = window.innerHeight * 2;
    canvasEl.style.width = window.innerWidth + 'px';
    canvasEl.style.height = window.innerHeight + 'px';
    canvasEl.getContext('2d').scale(2, 2);
  }

  function updateCoords(e) {
    pointerX = e.clientX || e.touches[0].clientX;
    pointerY = e.clientY || e.touches[0].clientY;
  }

  function setParticuleDirection(p) {
    var angle = anime.random(0, 360) * Math.PI / 180;
    var value = anime.random(50, 300);
    var radius = [-1, 1][anime.random(0, 1)] * value;
    return {
      x: p.x + radius * Math.cos(angle),
      y: p.y + radius * Math.sin(angle)
    }
  }

  function createParticule(x, y) {
    var p = {};
    p.x = x;
    p.y = y;
    p.color = colors[anime.random(0, colors.length - 1)];
    p.radius = anime.random(10, 15);
    p.endPos = setParticuleDirection(p);
    p.draw = function () {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, 2 * Math.PI, true);
      ctx.fillStyle = p.color;
      ctx.fill();
    }
    return p;
  }

  function renderParticule(anim) {
    for (var i = 0; i < anim.animatables.length; i++) {
      anim.animatables[i].target.draw();
    }
  }

  function animateParticules(x, y) {
    var particules = [];
    for (var i = 0; i < numberOfParticules; i++) {
      particules.push(createParticule(x, y));
    }
    anime.timeline().add({
      targets: particules,
      x: function (p) { return p.endPos.x; },
      y: function (p) { return p.endPos.y; },
      radius: 0.1,
      duration: anime.random(1200, 1800),
      easing: 'easeOutExpo',
      update: renderParticule
    })
  }

  var render = anime({
    duration: Infinity,
    update: function () {
      ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);
    }
  });

  document.addEventListener(tap, function (e) {
    window.human = true;
    render.play();
    updateCoords(e);
    animateParticules(pointerX, pointerY);
  }, false);

  setCanvasSize();
  window.addEventListener('resize', setCanvasSize, false);

  var interval;
  var timeOut;
  function start() {
    clearInterval(interval);
    clearTimeout(timeOut);
    timeOut = setTimeout(() => {
      interval = setInterval(() => {
        window.human = true;
        render.play();
        // updateCoords();
        let image = document.querySelector('.main-home-section .image img').getBoundingClientRect();
        animateParticules(image.x + image.width/2, image.y + image.height/2);
      },300)
    }, 500);
  }
  window.addEventListener('scroll', () => {
    start();
  })

  start();
  
}

function homeAnimation() {
  var colors = ['#FF1461', '#18FF92', '#5A87FF', '#FBF38C'];


  const textArea = document.querySelector('.description .bar');
  
  anime({
    targets: '.description .bar div',
    // translateX: function (el, i) {
    //   return [0, textArea.clientWidth-200]
    // },
    width: [0, textArea.clientWidth, 0],
    delay: function (el, i) { return i * 100 },
    background: function (el, i) { return colors[i * colors.length] },
    duration: function(el, i, l) {
      const durations = [631, 762, 867, 920]
      return durations[i % 4]
    },
    direction: 'alternate',
    loop: true,
    autoplay: true,
    easing: 'easeInOutSine',
  });

  const textWrapper2 = document.querySelector('.description h1');
  textWrapper2.innerHTML = textWrapper2.textContent.replace(/\S/g, "<span class='letter'>$&</span>")

  anime.timeline()
    .add({
      targets: '.description h1 .letter',
      scale: [0.3, 1],
      opacity: [0, 1],
      translateZ: 0,
      easing: 'easeOutExpo',
      duration: 600,
      delay: (el, i) => 70 * (i + 1)
    })
}

function init() {
  fullPageInit()

  document.getElementById('main-home').style.height = `${window.innerHeight}px`;

  const age = Math.floor((new Date() - new Date('1996-11-09').getTime()) / 3.15576e+10);
  document.getElementById('year-text').innerText = age;

  setTimeout(() => {
    window.scrollTo({
      top: 0
    })
  }, 10);

  animation();

  homeAnimation();
}

window.onload = init
