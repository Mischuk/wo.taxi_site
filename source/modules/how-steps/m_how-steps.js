function circlePictures() {
  $('.circle .item .icon, .circle .item .label').on('click', function(){
    var $this = $(this).parent();
    if ( $('.circle').hasClass('disabled') ) {
      return false;
    } else {
      $('.circle').addClass('disabled');

      $('.round-inner').addClass('anim-in');

      setTimeout(function(){
        $('.round-inner').addClass('anim-in-content');
        $('.circle .round-text').html($this.find('.icon').attr('data-circle-message'));
        $('.circle .round-image img').attr('src', $this.find('.icon').attr('data-circle-image'));
      },1000);

      setTimeout(function(){
        $('.round-inner').removeClass('anim-in');
        $('.circle').removeClass('disabled');
        $('.round-inner').removeClass('anim-in-content');
      },2000);
    }
  });


  $('.circle .item .icon, .circle .item .label').mouseenter(function() {
      $('.circle .item').addClass('blur');
      $(this).parent().removeClass('blur');
  }).mouseleave(function() {
      $('.circle .item').removeClass('blur');
  });
}
circlePictures();


var waypoints = $('.m_how-steps').waypoint(function(direction) {
  console.log('.m_how-steps');
  $('.arcs, .m_how-steps .circle .list .item').addClass('anim-in');
}, {
  offset: '50%'
})