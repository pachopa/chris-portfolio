$(function () {
  var changeBackground, i = 0;
  var backgroundColor = ['rgb(43, 188, 239)', 'rgb(181, 241, 38)', 'rgb(254, 194, 43)', 'rgb(255, 95, 6)', 'rgb(73, 226, 214)', 'rgb(181, 241, 38)', 'rgb(247, 30, 97)', 'rgb(165, 64, 254)'];
  const $order = $("div[id^='order']");
  $('#footer').hide();
  // $('.openButton').hide();
  // $('.arrow2').hide();
  $('#fullpage').hide();
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
      $("#fullpage").show();
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
    alertify.set('notifier', 'position', 'bottom-left');
    alertify.success('click the arrow button for the project').delay(3);
    // setTimeout(function () {
    //   alertify.success('use scroll or spacebar for a new project');
    // }, 2000);
    // alertify.message('test')
  }

  function fullpage() {
    $('#fullpage').fullpage({
      sectionsColor: ['white', 'white', 'white', 'white', 'white', 'white'],
      sectionSelector: '.vertical-scrolling',
      navigation: false,
      controlArrows: true,
      verticalCentered: true,
      scrollingSpeed: 1200,
      css3: true,
      afterSlideLoad: function (anchorLink, index, slideAnchor, slideIndex) {
      },
      afterLoad: function (anchor, index) {
        if (index == 4) {
          $('p.ScrollDown').hide();
        } else {
          $('p.ScrollDown').show();
        }
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

  $('input, textarea').keyup(function () {
    var name = $('.userName').val();
    var email = $('.userEmail').val();
    var subject = $('.subject').val();
    var message = $('.message').val();
    if (name != '' && email != '' && subject != '' && message != '') {
      $('.fillBlank').fadeOut();
    }
  })
  $('button.sendButton').click(function () {
    var $contactForm = $('#contactForm');
    var $contactFormFeedBack = '';
    var name = $('.userName').val();
    var email = $('.userEmail').val();
    var subject = $('.subject').val();
    var message = $('.message').val();
    if (name == '' || email == '' || subject == '' || message == '') {
      $('.fillBlank').fadeIn();
    } else {
      $.ajax({
        type: "POST",
        url: "send-email.php",
        data: { name: name, email: email, subject: subject, message: message }
      }).success(function (html) {
        $('.fillBlank').text('Thank you for your email!').fadeIn();
        $('.userName').val('');
        $('.userEmail').val('');
        $('.subject').val('');
        $('.message').val('');
      }).error(function (html) {

      })
    }

  });

})
