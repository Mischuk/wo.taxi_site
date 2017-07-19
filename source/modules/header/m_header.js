function headerFixed() {
  var $header_top = $('.m_header .top').height();

  $(window).scroll(function(){
    if ($(this).scrollTop() > $header_top) {
        $('.m_header').addClass('fixed');
    } else {
        $('.m_header').removeClass('fixed');
    }
  });
}
headerFixed();

$(window).resize(headerFixed);

function headerSearch() {
  $('.search-toggle').on('click', function(){
    var $form = $(this).next();
    $form.fadeIn('200', function(){
      $form.find('input').focus();
    });
  });

  $('.search-toggle').next('form').find('input').on('blur', function(){
    $(this).parent().fadeOut('50');
  });
}
headerSearch();


function locateCheck() {
  $('.locate-check button').on('click', function(){
    $('.locate-check').slideUp('500');
    return false;
  });

  $('#locate-change').on('click', function(){
    $('.locate-check').slideUp('500');
    return false;
  });

  $('#modal-locate .etc > a').on('click', function(){
    $(this).next().show();
    $(this).parent().css({'width': '100%'});
    $(this).hide();
  });

  $('#modal-locate a').not('.etc > a').on('click', function(){
    var input = $('#set-locate');
    input.val('');
    input.val($(this).text());
  });

  $('.locate-result .value a').on('click', function(){
    $('#locate-change').trigger('click');
    $('body').css({'overflow': 'auto'});
  });
}
locateCheck();