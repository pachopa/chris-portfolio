$(function () {
  // $('.sidebar.top').hide();

  // $('.openButton').on('click', function() {
  //   $('.sidebar.top').slideToggle(700);
  // })
  $('.openButton').hide();

  // $(".openButton").click(function(e) {
  //     e.preventDefault();
  //     $(".about-page").toggleClass("toggled");
  // });
  //$('.about-page').hide()
  $('.openButton').on('click', function (e) {
    e.preventDefault();
    $('.sidebar.top').slideToggle(700);
  })

  $('.sidebarButton').on('click', function (e) {
    // console.log("chris")
    // //e.preventDefault();
    $('#firstPage').toggle(700)
    $('.sidebar.top').slideToggle(700, function () {
      
    })
  })
  
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



  $(".typed").typed({
    strings: ["<h1 style=font-size:60px;>Chris Lee</h1> <div style=font-size:40px;>I'm A Web Developer</div> <br> <div style=font-size:40px;>Living In Gastown Vancouver</div> <br> <div style=font-size:40px;>I Love <em> Music </em> </div> "],
    typeSpeed: 70,
    backDelay: 0,
    showCursor: null,
    startDelay: 1000,
    // loop
    loop: false,
    callback: function () {
      // this is going to be button effect --> $('.resource').delay(500).fadeIn('slow');
      $('.openButton').fadeIn()
      setTimeout(function () {
        $('.typed-effect + .typed-cursor').css({ 'opacity': '0', 'animation': 'blink' });
      }, 1300);
    }
  })
})
