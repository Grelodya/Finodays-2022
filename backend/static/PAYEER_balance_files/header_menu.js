$(document).ready(function()
{
   $('.actions-list .perfect-scroll-notifications').hover(function()
   {
      if (!$(this).hasClass('ps--active-y'))
      {
         new PerfectScrollbar('.perfect-scroll-notifications');
         $('.perfect-scroll-notifications').scrollTop(0);
      }
   });

   $('.actions > ul > li').hover(function()
   {
      $(this).children('div').show().addClass('show');
   }, function()
   {
      $(this).children('div').hide().removeClass('show');
   });

  function showActionsContainer() {
    var $buttons = $('.actions > ul > li:not(.actions-logout) > button');

    $buttons.each(function() {
        var $button = $(this);
        var $container = $button.next();


        $button.on('click', function(){
            if($button.hasClass('current')) {
                $button.removeClass('current');
                $container.removeClass('show');
                setTimeout(function() {
                    $container.hide();
                }, 350);
            } else {
                $buttons.removeClass('current');
                $buttons.next().removeClass('show');
                $buttons.next().hide();

                $button.addClass('current');
                $container.show();
                setTimeout(function() {
                    $container.addClass('show');
                }, 100);
            }
        });

         /*
         $container.on('mouseleave', function()
         {
            $buttons.removeClass('current');
            $buttons.next().removeClass('show');
            $buttons.next().hide();
         });
         */
    });

    $('body').on('click', function(e){
        var clickedOutside = $(e.target).closest('.actions').length;

        if (clickedOutside === 0) {
            $buttons.removeClass('current');
            $buttons.next().removeClass('show');
            setTimeout(function() {
                $buttons.next().hide();
            }, 350);
        }
    });
  }
  showActionsContainer();

  /*
  function changeTheme() {
    $('.actions-theme').on('click', 'a', function(e) {
        e.preventDefault();

        var $links = $('.actions-theme a');
        var $link = $(this);
        var theme = $link.attr('href');

        $links.removeClass('selected');
        $link.addClass('selected');

        if (theme === '#night') {
            $('body').addClass('night');
        } else {
            $('body').removeClass('night');
        }
    });
  }
  changeTheme();
  */

  function walletOverlay() {
        $('#btn-amount').on('click', function() {
            var $button = $(this);
            var $overlay = $('.header-overlay');
            var $content = $('.content');
            var $statusinfo = $overlay.find('.statusinfo');

            $statusinfo.hide();

            if ($button.hasClass('show')) {
                $button.removeClass('show');
                $overlay.removeClass('show');
                $content.removeClass('blur');
                setTimeout(function() {
                    $overlay.find('.wallet').hide();
                }, 350);
            } else {
                $button.addClass('show');
                $overlay.addClass('show');
                $overlay.find('.wallet').show();
                $content.addClass('blur');
            }
        });

        $('body').on('click', function(e) {

            var $target = $(e.target);
            var $button = $('#btn-amount');
            var $overlay = $('.header-overlay');
            var $content = $('.content');
            var isOverlay = $target.closest('.header-overlay').length;
            var isButton = $target.closest('.header-total').length;

            if (isOverlay === 0 && isButton === 0) {
                $button.removeClass('show');
                $overlay.removeClass('show');
                $content.removeClass('blur');

                $overlay.find('.wallet').hide();
                $overlay.find('.statusinfo').hide();
                /*
                setTimeout(function() {
                    $overlay.find('.wallet').hide();
                    $overlay.find('.statusinfo').hide();
                }, 350);
                */
            }

        });
    }
    walletOverlay();
});
