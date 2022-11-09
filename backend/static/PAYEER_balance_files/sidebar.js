$(document).ready(function() {
  function closeSidebar() {
    $('#btn-sidebar').on('click', function() {
         if($(window).width() < 1480
         && !$(".col--sidebar").hasClass("small-display-menu"))
         {
             $('.col--sidebar').addClass('small-display-menu');
             if(!$(".col--sidebar").hasClass("slim"))
               return true;
         } else {
              $('.col--sidebar').removeClass('small-display-menu');
         }
        $(this).parent().toggleClass('slim');
        $('.header-logo img').toggleClass('slim');
        $('.header-logo .icon-payeer').toggleClass('slim');
        $('.col--sidebar').toggleClass('slim');

        setTimeout(setTableHeaderWidth, 400);
    });
  }
  closeSidebar();
});
