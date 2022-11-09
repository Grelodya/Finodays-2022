var tmWinErrorAutoClose;

$(document).ready(function()
{

});

$(document).on('pjax:complete', function()
{
	$('.actions-container.show').removeClass('show').hide().prev('button').removeClass('current');
});

function MathRound(value, precision)
{
   return Math.round(value * Math.pow(10, precision)) / Math.pow(10, precision);
}

function MathFloor(value, precision)
{
   return Math.floor(value * Math.pow(10, precision)) / Math.pow(10, precision);
}

function MathCeil(value, precision)
{
   return Math.ceil( (value * Math.pow(10, precision)).toFixed(8) ) / Math.pow(10, precision);
}

function RemoveZeros(value)
{
   value = value.replace(/([0]+)$/, '').replace(/\.$/g, '');
   return value;
}


function ajaxFormSubmitNew(e, f)
{
	if (f == undefined) f = 'message';

	if ($(e + ' input[name=block]').val() == 0)
	{
		$(e).ajaxSubmit(
		{
			cache: false,
			dataType: 'json',
			beforeSubmit: function(arr)
			{
				NProgress.start();

				$(e + ' input[name=block]').val('1');
				$(e + ' span.error').html('');
				$(e + ' input.error, ' + e + ' textarea.error').removeClass('error');
				$(e + ' div.error').addClass('hide').html('');
				$(e + ' div.result').addClass('hide').html('');
			},
			success: function(data)
			{
				NProgress.done();

				$(e + ' input[name=block]').val('0');
				$(e + ' input[name=master_key]').val('');

				if (data.captcha)
				{
					$(e + ' *[name=captcha_code]').val('');
					$(e + ' *[name=captcha_sid]').val(data.captcha);
					$(e + ' img.captcha').attr('src', '/bitrix/tools/captcha.php?captcha_sid=' + data.captcha);
				}

				if (data.error.length > 0)
				{
					//console.log(data.error);
					var scr = true;

					for (var key in data.error)
					{
						if (data.error[key]['field'] != '')
						{
							switch (data.error[key]['field'])
							{
								case 'master_key':
									ajaxMasterKey(e);

									scr = false;
								break;

								default:
									$(e + ' *[name=' + data.error[key]['field'] + ']').addClass('error');
							}
						}

						if (data.error[key]['value'] != '')
						{
							//if (data.error[key]['field'] != '')
							if ($(e + ' *[name=' + data.error[key]['field'] + ']').length)
							{
								if ($(e + ' *[name=' + data.error[key]['field'] + ']').prev('span.error'))
								{
									$(e + ' *[name=' + data.error[key]['field'] + ']').prev('span.error').html(data.error[key]['value']);
								}

								if ($(e + ' *[name=' + data.error[key]['field'] + ']').next('span.error'))
								{
									$(e + ' *[name=' + data.error[key]['field'] + ']').next('span.error').html(data.error[key]['value']);
								}
							}
							else
							{
								//$(e + ' div.error').removeClass('hide').append('<div class="note_txt">' + data.error[key]['value'] + '</div>');

		                        $('.header-overlay .statusinfo .statusinfo-icon > span').attr('class', '').addClass('icon-denied');

		                        $('.header-overlay .statusinfo .statusinfo-title').html(data['winData']['title']);
		                        $('.header-overlay .statusinfo .statusinfo-direction').html(data['winData']['direction']);
		                        $('.header-overlay .statusinfo .statusinfo-descr').html(data.error[key]['value']);

		                        $('.header-overlay').addClass('show').find('.statusinfo').show();
		                        $('.content').addClass('blur');

								winErrorAutoClose();

                        		break;
							}
						}
					}

					if (data['errorFunction'] != undefined)
					{
						window[data['errorFunction']](e, data);
					}

					if (scr)
					{
						myScrollTo(e);
					}
				}
				else
				{
					//console.log(data.error);

					switch (f)
					{
						case 'message':
							$(e + ' div.result').removeClass('hide').html('<div class="note_txt">' + data.result + '</div>');
							myScrollTo(e);
						break;

						default:
							window[f](e, data);
					}
				}

				if (window['langAdminInit']) langAdminInit();
			},
			error: function(xhr)
			{
				NProgress.done();
				$(e + ' input[name=block]').val('0');

				if (xhr.getResponseHeader("X-iCore-Auth") == "1")
				{
					antdds(xhr.responseText);
				}
			}
		});
	}
}


function winErrorAutoClose()
{
	clearTimeout(tmWinErrorAutoClose);

	tmWinErrorAutoClose = setTimeout(function()
	{
		var $overlay = $('.header-overlay');
      var $content = $('.content');
      var $statusinfo = $overlay.find('.statusinfo');

      $overlay.removeClass('show');
      $content.removeClass('blur');

      $statusinfo.hide();
	}, 5000);
}


function oneSelect(selectClass)
{
	var opCount = $(selectClass).find('option:enabled').length;

	if(opCount <= 1)
	{
		$(selectClass).parent().removeClass('jq-selectbox');
		$(selectClass).parent().find('.jq-selectbox__trigger-arrow').remove();
		$(selectClass).parent().find('.jq-selectbox__trigger').remove();
		$(selectClass).parent().find('.jq-selectbox__dropdown').remove();
	}
}

function isMobile(userAgent) {
	return (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(userAgent));
}
