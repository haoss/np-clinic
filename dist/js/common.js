$(document).ready(function(){

  //SVG Fallback
  if(!Modernizr.svg) {
    $("img[src*='svg']").attr("src", function() {
      return $(this).attr("src").replace(".svg", ".png");
    });
  };

  // Magnific popup gallery
  $('.gallery').each(function() {
    $(this).magnificPopup({
      delegate: '.gallery-item',
      type: 'image',
      gallery:{
        enabled:true
      },
      zoom: {
        enabled: true, // By default it's false, so don't forget to enable it

        duration: 300, // duration of the effect, in milliseconds
        easing: 'ease-in-out', // CSS transition easing function

        // The "opener" function should return the element from which popup will be zoomed in
        // and to which popup will be scaled down
        // By defailt it looks for an image tag:
        opener: function(openerElement) {
          // openerElement is the element on which popup was initialized, in this case its <a> tag
          // you don't need to add "opener" option if this code matches your needs, it's defailt one.
          return openerElement.is('img') ? openerElement : openerElement.find('img');
        }
      }
    });
  });

  // Magnific img zoom
  $('.image-popup').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    mainClass: 'mfp-img-mobile',
    image: {
      verticalFit: true
    }
  });

  //Chrome Smooth Scroll
  try {
      $.browserSelector();
      if($("html").hasClass("chrome")) {
          $.smoothScroll();
      }
  } catch(err) {

  };

  // advantages row
  $('.advantages__block').matchHeight();

  // About carousel
  $('.about__carousel ul').owlCarousel({
    items: 1,
    loop: true,
    nav: false,
    dots: true,
    // autoplay: true,
    autoplayTimeout: 3000,
    autoWidth: false,
    autoplayHoverPause: true
  });
  $('.certificate__carousel ul').owlCarousel({
    items: 1,
    // loop: true,
    nav: false,
    dots: true,
    // autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true
  });
  $('.helpful__carousel ul').owlCarousel({
    items: 1,
    // loop: true,
    nav: false,
    dots: true,
    // autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true
  });
  $('.img__slider ul').owlCarousel({
    items: 1,
    loop: true,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true
  });

  // popup block
  $('.popup-link').magnificPopup({
    type:'inline',
    midClick: true,
    closeMarkup: '<button title="%title%" type="button" class="mfp-close mfp-close--text">Закрыть</button>'
  });

  // list
  $('.ol-list li').each(function(){
    $(this).prepend('<span class="span">' + ($(this).index() + 1) + '</span>');
  });
  $('.ul-list li').each(function(){
    $(this).prepend('<i class="ion-checkmark-circled"></i>');
  });

  // simpleForm
  simpleForm('form.form-callback');
})

$(window).load(function() {
  // $(".loader_inner").fadeOut();
  $(".loader").delay(400).fadeOut("slow");
});

/*
version 2015-09-23 14:30 GMT +2
*/
function simpleForm(form, callback) {
     $(document).on('submit', form, function(e){
        e.preventDefault();

        var formData = {};

        var hasFile = false;

        if ($(this).find('[type=file]').length < 1) {
            formData = $(this).serialize();
        }
        else {
            formData = new FormData();
            $(this).find('[name]').each(function(){

                switch($(this).prop('type')) {

                    case 'file':
                        if ($(this)[0]['files'].length > 0) {
                            formData.append($(this).prop('name'), $(this)[0]['files'][0]);
                            hasFile = true;
                        }
                        break;

                    case 'radio':
                    case 'checkbox':
                        if (!$(this).prop('checked')) {
                            break;
                        }
                        formData.append($(this).prop('name'), $(this).val().toString());
                        break;

                    default:
                        formData.append($(this).prop('name'), $(this).val().toString());
                        break;
                }
            });
        }

        $.ajax({
            url: $(this).prop('action'),
            data: formData,
            type: 'POST',
            contentType : hasFile ? 'multipart/form-data' : 'application/x-www-form-urlencoded',
            cache       : false,
            processData : false,
            success: function(response) {
                $(form).removeClass('ajax-waiting');
                $(form).html($(response).find(form).html());

                if (typeof callback === 'function') {
                    callback(response);
                }
            }
        });

        $(form).addClass('ajax-waiting');

        return false;
    });
}

// Catalog Navigation mobile resize
function catalogNavigation(){
  var width = $(window).width();
  /*var dropdownLength = $('#catalogNavDesctop .dropdown').length;
  var accordionPanel = $('#catalogNavMobile .panel').length;
  console.log(dropdownLength);
  console.log(accordionPanel);*/

  if (width <= 991 && width > 767 ) {
    $('#catalogNavDesctop .dropdown').slice(3).hide();
    $('#catalogNavMobile .panel').slice(0,3).hide();
  }
  else if (width < 767 ) {
    $('#catalogNavMobile .panel').show();
  }
  else if (width > 991 ) {
    $('#catalogNavDesctop .dropdown').show();
    $('#catalogNavMobile .panel').show();
  }
}

$(window).resize(catalogNavigation);
$(window).ready(catalogNavigation);
