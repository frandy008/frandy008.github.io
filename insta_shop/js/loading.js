$( document ).ajaxStart( function() {
  $( "#ajax-wait" ).css({
    left: ( $( window ).width() - 32 ) / 2 + "px", // 32 = lebar gambar
    top: ( $( window ).height() - 32 ) / 2 + "px", // 32 = tinggi gambar
    display: "block"
  })
}).ajaxComplete( function() {
  $( "#ajax-wait" ).fadeOut();
});