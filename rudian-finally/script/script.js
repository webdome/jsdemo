$(function() {
  if (document.getElementById("index")) {
    function sizeInit() {
      var h = window.innerHeight;
      var w = window.innerWidth;
      if (w <= 1024) {
        w = 1024
      };
      $(".swiper-wrapper").css({
        'width': w + 'px',
        'height': h + 'px'
      })
    };
    sizeInit();
    $(window).on('resize',
      function() {
        sizeInit()
      })
  };
  $(".page_box").on('click',
    function() {
      if ($(this).attr("data-s") == 0) {
        $(".page_one").css({
          "animation": 'one 0.5s ease-in-out 1',
          "-moz-animation": 'one 0.5s ease-in-out 1',
          "-webkit-animation": 'one 0.5s ease-in-out 1',
          "-o-animation": 'one 0.5s ease-in-out 1',
          "animationFillMode": 'forwards'
        });
        $(".page_two").css({
          "animation": 'two 0.25s ease-in-out 0.25s 1',
          "-moz-animation": 'two 0.25s ease-in-out 0.25s 1',
          "-webkit-animation": 'two 0.25s ease-in-out 0.25s 1',
          "-o-animation": 'two 0.25s ease-in-out 0.25s 1',
          "animationFillMode": 'forwards'
        });
        $(".page_three").css({
          "animation": 'three 0.5s ease-in-out 1',
          "-moz-animation": 'three 0.5s ease-in-out 1',
          "-webkit-animation": 'three 0.5s ease-in-out 1',
          "-o-animation": 'three 0.5s ease-in-out 1',
          "animationFillMode": 'forwards'
        });
        $(this).attr("data-s", "1");
        $(".page_share").slideDown(500)
      } else if ($(this).attr("data-s") == 1) {
        $(".page_one").css({
          "animation": 'one_back 0.3s ease-in-out 1',
          "-moz-animation": 'one_back 0.3s ease-in-out 1',
          "-webkit-animation": 'one_back 0.3s ease-in-out 1',
          "-o-animation": 'one_back 0.3s ease-in-out 1',
          "animationFillMode": 'forwards'
        });
        $(".page_two").css({
          "animation": 'two_back 0.3s ease-in-out 1',
          "-moz-animation": 'two_back 0.3s ease-in-out 1',
          "-webkit-animation": 'two_back 0.3s ease-in-out 1',
          "-o-animation": 'two_back 0.3s ease-in-out 1',
          "animationFillMode": 'forwards'
        });
        $(".page_three").css({
          "animation": 'three_back 0.3s ease-in-out 1',
          "-moz-animation": 'three_back 0.3s ease-in-out 1',
          "-webkit-animation": 'three_back 0.3s ease-in-out 1',
          "-o-animation": 'three_back 0.3s ease-in-out 1',
          "animationFillMode": 'forwards'
        });
        $(this).attr("data-s", "0");
        $(".page_share").slideUp(300)
      }
    });
  $(".page_share>ul>li>a").hover(function() {
      $(this).css('color', '#2eb3e8')
    },
    function() {
      if (document.getElementById("index")) {
        $(this).css('color', '#fff')
      } else {
        $(this).css('color', '#000')
      }
    });
  if (document.getElementById("index")) {
    $("#nav>div>ul>li>a").hover(function() {
        if (!$(this).hasClass('nav_link_up')) {
          $(this).addClass('nav_link_show')
        }
      },
      function() {
        $(this).removeClass('nav_link_show')
      });
    $("#nav>div>ul>li>a").click(function(e) {
      e.preventDefault();
      var i = $("#nav>div>ul>li>a").index($(this));
      $("#nav>div>ul>li>a").removeClass('nav_link_up nav_link_show').addClass('nav_link_down');
      $(this).removeClass('nav_link_down').addClass('nav_link_up');
      $(".swiper-pagination>span:eq(" + i + ")").trigger('click')
    });
    var cnum = 0;
    $(".arrowright").click(function(e) {
      e.stopPropagation;
      $("#index_case_box>div:eq(" + cnum + ")").removeClass("zoomInRight zoomInLeft").addClass('zoomOutLeft');
      cnum++;
      if (cnum > 2) {
        cnum = 2
      };
      $("#index_case_box>div:eq(" + cnum + ")").removeClass("zoomOutLeft zoomOutRight").addClass('zoomInRight')
    });
    $(".arrowleft").click(function(e) {
      e.stopPropagation;
      $("#index_case_box>div:eq(" + cnum + ")").removeClass("zoomInRight zoomInLeft").addClass('zoomOutRight');
      cnum--;
      if (cnum < 0) {
        cnum = 0
      };
      $("#index_case_box>div:eq(" + cnum + ")").removeClass("zoomOutLeft zoomOutRight").addClass('zoomInLeft')
    });
    $(".sec4_txt").hover(function() {
        if (!$(this).hasClass('sec4_txt_cur')) {
          $(".sec4_txt").css("transition", "all 0.2s ease-in-out");
          $(this).addClass('sec4_txt_hover')
        }
      },
      function() {
        $(".sec4_txt").css("transition", "all 1s ease-in-out");
        $(this).removeClass('sec4_txt_hover')
      }).click(function() {
      $(".sec4_txt").removeClass('sec4_txt_cur');
      $(this).addClass('sec4_txt_cur')
    });
    $("#sec5_middle>div>h2").hover(function() {
        $(this).addClass('sec5_txt_hover')
      },
      function() {
        $(this).removeClass('sec5_txt_hover')
      });
    $("#sec5_middle>div>h2").click(function() {
      $("#sec5_middle>div>h2").not($(this)).css({
        'transition-delay': '0.3s',
        'opacity': 1,
        'transform': 'scale(1)'
      }).next("div").css({
        'opacity': 0,
        'transform': 'scale(0)'
      }).removeClass('sec5_txt_cur');
      $(this).css({
        'opacity': 0,
        'transform': 'scale(0)'
      }).next("div").css({
        'opacity': 1,
        'transform': 'scale(1)'
      }).addClass('sec5_txt_cur')
    });
    $("#sec5_middle>div>h2~div").click(function() {
      $("#sec5_middle>div>h2").css({
        'opacity': 1,
        'transform': 'scale(1)'
      }).next("div").css({
        'opacity': 0,
        'transform': 'scale(0)'
      }).removeClass('sec5_txt_cur')
    })
  };
  if (document.getElementById("index")) {
    var canvas = document.getElementById('sec1_bg'),
      ctx = canvas.getContext('2d'),
      w = canvas.width = window.innerWidth,
      h = canvas.height = window.innerHeight,
      hue = 217,
      stars = [],
      count = 0,
      maxStars = 1300;
    var canvas2 = document.createElement('canvas'),
      ctx2 = canvas2.getContext('2d');
    canvas2.width = 100;
    canvas2.height = 100;
    var half = canvas2.width / 2,
      gradient2 = ctx2.createRadialGradient(half, half, 0, half, half, half);
    gradient2.addColorStop(0.025, '#CCC');
    gradient2.addColorStop(0.1, 'hsl(' + hue + ', 61%, 33%)');
    gradient2.addColorStop(0.25, 'hsl(' + hue + ', 64%, 6%)');
    gradient2.addColorStop(1, 'transparent');
    ctx2.fillStyle = gradient2;
    ctx2.beginPath();
    ctx2.arc(half, half, half, 0, Math.PI * 2);
    ctx2.fill();

    function random(min, max) {
      if (arguments.length < 2) {
        max = min;
        min = 0
      };
      if (min > max) {
        var hold = max;
        max = min;
        min = hold
      };
      return Math.floor(Math.random() * (max - min + 1)) + min
    };

    function maxOrbit(x, y) {
      var max = Math.max(x, y),
        diameter = Math.round(Math.sqrt(max * max + max * max));
      return diameter / 2
    };
    var Star = function() {
      this.orbitRadius = random(maxOrbit(w, h));
      this.radius = random(60, this.orbitRadius) / 8;
      this.orbitX = w / 2;
      this.orbitY = h / 2;
      this.timePassed = random(0, maxStars);
      this.speed = random(this.orbitRadius) / 900000;
      this.alpha = random(2, 10) / 10;
      count++;
      stars[count] = this
    };
    Star.prototype.draw = function() {
      var x = Math.sin(this.timePassed) * this.orbitRadius + this.orbitX,
        y = Math.cos(this.timePassed) * this.orbitRadius + this.orbitY,
        twinkle = random(10);
      if (twinkle === 1 && this.alpha > 0) {
        this.alpha -= 0.05
      } else if (twinkle === 2 && this.alpha < 1) {
        this.alpha += 0.05
      };
      ctx.globalAlpha = this.alpha;
      ctx.drawImage(canvas2, x - this.radius / 2, y - this.radius / 2, this.radius, this.radius);
      this.timePassed += this.speed;
    };
    for (var i = 0; i < maxStars; i++) {
      new Star()
    };

    function animation() {
      ctx.globalCompositeOperation = 'source-over';
      ctx.globalAlpha = 0.5;
      ctx.fillStyle = 'hsla(' + hue + ', 64%, 6%, 2)';
      ctx.fillRect(0, 0, w, h);
      ctx.globalCompositeOperation = 'lighter';
      for (var i = 1,
          l = stars.length; i < l; i++) {
        stars[i].draw();
      };
      window.requestAnimationFrame(animation);
    };
    animation()
  };
  if (document.getElementById("index")) {
    $("#bubbles").bubbler()
  };
  if (document.getElementById("index")) {
    $('.secm1').css({
      'transition-delay': '0.2s',
      'transform': 'translateX(0px)',
      'opacity': '1'
    });
    $('.secm2').css({
      'transition-delay': '0.6s',
      'transform': 'translateX(0px)',
      'opacity': '1'
    });
    $('.secm3').css({
      'transition-delay': '1s',
      'transform': 'translateY(0px)',
      'opacity': '1'
    })
  };

  function firstIn(elem) {
    elem.find('.secm1').css({
      'transition-delay': '0.8s',
      'transform': 'translateX(0px)',
      'opacity': '1'
    });
    elem.find('.secm2').css({
      'transition-delay': '0.6s',
      'transform': 'translateX(0px)',
      'opacity': '1'
    });
    elem.find('.secm3').css({
      'transition-delay': '0.2s',
      'transform': 'translateY(0px)',
      'opacity': '1'
    })
  };

  function firstOut(elem) {
    elem.find('.secm1').css({
      'transition-delay': '0s',
      'transform': 'translateX(-400px)',
      'opacity': '0'
    });
    elem.find('.secm2').css({
      'transition-delay': '0s',
      'transform': 'translateX(400px)',
      'opacity': '0'
    });
    elem.find('.secm3').css({
      'transition-delay': '0s',
      'transform': 'translateY(400px)',
      'opacity': '0'
    })
  };

  function secondIn(elem) {
    elem.find('h1').css({
      'transition-delay': '0.4s',
      'transform': 'translateX(0px)',
      'opacity': '1'
    });
    elem.find('.blueline').css({
      'opacity': '1'
    });
    elem.find('p').css({
      'transition-delay': '0.6s',
      'transform': 'translateX(0px) rotate(0deg)',
      'opacity': '1'
    });
    elem.find('#profession>.m_icon').css({
      'transition-delay': '0.8s',
      'transform': 'translate(0px,0px) rotate(0deg)',
      'opacity': '1'
    });
    elem.find('#resource>.m_icon').css({
      'transition-delay': '1s',
      'transform': 'translateY(0px) rotate(0deg)',
      'opacity': '1'
    });
    elem.find('#attitude>.m_icon').css({
      'transition-delay': '1.2s',
      'transform': 'translate(0px,0px)',
      'opacity': '1'
    });
    elem.find('.m_icon~h2').css({
      'transition-delay': '1s',
      'transform': 'translateY(0px)',
      'opacity': '1'
    });
    elem.find('.more').css({
      'transition-delay': '1s',
      'opacity': '1'
    })
  };

  function secondOut(elem) {
    elem.find('h1').css({
      'transition-delay': '0s',
      'transform': 'translateX(-400px)',
      'opacity': '0'
    });
    elem.find('.blueline').css({
      'opacity': '0'
    });
    elem.find('p').css({
      'transition-delay': '0s',
      'transform': 'translateX(400px)',
      'opacity': '0'
    });
    elem.find('#profession>.m_icon').css({
      'transition-delay': '0s',
      'transform': 'translate(-200px,200px) rotate(360deg)',
      'opacity': '0'
    });
    elem.find('#resource>.m_icon').css({
      'transition-delay': '0s',
      'transform': 'translateY(200px) rotate(360deg)',
      'opacity': '0'
    });
    elem.find('#attitude>.m_icon').css({
      'transition-delay': '0s',
      'transform': 'translate(200px,200px) rotate(360deg)',
      'opacity': '0'
    });
    elem.find('.m_icon~h2').css({
      'transition-delay': '0s',
      'transform': 'translateY(400px)',
      'opacity': '0'
    });
    elem.find('.more').css({
      'transition-delay': '0s',
      'opacity': '0'
    })
  };

  function threeIn(elem) {
    elem.find('h1').css({
      'transition-delay': '0.4s',
      'transform': 'translateX(0px)',
      'opacity': '1'
    });
    elem.find('.blueline').css({
      'opacity': '1'
    });
    elem.find('p').css({
      'transition-delay': '0.6s',
      'transform': 'translateX(0px)',
      'opacity': '1'
    });
    elem.find('.arrowleft,.arrowright').css({
      'transition-delay': '0.8s',
      'transform': 'translateY(0px)',
      'opacity': '1'
    });
    elem.find('.case_01,.case_02').css({
      'transition-delay': '1s',
      'transform': 'scale(1) translateX(0px)',
      'opacity': '1'
    });
    elem.find('.case_03,.case_04').css({
      'transition-delay': '1s',
      'transform': 'scale(1) translateX(0px)',
      'opacity': '1'
    });
    elem.find('.more').css({
      'opacity': '1'
    })
  };

  function threeOut(elem) {
    elem.find('h1').css({
      'transition-delay': '0s',
      'transform': 'translateX(-400px)',
      'opacity': '0'
    });
    elem.find('.blueline').css({
      'opacity': '0'
    });
    elem.find('p').css({
      'transition-delay': '0s',
      'transform': 'translateX(-400px)',
      'opacity': '0'
    });
    elem.find('.arrowleft,.arrowright').css({
      'transform': 'translateY(-400px)',
      'transition-delay': '0s',
      'opacity': '0'
    });
    elem.find('.case_01,.case_02').css({
      'transition-delay': '0s',
      'transform': 'scale(0.2) translateX(-400px)',
      'opacity': '0'
    });
    elem.find('.case_03,.case_04').css({
      'transition-delay': '0s',
      'transform': 'scale(0.2) translateX(400px)',
      'opacity': '0'
    });
    elem.find('.more').css({
      'opacity': '0'
    })
  };

  function fourIn(elem) {
    elem.find('h1').css({
      'transition-delay': '0.4s',
      'transform': 'translateX(0px)',
      'opacity': '1'
    });
    elem.find('.blueline').css({
      'opacity': '1'
    });
    elem.find('p').css({
      'transition-delay': '0.6s',
      'transform': 'translateX(0px)',
      'opacity': '1'
    });
    elem.find('.sec4_middle>div>div:eq(0)').css({
      'transition-delay': '0.6s',
      'transform': 'translateX(0px)',
      'opacity': '1'
    });
    elem.find('.sec4_des').css({
      'transition-delay': '0.8s',
      'transform': 'translateY(0px)',
      'opacity': '1'
    });
    elem.find('.sec4_txt').css({
      'transition-delay': '1s',
      'transform': 'scale(1)',
      'opacity': '1'
    });
    elem.find('.sec4_txt>div').css({
      'transition-delay': '1s',
      'transform': 'translateX(0px) scale(1)',
      'opacity': '1'
    });
    elem.find('.sec4_txt>p').css({
      'transition-delay': '1.2s',
      'transform': 'translateX(0px)',
      'opacity': '1'
    });
    elem.find('.more').css({
      'opacity': '1'
    })
  };

  function fourOut(elem) {
    elem.find('.sec4_top>h1').css({
      'transition-delay': '0s',
      'transform': 'translateX(-400px)',
      'opacity': '0'
    });
    elem.find('.sec4_top>.blueline').css({
      'opacity': '0'
    });
    elem.find('.sec4_top>p').css({
      'transition-delay': '0s',
      'transform': 'translateX(400px)',
      'opacity': '0'
    });
    elem.find('.sec4_middle>div>div:eq(0)').css({
      'transition-delay': '0s',
      'transform': 'translateX(-400px)',
      'opacity': '0'
    });
    elem.find('.sec4_des').css({
      'transition-delay': '0s',
      'transform': 'translateY(-400px)',
      'opacity': '0'
    });
    elem.find('.sec4_txt').css({
      'transition-delay': '0s',
      'transform': 'scale(0)',
      'opacity': '0'
    });
    elem.find('.sec4_txt>div').css({
      'transition-delay': '0s',
      'transform': 'translateX(400px) scale(0)',
      'opacity': '0'
    });
    elem.find('.sec4_txt>p').css({
      'transition-delay': '0s',
      'transform': 'translateX(400px)',
      'opacity': '0'
    });
    elem.find('.more').css({
      'opacity': '0'
    })
  };

  function fiveIn(elem) {
    elem.find('h1').css({
      'transition-delay': '0.4s',
      'transform': 'translateX(0px)',
      'opacity': '1'
    });
    elem.find('.blueline').css({
      'opacity': '1'
    });
    elem.find('p').css({
      'transition-delay': '0.6s',
      'transform': 'translateX(0px)',
      'opacity': '1'
    });
    elem.find('#sec5_middle').css({
      'transition-delay': '1s',
      'transform': 'translateY(0px)',
      'opacity': '1'
    });
    elem.find('.more').css({
      'transition-delay': '1s',
      'opacity': '1'
    })
  };

  function fiveOut(elem) {
    elem.find('#sec5_main>h1').css({
      'transition-delay': '0s',
      'transform': 'translateX(-400px)',
      'opacity': '0'
    });
    elem.find('#sec5_main>.blueline').css({
      'opacity': '0'
    });
    elem.find('#sec5_main>p').css({
      'transition-delay': '0s',
      'transform': 'translateX(400px)',
      'opacity': '0'
    });
    elem.find('#sec5_middle').css({
      'transition-delay': '0s',
      'transform': 'translateY(200px)',
      'opacity': '0'
    })
  };

  function sixIn(elem) {
    elem.find('.message>ul>li:eq(0)').css({
      'transition-delay': '0s',
      'transform': 'translateY(0px)',
      'opacity': '1'
    }).next().css({
      'transition-delay': '0.2s',
      'transform': 'translateY(0px)',
      'opacity': '1'
    }).next().css({
      'transition-delay': '0.4s',
      'transform': 'translateY(0px)',
      'opacity': '1'
    }).next().css({
      'transition-delay': '0.6s',
      'transform': 'translateY(0px)',
      'opacity': '1'
    }).next().css({
      'transition-delay': '0.8s',
      'transform': 'translateY(0px)',
      'opacity': '1'
    })
  };

  function sixOut(elem) {
    elem.find('.message>ul>li:eq(0)').css({
      'transition-delay': '0s',
      'transform': 'translateY(400px)',
      'opacity': '0'
    }).next().css({
      'transition-delay': '0s',
      'transform': 'translateY(400px)',
      'opacity': '0'
    }).next().css({
      'transition-delay': '0s',
      'transform': 'translateY(400px)',
      'opacity': '0'
    }).next().css({
      'transition-delay': '0s',
      'transform': 'translateY(400px)',
      'opacity': '0'
    }).next().css({
      'transition-delay': '0s',
      'transform': 'translateY(400px)',
      'opacity': '0'
    })
  };
  if (document.getElementById("index")) {
    var swiper = new Swiper('.swiper-container', {
      direction: 'vertical',
      slidesPerView: 1,
      paginationClickable: true,
      spaceBetween: 0,
      mousewheelControl: true,
      speed: 1000,
      preventClicks: true,
      pagination: '.swiper-pagination',
      paginationClickable: true,
      onSlideNextStart: function(swiper) {
        var i = swiper.activeIndex;
        var slide = $(swiper.slides[i]);
        if (i == 1) {
          firstOut(slide.prev());
          secondIn(slide);
          $("#nav>div>ul>li>a").removeClass('nav_link_up').addClass('nav_link_down');
          $("#nav>div>ul>li>a[href='#section_two']").addClass('nav_link_up').removeClass('nav_link_down')
        };
        if (i == 2) {
          secondOut(slide.prev());
          threeIn(slide);
          $("#nav>div>ul>li>a").removeClass('nav_link_up').addClass('nav_link_down');
          $("#nav>div>ul>li>a[href='#section_three']").addClass('nav_link_up').removeClass('nav_link_down')
        };
        if (i == 3) {
          threeOut(slide.prev());
          fourIn(slide);
          $("#nav>div>ul>li>a").removeClass('nav_link_up').addClass('nav_link_down');
          $("#nav>div>ul>li>a[href='#section_four']").addClass('nav_link_up').removeClass('nav_link_down')
        };
        if (i == 4) {
          fourOut(slide.prev());
          fiveIn(slide);
          $("#nav>div>ul>li>a").removeClass('nav_link_up').addClass('nav_link_down');
          $("#nav>div>ul>li>a[href='#section_five']").addClass('nav_link_up').removeClass('nav_link_down');
          var canvas5 = document.querySelector('#sec5_bg');
          var ctx = canvas5.getContext('2d');
          canvas5.width = window.innerWidth;
          canvas5.height = window.innerHeight;
          ctx.lineWidth = .3;
          ctx.strokeStyle = (new Color(150)).style;
          var mousePosition = {
            x: 30 * canvas5.width / 60,
            y: 30 * canvas5.height / 60
          };
          var dots = {
            nb: 750,
            distance: 50,
            d_radius: 100,
            array: []
          };

          function colorValue(min) {
            return Math.floor(Math.random() * 255 + min)
          };

          function createColorStyle(r, g, b) {
            return 'rgba(' + r + ',' + g + ',' + b + ', 0.8)'
          };

          function mixComponents(comp1, weight1, comp2, weight2) {
            return (comp1 * weight1 + comp2 * weight2) / (weight1 + weight2)
          };

          function averageColorStyles(dot1, dot2) {
            var color1 = dot1.color,
              color2 = dot2.color;
            var r = mixComponents(color1.r, dot1.radius, color2.r, dot2.radius),
              g = mixComponents(color1.g, dot1.radius, color2.g, dot2.radius),
              b = mixComponents(color1.b, dot1.radius, color2.b, dot2.radius);
            return createColorStyle(Math.floor(r), Math.floor(g), Math.floor(b))
          };

          function Color(min) {
            min = min || 0;
            this.r = colorValue(min);
            this.g = colorValue(min);
            this.b = colorValue(min);
            this.style = createColorStyle(this.r, this.g, this.b)
          };

          function Dot() {
            this.x = Math.random() * canvas5.width;
            this.y = Math.random() * canvas5.height;
            this.vx = -.5 + Math.random();
            this.vy = -.5 + Math.random();
            this.radius = Math.random() * 2;
            this.color = new Color()
          };
          Dot.prototype = {
            draw: function() {
              ctx.beginPath();
              ctx.fillStyle = this.color.style;
              ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
              ctx.fill()
            }
          };

          function createDots() {
            for (i = 0; i < dots.nb; i++) {
              dots.array.push(new Dot())
            }
          };

          function moveDots() {
            for (i = 0; i < dots.nb; i++) {
              var dot = dots.array[i];
              if (dot.y < 0 || dot.y > canvas5.height) {
                dot.vx = dot.vx;
                dot.vy = -dot.vy
              } else if (dot.x < 0 || dot.x > canvas5.width) {
                dot.vx = -dot.vx;
                dot.vy = dot.vy
              };
              dot.x += dot.vx;
              dot.y += dot.vy
            }
          };

          function connectDots() {
            for (i = 0; i < dots.nb; i++) {
              for (j = 0; j < dots.nb; j++) {
                i_dot = dots.array[i];
                j_dot = dots.array[j];
                if ((i_dot.x - j_dot.x) < dots.distance && (i_dot.y - j_dot.y) < dots.distance && (i_dot.x - j_dot.x) > -dots.distance && (i_dot.y - j_dot.y) > -dots.distance) {
                  if ((i_dot.x - mousePosition.x) < dots.d_radius && (i_dot.y - mousePosition.y) < dots.d_radius && (i_dot.x - mousePosition.x) > -dots.d_radius && (i_dot.y - mousePosition.y) > -dots.d_radius) {
                    ctx.beginPath();
                    ctx.strokeStyle = averageColorStyles(i_dot, j_dot);
                    ctx.moveTo(i_dot.x, i_dot.y);
                    ctx.lineTo(j_dot.x, j_dot.y);
                    ctx.stroke();
                    ctx.closePath()
                  }
                }
              }
            }
          };

          function drawDots() {
            for (i = 0; i < dots.nb; i++) {
              var dot = dots.array[i];
              dot.draw()
            }
          };

          function animateDots() {
            ctx.clearRect(0, 0, canvas5.width, canvas5.height);
            moveDots();
            connectDots();
            drawDots();
            requestAnimationFrame(animateDots)
          };
          $('#section_five').on('mousemove',
            function(e) {
              mousePosition.x = e.pageX;
              mousePosition.y = e.pageY
            });
          $('#section_five').on('mouseleave',
            function(e) {
              mousePosition.x = canvas5.width / 2;
              mousePosition.y = canvas5.height / 2
            });
          createDots();
          requestAnimationFrame(animateDots);
        };
        if (i == 5) {
          fiveOut(slide.prev());
          $("#sec5_middle>div>h2").css({
            'opacity': 1,
            'transform': 'scale(1)'
          }).next("div").css({
            'opacity': 0,
            'transform': 'scale(0)'
          }).removeClass('sec5_txt_cur');
          sixIn(slide)
        }
      },
      onSlidePrevStart: function(swiper) {
        var i = swiper.activeIndex;
        var slide = $(swiper.slides[i]);
        if (i == 0) {
          firstIn(slide);
          secondOut(slide.next());
          $("#nav>div>ul>li>a").removeClass('nav_link_up').addClass('nav_link_down');
          $("#nav>div>ul>li>a[href='#section_one']").addClass('nav_link_up').removeClass('nav_link_down')
        };
        if (i == 1) {
          secondIn(slide);
          threeOut(slide.next());
          $("#nav>div>ul>li>a").removeClass('nav_link_up').addClass('nav_link_down');
          $("#nav>div>ul>li>a[href='#section_two']").addClass('nav_link_up').removeClass('nav_link_down')
        };
        if (i == 2) {
          threeIn(slide);
          fourOut(slide.next());
          $("#nav>div>ul>li>a").removeClass('nav_link_up').addClass('nav_link_down');
          $("#nav>div>ul>li>a[href='#section_three']").addClass('nav_link_up').removeClass('nav_link_down')
        };
        if (i == 3) {
          fourIn(slide);
          fiveOut(slide.next());
          $("#sec5_middle>div>h2").css({
            'opacity': 1,
            'transform': 'scale(1)'
          }).next("div").css({
            'opacity': 0,
            'transform': 'scale(0)'
          }).removeClass('sec5_txt_cur');
          $("#nav>div>ul>li>a").removeClass('nav_link_up').addClass('nav_link_down');
          $("#nav>div>ul>li>a[href='#section_four']").addClass('nav_link_up').removeClass('nav_link_down')
        };
        if (i == 4) {
          fiveIn(slide);
          sixOut(slide.next());
          $("#nav>div>ul>li>a").removeClass('nav_link_up').addClass('nav_link_down');
          $("#nav>div>ul>li>a[href='#section_five']").addClass('nav_link_up').removeClass('nav_link_down')
        }
      },
    })
  };
  if (document.getElementById("index")) {
    $('#section_six').ripples({
      resolution: 512,
      dropRadius: 20,
      perturbance: 0.04,
    });
    setInterval(function() {
        var $el = $('#section_six');
        var x = Math.random() * $el.outerWidth();
        var y = Math.random() * $el.outerHeight();
        var dropRadius = 10;
        var strength = 0.04 + Math.random() * 0.04;
        $el.ripples('drop', x, y, dropRadius, strength)
      },
      3000)
  };
  if (document.getElementById("joinus") || document.getElementById("aboutus") || document.getElementById("news") || document.getElementById("caseshare")) {
    var map = new BMap.Map("map");
    var point = new BMap.Point(117.238181, 31.843144);
    map.centerAndZoom(point, 22);
    var marker = new BMap.Marker(point);
    map.addOverlay(marker);
    marker.setAnimation(BMAP_ANIMATION_BOUNCE);
  };
  if (document.getElementById("caseshare")) {
    var h = window.innerHeight;
    var w = window.innerWidth;
    h = h - 180;
    w = w - 20;
    if (w <= 1024) {
      w = 1024
    };
    $("#case_box").css({
      'width': w + 'px',
      'height': h + 'px'
    })
  };
  if (document.getElementById("caseshare")) {
    $(document).delegate(".frame", "click",
      function(e) {
        e.preventDefault();
        $("#case_show").css('transform', 'scale(1)');
        $("#case_show>.cs_pic>img").css({})
      });
    $(".cs_des>span").on('click',
      function(event) {
        event.preventDefault();
        $("#case_show").css('transform', 'scale(0)');
        $(".cs_pic")[0].style = "";
        $(".cs_des>ul>li:eq(0)>p").html();
        $(".cs_des>ul>li:eq(1)>p").html();
        $(".cs_des>ul>li:eq(2)>p").html();
        $(".cs_txt").html()
      })
  };
  if (document.getElementById("caseshare")) {
    var xm = 0;
    var ym = 0;
    sP = {
      cx: 0,
      cy: 0,
      N: 0,
      R: [],
      I: [],
      C: [],
      L: [],
      Id: 0,
      init: function() {
        this.scr = document.getElementById('screen');
        this.pan = document.getElementById('pan');
        this.div = this.pan.getElementsByTagName('div');
        this.scr.onselectstart = function() {
          return false
        };
        this.scr.ondrag = function() {
          return false
        };
        for (var i = 0,
            o; o = this.div[i]; i++) {
          if (o.className == 'frame') {
            o.l = document.createElement('div');
            o.l.className = 'legend';
            o.appendChild(o.l);
            o.r = document.createElement('div');
            o.r.className = 'slider';
            o.appendChild(o.r);
            o.r.x = 0;
            o.r.l = o.l;
            o.r.p = 0;
            o.r.s = 2;
            o.r.m = false;
            o.img = o.r.img = o.getElementsByTagName('img')[0];
            o.r.c = Math.random() * 100;
            o.r.o = o;
            sP.R[sP.N] = o.r;
            sP.I[sP.N] = o.img.src;
            sP.L[sP.N] = o.title;
            o.title = "";
            sP.N++;
            o.r.onmouseover = function() {
              if (!this.m && this.img.complete) {
                if (sP.O != this && !this.n) {
                  this.x = this.o.offsetWidth;
                  this.resize();
                  this.n = true;
                  if (++sP.Id >= sP.N) {
                    sP.Id = 0;
                    for (var i = 0, o; o = sP.R[i]; i++) o.n = false
                  }
                };
                if (sP.O) {
                  sP.O.s = 2;
                  sP.C.push(sP.O)
                };
                this.m = true;
                sP.O = this;
                sP.Or = this
              }
            };
            o.r.resize = function() {
              var i = new Image();
              i.src = this.img.src;
              this.img.style.width = (i.width < this.offsetWidth) ? Math.round(this.offsetWidth * 1.25) + 'px' : Math.round(i.width) + 'px';
              this.img.style.height = (i.height < this.offsetHeight) ? Math.round(this.offsetHeight * 1.25) + 'px' : Math.round(i.height) + 'px';
              this.w = (this.img.offsetWidth - this.offsetWidth) * .5;
              this.h = (this.img.offsetHeight - this.offsetHeight) * .5;
              this.img.style.visibility = 'visible'
            }
          }
        };
        sP.resize();
        sP.run()
      },
      resize: function() {
        var o = sP.scr;
        sP.nw = o.offsetWidth;
        sP.nh = o.offsetHeight;
        sP.iw = sP.pan.offsetWidth;
        sP.ih = sP.pan.offsetHeight;
        for (sP.nx = 0, sP.ny = 0; o != null; o = o.offsetParent) {
          sP.nx += o.offsetLeft;
          sP.ny += o.offsetTop
        };
        for (var i = 0,
            o; o = sP.R[i]; i++) o.resize()
      },
      run: function() {
        sP.cx += (((Math.max(-sP.nw, Math.min(0, (sP.nw * .5 - (xm - sP.nx) * 2))) * (sP.iw - sP.nw)) / sP.nw) - sP.cx) * .1;
        sP.cy += (((Math.max(-sP.nh, Math.min(0, (sP.nh * .5 - (ym - sP.ny) * 2))) * (sP.ih - sP.nh)) / sP.nh) - sP.cy) * .1;
        sP.pan.style.left = Math.round(sP.cx) + 'px';
        sP.pan.style.top = Math.round(sP.cy) + 'px';
        if (sP.O) {
          sP.O.c += .015;
          sP.O.img.style.left = Math.round(-sP.O.w + sP.O.w * Math.sin(sP.O.c * 1.1)) + 'px';
          sP.O.img.style.top = Math.round(-sP.O.h + sP.O.h * Math.sin(sP.O.c)) + 'px';
          sP.O.l.style.left = Math.round(sP.O.x--) + 'px'
        };
        if (sP.Or) {
          sP.Or.p -= sP.Or.s;
          sP.Or.s *= 1.1;
          if (sP.Or.p < -sP.Or.offsetHeight) {
            sP.Or.p = -sP.Or.offsetHeight;
            sP.Or.s = 2;
            sP.Or.m = false;
            sP.Or = false
          };
          sP.O.style.top = Math.round(sP.O.p) + 'px'
        };
        for (var i = 0,
            c; c = sP.C[i]; i++) {
          if (c != sP.Or) {
            c.p += c.s;
            c.s *= 1.2;
            if (c.p >= 0) {
              c.p = 0;
              c.s = 2;
              c.m = false;
              sP.C.splice(i, 1)
            };
            c.style.top = Math.round(c.p) + 'px'
          } else {
            c.s = 2;
            c.m = false;
            sP.C.splice(i, 1)
          }
        };
        setTimeout(sP.run, 16)
      }
    };
    case_box.onmousemove = function(e) {
      if (window.event) e = window.event;
      xm = e.clientX;
      ym = e.clientY;
      return false
    }
  };
  $(document).delegate(".nm_list_one", "click",
    function() {
      $(".nm_list_one").removeClass('nm_list_cur');
      $(this).addClass('nm_list_cur')
    });
  $(".cp_right").click(function() {
    var i = $(".cp_num>ul>li.cp_cur").index();
    var j = $(".cp_num>ul>li:last").index();
    if (i == j) {
      return;
    }
    $(".cp_num>ul>li:eq(" + i + ")").removeClass('cp_cur').next().addClass('cp_cur');
    var a = $('.cp_cur').data('id');
    if (document.getElementById('news')) {
      getData({
          pageNo: a,
          pageSize: "12"
        },
        "newsService", "news");
    }else if (document.getElementById('caseshare')) {
      getData({
          pageNo: a,
          pageSize: "6"
        },
        "projectsServices", "caseshare");
    }

  });
  $(".cp_left").click(function() {
    var i = $(".cp_num>ul>li.cp_cur").index();
    if (i == 0) {
      return
    };
    $(".cp_num>ul>li:eq(" + i + ")").removeClass('cp_cur').prev().addClass('cp_cur');
    var a = $('.cp_cur').data('id');
    if (document.getElementById('news')) {
      getData({
          pageNo: a,
          pageSize: "12"
        },
        "newsService", "news");
    }else if (document.getElementById('caseshare')) {
      getData({
          pageNo: a,
          pageSize: "6"
        },
        "projectsServices", "caseshare");
    }



  });
  $(".cp_num>ul>li").click(function() {
    $(".cp_num>ul>li").removeClass('cp_cur');
    $(this).addClass('cp_cur')
  });
  window._bd_share_config = {
    "common": {
      "bdSnsKey": {},
      "bdText": "",
      "bdMini": "2",
      "bdMiniList": false,
      "bdPic": "",
      "bdStyle": "0",
      "bdSize": "16"
    },
    "share": {
      "bdSize": 16
    }
  };
  with(document) 0[(getElementsByTagName('head')[0] || body).appendChild(createElement('script')).src = 'http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion=' + ~(-new Date() / 36e5)]
});