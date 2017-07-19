$(function() {    $('a[href="#"]').click(function(e){ e.preventDefault(); });    /*! http://johnpolacek.github.io/imagefill.js/ */    // $('.item').imagefill();    /*! http://www.jacklmoore.com/autosize/ */    autosize($('textarea'));    /*! https://select2.github.io/ */    //$('select').select2({    //  minimumResultsForSearch: Infinity    //});    /*! Inputs mask*/    function inputMask() {      $(".mask-date").mask("99.99.9999",{placeholder:"__.__.____"});      $(".mask-year").mask("9999",{placeholder:""});      $(".mask-tel").mask("+7 (999) 999-99-99",{placeholder:"X"});    };    inputMask();    function sticky_footer() {      var bumpIt = function() {        $('body').css('margin-bottom', $('.m_footer').outerHeight());      }, didResize = false;      bumpIt();      $(window).resize(function() {        didResize = true;      });      setInterval(function() {        if(didResize) {          didResize = false;          bumpIt();        }      }, 250);    }    $(window).load(sticky_footer);    // sticky_footer();    function expansion_panel() {      $('.expansion-panel li .ep-header').on('click', function(){        $(this).next().slideToggle(300);        $(this).toggleClass('is-open');      });    }    expansion_panel();    function ripples_effect() {      var ink, d, x, y;      $(".ripple").click(function(e){        if($(this).find(".ink").length === 0){            $(this).prepend("<span class='ink'></span>");        }        ink = $(this).find(".ink");        ink.removeClass("animate");        if(!ink.height() && !ink.width()){            d = Math.max($(this).outerWidth(), $(this).outerHeight());            ink.css({height: d, width: d});        }        x = e.pageX - $(this).offset().left - ink.width()/2;        y = e.pageY - $(this).offset().top - ink.height()/2;        ink.css({top: y+'px', left: x+'px'}).addClass("animate");      });    }    ripples_effect();    function modals() {      $('.btn-modal').magnificPopup({        type: 'inline',        fixedContentPos: false,        fixedBgPos: true,        overflowY: 'auto',        closeBtnInside: true,        preloader: false,        midClick: true,        removalDelay: 300,        mainClass: 'my-mfp-zoom-in',        callbacks: {          open: function() {            $('#modal-callback').on('submit', function(){              $.magnificPopup.close();              setTimeout(function(){                $('#modal-ty-call').trigger('click');              }, 400);              return false;            });          }        }      });    }    modals();    function responsive_table() {      $('table').wrap('<div class="responsive-table" />');    }    responsive_table();    function backdrop_close() {      var $backdrop = $('.backdrop');      $backdrop.on('click', function(){        $(this).fadeOut('150');        $('.m_sidebar-panel').removeClass('is-open');        $('body').css('overflow', 'auto');      });    }    backdrop_close();    function terms() {      $('form').each(function(){        var $this = $(this);        var terms_status = $this.find('input[name=terms]').prop('checked');        if ( terms_status == false ) {          $this.find('button[type=submit]').prop('disabled', true);        } else {          $this.find('button[type=submit]').prop('disabled', false);        }      });      $('input[name=terms]').on('change', function(){        var terms_status = $(this).prop('checked');        if ( terms_status == false ) {          $(this).parents('form').find('button[type=submit]').prop('disabled', true);        } else {          $(this).parents('form').find('button[type=submit]').prop('disabled', false);        }      });    }    terms();    if ( $('#map').length ) {      ymaps.ready(function () {          var settingsMarker = {              iconLayout: 'default#image',              iconImageHref: 'images/marker.png',              iconImageSize: [117, 136],              iconImageOffset: [-62, -119]          };          var settingsBaloon = { hintContent: '', balloonContent: '' };          var coord_1 = [60.016186, 30.310793];          var coord_2 = [55.75396, 37.620393];          var coord_3 = [56.838607, 60.605514];          var myMap = new ymaps.Map('map', {              center: coord_1,              zoom: 14,              controls: ['zoomControl']          }, { searchControlProvider: 'yandex#search'} ),          myPlacemark_1 = new ymaps.Placemark(coord_1, settingsBaloon, settingsMarker);          myPlacemark_2 = new ymaps.Placemark(coord_2, settingsBaloon, settingsMarker);          myPlacemark_3 = new ymaps.Placemark(coord_3, settingsBaloon, settingsMarker);          myMap.geoObjects.add(myPlacemark_1);          myMap.geoObjects.add(myPlacemark_2);          myMap.geoObjects.add(myPlacemark_3);          myMap.behaviors.disable('scrollZoom');          // Set center on click          $('select').selectric({              disableOnMobile: false,              nativeOnMobile: false,              responsive: true          });          $('select').selectric().on('change', function() {              var eq = $(this).val();              $('.body .place').removeClass('current');              $('.body .place').eq(eq-1).addClass('current');              if ( eq == 1 ) { myMap.setCenter(coord_1, 14); }              if ( eq == 2 ) { myMap.setCenter(coord_2, 14); }              if ( eq == 3 ) { myMap.setCenter(coord_3, 14); }          });          $('.toggle-map a').on('click', function(){            $('.ballons').toggleClass('is-hidden');            $(this).text(function(i, text){              return text === "Показать только карту" ? "Показать всё" : "Показать только карту";            });          });      });    }    function picNav() {      var $item = $('.m_picture-nav .item');      var w = $item.width();      $item.height(w);    }    picNav();    $(window).resize(picNav);    function faqSort() {      $('.m_faq-nav a').on('click', function(){        if ( $(this).hasClass('current') ) {          $(this).removeClass('current');          $('.expansion-panel li').removeClass('is-filtred is-active');        } else {          $('.m_faq-nav a').removeClass('current');          $(this).addClass('current');          var type = $(this).attr('data-faq');          $('.expansion-panel li').addClass('is-filtred');          $('.expansion-panel li').each(function(){            if ( $(this).attr('data-faq') == type ) {              $(this).addClass('is-active');            } else {              $(this).removeClass('is-active');            }          });        }      });    }    faqSort();    $('.m_form-article .attach-file input').on('change', function(){      if ( $(this).val() != ''  ) {        var filename = $(this).val().replace(/C:\\fakepath\\/i, '');        $(this).parent().find('.btn-txt').text(filename);      } else {        $(this).parent().find('.btn-txt').text('Файл не найден')      }    });    // $().prettyEmbed({ useFitVids: true });    $('#videox').prettyEmbed({      videoID: '_0n4zqENHM8',      previewSize: 'hd',      // useFitVids: true,      showControls: false,      showInfo: false,      customPreviewImage: 'images/video-frame.png'    });    function signup() {      // Select      $('.signup-form select').selectric({          disableOnMobile: false,          nativeOnMobile: false,          responsive: true      });      var SELECT_CAR_REQUIRED = 0;      var SELECT_CAR_FILLED = 0;      $('#singup-form select').each(function(){        if ( $(this).attr('required') ) {          SELECT_CAR_REQUIRED++;        }      });      $('.signup-form select').selectric().on('change', function() {          var eq = $(this).val();          SELECT_CAR_FILLED++;          if ( SELECT_CAR_FILLED == SELECT_CAR_REQUIRED) {            $('.step-1 .sub-step').eq(2).addClass('is-open');          }      });      // Check sub step      var INPUT_DRIVER_REQUIRED = 0;      var INPUT_DRIVER_FILLED = 0;      $('#singup-form .input-driver').each(function(){        if ( $(this).attr('required') ) {          INPUT_DRIVER_REQUIRED++;        }      });      function checkNextStep() {        if ( INPUT_DRIVER_FILLED == INPUT_DRIVER_REQUIRED) {          $('.step-1 .sub-step').eq(1).addClass('is-open');        }      }      $('#singup-form .input-driver[type=email]').on('change', function(e){        if ( $(this).val() != '' ) {          INPUT_DRIVER_FILLED++;        } else {          INPUT_DRIVER_FILLED--;        }      });      $('#singup-form .input-driver[type=email]').on('keyup', function(e){        var $email = this.value;        validateEmail($email);        function validateEmail(email) {            var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;            if (!emailReg.test(email)) {                return false;            } else {                INPUT_DRIVER_FILLED++;            }        }        checkNextStep();      });      function step1status() {        var REDIRECT_TO_UPLOAD_PAGE = $('input[name="docs"]:checked').val();        if ( REDIRECT_TO_UPLOAD_PAGE == '1' ) {          $('.docs').parents('.sub-step').find('.step-final button').attr('data-next', 'upload');        } else {          $('.docs').parents('.sub-step').find('.step-final button').attr('data-next', 'final');        }      }      step1status();      $('input[name="docs"]').on('change', function(){          step1status();      });      $('#step-1-submit').on('click', function(){        if ( $(this).attr('data-next') == 'upload' ) {           window.location.href='signup-service-2.html';           return false;        } else {          $('#modal-manager-call').trigger('click');          return false;        }      });      $('.signup-form .step-2 button[type=submit]').on('click', function(){        $('#modal-success-signup-call').trigger('click');        return false;      });    }    signup();    /// dropzone    'use strict';    // Change this to the location of your server-side upload handler:    var url = window.location.hostname === 'blueimp.github.io' ?                '//jquery-file-upload.appspot.com/' : 'server/php/',        uploadButton = $('<button/>')            .addClass('btn btn-primary')            .prop('disabled', true)            .text('Processing...')            .on('click', function () {                var $this = $(this),                    data = $this.data();                $this                    .off('click')                    .text('Abort')                    .on('click', function () {                        $this.remove();                        data.abort();                    });                data.submit().always(function () {                    $this.remove();                });            });    $('.fileupload').fileupload({        url: url,        dataType: 'json',        autoUpload: true,        acceptFileTypes: /(\.|\/)(gif|jpe?g|png|pdf)$/i,        maxFileSize: 999000,        dropZone: $('.dropzone'),        // Enable image resizing, except for Android and Opera,        // which actually support image resizing, but fail to        // send Blob objects via XHR requests:        disableImageResize: /Android(?!.*Chrome)|Opera/            .test(window.navigator.userAgent),        previewMaxWidth: 100,        previewMaxHeight: 100,        previewCrop: true    }).on('fileuploadadd', function (e, data) {        var this_files = $(this).parents('.upload-item').find('.files');        data.context = $('<div class="attached-file" />').appendTo(this_files);        var min_files = $(this).attr('data-min-files');        var files_uploaded = this_files.find('.attached-file').length;        $(this).next().fadeIn('300').html(files_uploaded+'/'+min_files);        if ( min_files == files_uploaded) {          $(this).parents('.sub-step').next().addClass('is-open');        }        $.each(data.files, function (index, file) {            var node = $('<p/>')                    .append($('<span/>').html("<i>Добавлено: </i>" +file.name));            if (!index) {                node                    .append('<br>');            }            node.appendTo(data.context);        });    }).on('fileuploadprocessalways', function (e, data) {        var index = data.index,            file = data.files[index],            node = $(data.context.children()[index]);        if (file.preview) {            node                .prepend('<br>')                .prepend(file.preview);        }        if (file.error) {            node                .append('<br>')                .append($('<span class="text-danger"/>').text(file.error));        }        if (index + 1 === data.files.length) {            data.context.find('button')                .text('Upload')                .prop('disabled', !!data.files.error);        }    }).on('fileuploadprogressall', function (e, data) {        var progress = parseInt(data.loaded / data.total * 100, 10);        $('.progress .progress-bar').css(            'width',            progress + '%'        );    }).on('fileuploaddone', function (e, data) {        $.each(data.result.files, function (index, file) {            if (file.url) {                var link = $('<a>')                    .attr('target', '_blank')                    .prop('href', file.url);                $(data.context.children()[index])                    .wrap(link);            } else if (file.error) {                var error = $('<span class="text-danger"/>').text(file.error);                $(data.context.children()[index])                    .append('<br>')                    .append(error);            }        });    }).on('fileuploadfail', function (e, data) {        $.each(data.files, function (index) {            var error = $('<span class="text-danger"/>').text('File upload failed.');            $(data.context.children()[index])                .append('<br>')                .append(error);        });    }).prop('disabled', !$.support.fileInput)        .parent().addClass($.support.fileInput ? undefined : 'disabled');    $(document).bind('dragover', function (e) {        var dropZones = $('.dropzone'),            timeout = window.dropZoneTimeout;        if (timeout) {            clearTimeout(timeout);        } else {            dropZones.addClass('in');        }        var hoveredDropZone = $(e.target).closest(dropZones);        dropZones.not(hoveredDropZone).removeClass('hover');        hoveredDropZone.addClass('hover');        window.dropZoneTimeout = setTimeout(function () {            window.dropZoneTimeout = null;            dropZones.removeClass('in hover');        }, 100);    });    /// end dropzone    if ( $('.m_signup').length ) {      window.addEventListener("beforeunload", function (e) {        saveFormData();        (e || window.event).returnValue = null;        return null;      });      function saveFormData() {        console.log('saved');      }    }    function calc() {
      $(".number-only").keydown(function (e) {
        // Allow: backspace, delete, tab, escape, enter and .
        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
             // Allow: Ctrl+A, Command+A
            (e.keyCode === 65 && (e.ctrlKey === true || e.metaKey === true)) ||
             // Allow: home, end, left, right, down, up
            (e.keyCode >= 35 && e.keyCode <= 40)) {
                 // let it happen, don't do anything
                 return;
        }
        // Ensure that it is a number and stop the keypress
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
        }
      });
      $('.cash').number( true, 0, '.', ' ' );
      $('.percentage').on('keyup', function(){
        if ( $(this).val() > 100 ) {
          $(this).val(100);
        }
      });
      $(".number-only").on('keyup', function(){
        initialCalc();
        if ( $('.value-profit').text() == diff ) {
          console.log('equal');
        } else {
          setTimeout(function(){
            $('.value-profit').animateNumber({number: diff},250, function(){
              $('.value-profit').number( true, 0, '.', ' ' );
            });
            return false;
          }, 10);
        }
      });
    };
    calc();
    function initialCalc() {
      var day = $('#val-days').val();
      var refill = $('#val-refill').val();
      var profit = $('#val-profit').val();
      var com1 = $('#val-commission-1').val();
      var com2 = $('#val-commission-2').val();
      value1 = Math.round(((profit-(profit*(com1/100)))-(refill))*day);
      $('.value-1').text(value1);
      $('.value-1').number( true, 0, '.', ' ' );
      var rival = $('.value-2').attr('data-rival');
      value2 = Math.round(((profit-(profit*((com1/100)+(com2/100))))-(refill*1.13-(refill*(rival/100))))*day);
      $('.value-2').text(value2);
      $('.value-2').number( true, 0, '.', ' ' );
      diff = value1 - value2;
    };
    initialCalc();
    function initialCalcLoad() {
      $('.value-profit').text(diff);
      $('.value-profit').number( true, 0, '.', ' ' );
    };
    initialCalcLoad();
    function popups() {
      // Form
      $('.popup-form').magnificPopup({
        type: 'inline',
        fixedContentPos: false,
        fixedBgPos: true,
        overflowY: 'auto',
        closeBtnInside: true,
        preloader: false,
        midClick: true,
        removalDelay: 300,
        mainClass: 'my-mfp-slide-bottom'
      });
      // Validate Form
      $('.form-modal').each(function(){
        var $this = $(this);
        $this.submit(function(e){
          var isFormValid = true;
          $(this).find('.required').each(function(){
              if ($.trim($(this).val()).length == 0){
                  $(this).addClass("highlight");
                  isFormValid = false;
              }
              else{
                  $(this).removeClass("highlight");
              }
          });
          if ( isFormValid == true ) {
            $('.popup-form').magnificPopup('close');
            setTimeout(function(){
              $('.thanks').trigger('click');
            }, 300);
          }
          e.preventDefault();
        })
      });
    };
    popups();
    function headerFixed() {      var $header_top = $('.m_header .top').height();      $(window).scroll(function(){        if ($(this).scrollTop() > $header_top) {            $('.m_header').addClass('fixed');        } else {            $('.m_header').removeClass('fixed');        }      });    }    headerFixed();    $(window).resize(headerFixed);    function headerSearch() {      $('.search-toggle').on('click', function(){        var $form = $(this).next();        $form.fadeIn('200', function(){          $form.find('input').focus();        });      });      $('.search-toggle').next('form').find('input').on('blur', function(){        $(this).parent().fadeOut('50');      });    }    headerSearch();    function locateCheck() {      $('.locate-check button').on('click', function(){        $('.locate-check').slideUp('500');        return false;      });      $('#locate-change').on('click', function(){        $('.locate-check').slideUp('500');        return false;      });      $('#modal-locate .etc > a').on('click', function(){        $(this).next().show();        $(this).parent().css({'width': '100%'});        $(this).hide();      });      $('#modal-locate a').not('.etc > a').on('click', function(){        var input = $('#set-locate');        input.val('');        input.val($(this).text());      });      $('.locate-result .value a').on('click', function(){        $('#locate-change').trigger('click');        $('body').css({'overflow': 'auto'});      });    }    locateCheck();
    function circlePictures() {      $('.circle .item .icon').on('click', function(){        $('.circle .round-text').html($(this).attr('data-circle-message'));      });    }    circlePictures();
    function sidebarPanel() {      var $panel = $('.m_sidebar-panel');      var VIEWPORT_HEIGHT = $(window).height();      $panel.find('.scroll').height(VIEWPORT_HEIGHT);    }    sidebarPanel();    $(window).resize(sidebarPanel);    function sidebarPanelOpen() {      $('.m_header .main-menu .btn-burger').on('click', function(){        var $top = $(window).scrollTop();        var $panel = $('.m_sidebar-panel');        $panel.find('.scroll').css({'top':$top});        $('.backdrop').fadeIn('150');        $panel.addClass('is-open');        $('body').css('overflow', 'hidden');      });    }    sidebarPanelOpen();    function sidebarPanelClose() {      $('.m_sidebar-panel .btn-burger').on('click', function(){        $('.m_sidebar-panel').removeClass('is-open');        $('.backdrop').fadeOut('150');        $('body').css('overflow', 'auto');      });    }    sidebarPanelClose();});