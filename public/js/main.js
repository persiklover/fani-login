$(function() {

  $(".input").each(function(index, el) {
    var $label = $(el).next();
    if (el.value != "") {
      $label.addClass("active");
    }
    else {
      $label.removeClass("active");
    }
  });

  $(".input").blur(function() {
    var $label = $(this).next();
    if (this.value != "") {
      console.log('!');
      $label.addClass("active");
    }
    else {
      $label.removeClass("active");
    }
  });

  $(".js-register").click(function() {
    $(".form")
      .hide()
      .find(".form--register")
        .show();
  });
  
  $(".js-recover").click(function() {
    $(".form")
      .hide()
      .find(".form--recover")
        .show();
  });

  var $errorHTML = $(".error");
  $(".form").submit(function(e) {
    e.preventDefault();

    // Do what you want here...
    // $errorHTML.text( "Error!" );

  });

});