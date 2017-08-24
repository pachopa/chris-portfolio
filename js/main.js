$(function () {
  var changeBackground, i = 0;
  var backgroundColor = ['rgb(43, 188, 239)','rgb(181, 241, 38)','rgb(254, 194, 43)','rgb(255, 95, 6)', 'rgb(73, 226, 214)', 'rgb(181, 241, 38)', 'rgb(247, 30, 97)', 'rgb(165, 64, 254)'];

  //sidebar toggle
  $('.openButton').on('click', function (e) {
    e.preventDefault();
    $('.typed').hide();
    $('.typed2').hide();
    $('.arrow').hide();
    const $order = $("div[id^='order']");
    // console.log($order, $order[2]);
    $('.sidebar.top').slideToggle(700, function () {
      // $('.aboutAllContent').show()
      // $('#orderFirst').delay(500).fadeIn(0).addClass("animated fadeInDown")
      var time = 500;
     
      $order.each(function (index, val) {
        $(this).delay(time).fadeIn(0)
        time += 500;
      });
    });
    
  })
  // changeBackground = setInterval(function(event) {
  //   if(i === backgroundColor.length) {
  //     $('body').animate({backgroundColor: backgroundColor[i]}, 'slow');
  //     i = 0;
      
  //   } else {
  //     $('body').animate({backgroundColor: backgroundColor[i]}, 'slow');
  //     i++    
  //   }
  // }, 2500)

  //sidebar toggle
  $('.sidebarButton').on('click', function (e) {
    $('#firstPage').toggle(700)
    $('.sidebar.top').slideToggle(700, function () {
    })
  })
  //fullpage js
  $('#fullpage').fullpage({
    sectionsColor: ['#B8AE9C', '#348899', '#F2AE72', '#5C832F', '#B8B89F', '#348899'],
    sectionSelector: '.vertical-scrolling',
    navigation: true,
    anchors: ['firstSection', 'secondSection', 'thirdSection', 'fourthSection', 'fifthSection'],
    afterSlideLoad: function (anchorLink, index, slideAnchor, slideIndex) {
      console.log("chsi3-3-", anchorLink, index, slideAnchor, slideIndex)
    },
    afterLoad: function (anchor, index) {
      console.log(anchor, index)
    }
  })

  //type js
  $(".typed").typed({
    strings: ["<h1 style=font-size:150px;>Chris Lee</h1> "],
    typeSpeed: 70,
    backDelay: 0,
    showCursor: null,
    startDelay: 2000,
    // loop
    loop: false,
    callback: function () {
      $(".typed2").typed({
        strings: ["<div style=font-size:40px;>I'm A Web Developer</div>", "<div style=font-size:40px;>Living In Gastown Vancouver</div>", "<div style=font-size:40px;>I Love <em> Music </em> </div> "],
        typeSpeed: 70,
        backDelay: 50,
        showCursor: null,
        startDelay: 0,
        // loop
        loop: true,
        callback: function () {
          // this is going to be button effect --> $('.resource').delay(500).fadeIn('slow');
          $('.openButton').fadeIn()
          setTimeout(function () {
            $('.typed-effect + .typed-cursor').css({ 'opacity': '0', 'animation': 'blink' });
          }, 1300);
        }
      })
    }
  })

})
