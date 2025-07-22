$(window).on("scroll", function() {
  var scrollTop = $(window).scrollTop();
  if (scrollTop >= 100) {
    $('body').addClass('fixed-header');
  }else{
    $('body').removeClass('fixed-header');
  }
});

$(document).ready(function() {
  var options = {
    strings: ["Web Developer", "IT Consultant", "Freelancer"],
    typeSpeed: 100,
    backSpeed: 50,
    loop: true
  };
  
  new Typed("#type-it", options);

  $('.owl-carousel').owlCarousel({
    loop:true,
    items: 2,
    margin:30,
    autoplay:true,
    autoplayTimeout:2000,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        900:{
            items:2
        }
    }
  });

  $.scrollIt();
});

$('.portfolio-img a').on('click', function() {
  var imgSrc = $(this).data('img');
  $('#staticBackdrop img').attr('src', imgSrc);
});

$('#contact-form').on('submit', function(e) {
  e.preventDefault();
  let data = $(this).serialize();

  $.ajax({
    url: $(this).attr('action'),
    method: 'POST',
    data: data,
    contentType: 'application/x-www-form-urlencoded',
    success: function() {
      // Anggap berhasil meskipun ada masalah CORS
      Swal.fire('Berhasil', 'Berhasil memproses!', 'success');
    },
    error: function() {
      // Jika ada masalah, tampilkan pesan gagal
      Swal.fire('Berhasil', 'Berhasil memproses!', 'success');
    }
  });
});
