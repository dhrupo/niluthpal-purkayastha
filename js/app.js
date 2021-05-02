particlesJS('particles-js',
  {
    "particles": {
      "number": {
        "value": 10,
        "density": {
          "enable": true,
          "value_area": 600
        }
      },
      "color": {
        "value": "#000000"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 4
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 5,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 300,
        "color": "#000000",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 5,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab"
        },
        "onclick": {
          "enable": true,
          "mode": "repulse"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 0.5
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 4,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  },
  function () {
    console.log('callback - particles.js config loaded');
  });


window.addEventListener("scroll", () => {
  if (window.scrollY > 80) {
    document.querySelector('.my-navbar').classList.add('menu-bg');
  } else {
    document.querySelector('.my-navbar').classList.remove('menu-bg');
  }
})

window.addEventListener("scroll", () => {
  if (window.scrollY > 1000) {
    document.querySelector('.about-text').classList.add('fromLeft');
    document.querySelector('.about-skills').classList.add('fromRight');
  } else {
    document.querySelector('.about-text').classList.remove('fromLeft');
    document.querySelector('.about-skills').classList.remove('fromRight');
  }
})

var slider = tns({
  "container": '.my-slider',
  "speed": 300,
  "autoplay": true,
  "items": 3,
  "loop": true,
  "swipeAngle": false,
  "controls": false,
  "navPosition": true,
  "rewind": true,
  "responsive": {
    "350": {
      "items": 2
    },
    "500": {
      "items": 3
    }
  }
});