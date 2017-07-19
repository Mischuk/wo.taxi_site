function circlePictures() {
  $('.circle .item .icon').on('click', function(){
    $('.circle .round-text').html($(this).attr('data-circle-message'));
  });
}
circlePictures();