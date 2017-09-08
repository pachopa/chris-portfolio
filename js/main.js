$(function () {
  var changeBackground, i = 0;
  var backgroundColor = ['rgb(43, 188, 239)', 'rgb(181, 241, 38)', 'rgb(254, 194, 43)', 'rgb(255, 95, 6)', 'rgb(73, 226, 214)', 'rgb(181, 241, 38)', 'rgb(247, 30, 97)', 'rgb(165, 64, 254)'];
  const $order = $("div[id^='order']");
  $('#footer').hide();
  // $('.openButton').hide();
  // $('.arrow2').hide();
  //sidebar toggle
  $('.openButton').on('click', function (e) {
    e.preventDefault();
    $('.typed').hide();
    $('.typed2').hide();
    $('.arrow').hide();

    // $('.ScrollDown').show();
    fullpage();

    $('.sidebar.top').slideToggle(700, function () {
      // $('.aboutAllContent').show()
      // $('#orderFirst').delay(500).fadeIn(0).addClass("animated fadeInDown")
      var time = 300;
      $order.each(function (index, val) {
        // console.log($(this));
        $(this).delay(time).fadeIn(0)
        time += 400;
      });
      $order.promise().done(function () {
        $('.arrow2').fadeIn();
      })

    });
  })

  //sidebar toggle
  $('.sidebarButton').on('click', function (e) {
    var time = 100;
    $order.each(function (index, val) {
      console.log(index, "chris93939")
      $(this).delay(time).switchClass('fadeIn', 'fadeOutUp', 1500);
      time += 50;
      // $(this).switchClass('animated ')
    })

    setTimeout(function () {
      $order.promise().done(function () {
        $('#footer').show();
        $('#firstPage').toggle(700)
        $('.sidebar.top').slideToggle(700, function () {
          setTimeout(function () {
            popup()
          }, 1500)
        })
      })
    }, 1000)


  })

  //img slider for portfolio 
  function popup() {
    // alertify.set('notifier','position', 'bottom-right');
    alertify.success('click the arrow button for the project');
    setTimeout(function () {
      alertify.success('scroll or spacebar for a new project');
    }, 2000);
    // alertify.message('test')
  }

  function fullpage() {
    $('#fullpage').fullpage({
      sectionsColor: ['white', 'white', 'white', 'white', 'white', 'white'],
      sectionSelector: '.vertical-scrolling',
      navigation: false,
      anchors: ['firstSection', 'secondSection', 'thirdSection', 'fourthSection', 'fifthSection'],
      controlArrows: true,
      verticalCentered: true,
      scrollingSpeed: 1100,
      css3: true,
      afterSlideLoad: function (anchorLink, index, slideAnchor, slideIndex) {
        console.log("chsi3-3-", anchorLink, index, slideAnchor, slideIndex)
      },
      afterLoad: function (anchor, index) {
        console.log(anchor, index)
      }
    })
  }
  //fullpage js


  // $('.fullpage').hide()

  //type js
  $(".typed").typed({
    strings: [`<div> <h1 style=float:left> c </h1> <h1 style=float:left;> h </h1> <h1 style=float:left> r </h1> <h1 style=float:left;> i </h1> <h1 style=float:left;> s </h1> <h1 class=chrisLee> l </h1> <h1 style=float:left;> e </h1> <h1 style=float:left;> e </h1> </div>`],
    typeSpeed: 30,
    backDelay: 0,
    showCursor: null,
    startDelay: 800,
    // loop
    loop: false,
    callback: function () {
      $(".typed2").typed({
        strings: ["<div>I'm A Web Developer</div>", "<div>Living In Gastown Vancouver</div>", "<div>I Love <em> Music </em> </div> "],
        typeSpeed: 30,
        backDelay: 50,
        showCursor: null,
        startDelay: 0,
        // loop
        loop: true,
        callback: function () {
          // this is going to be button effect --> $('.resource').delay(500).fadeIn('slow');
          $('.openButton').fadeIn()

        }
      })
    }
  })

  $('button.sendButton').click(function () {
    var $contactForm = $('#contactForm');
    var $contactFormFeedBack = '';
    var name = $('.userName').val();
    var email = $('.userEmail').val();
    var subject = $('.subject').val();
    var message = $('.message').val();

    console.log($contactForm
      , $contactFormFeedBack
      , name
      , email
      , subject
      , message, "chris0101")
    $.ajax({
      type: "POST",
      url: "send-email.php",
      data: { name: name, email: email, subject: subject, message: message }
    }).success(function (html) {
      // $contactFormFeedBack = html;
      console.log("success mail")
    }).error(function (html) {
      console.log("error")
      // $contactFormFeedBack = '<h2>Error</h2>';
    })

  });

})
