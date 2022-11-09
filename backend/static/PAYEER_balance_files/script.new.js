$(document).ready(function()
{
	$('div.menu ul li a').click(function()
	{
		$('div.menu ul li a').removeClass('current');
		$(this).addClass('current');
	});
});
