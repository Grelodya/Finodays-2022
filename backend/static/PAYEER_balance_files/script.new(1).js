$(document).ready(function()
{
   $('.account_balance_new .balance__icon-currency a').bind('mouseenter mouseleave click', function(e){
      var curr = $(this).data('curr');

      itogCurr = curr;
      if(e.type == 'click')
      {
         defItogCurr = curr;
      }
      else if(e.type == 'mouseleave')
      {
         itogCurr = defItogCurr;
      }

      afterBalanceUpdate('#', itogBalance);
   });
});
