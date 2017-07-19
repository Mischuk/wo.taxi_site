function sidebarPanel() {
  var $panel = $('.m_sidebar-panel');
  var VIEWPORT_HEIGHT = $(window).height();
  $panel.find('.scroll').height(VIEWPORT_HEIGHT);
}

sidebarPanel();
$(window).resize(sidebarPanel);

function sidebarPanelOpen() {
  $('.m_header .main-menu .btn-burger').on('click', function(){
    var $top = $(window).scrollTop();
    var $panel = $('.m_sidebar-panel');
    $panel.find('.scroll').css({'top':$top});

    $('.backdrop').fadeIn('150');
    $panel.addClass('is-open');

    $('body').css('overflow', 'hidden');
  });
}
sidebarPanelOpen();

function sidebarPanelClose() {
  $('.m_sidebar-panel .btn-burger').on('click', function(){
    $('.m_sidebar-panel').removeClass('is-open');
    $('.backdrop').fadeOut('150');
    $('body').css('overflow', 'auto');
  });
}
sidebarPanelClose();