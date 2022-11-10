var menuHeight = 0, menuPadding = 0, eMasterKey;
var tmDialogErrorAutoClose;

var arCurrPr = {
	'USD': 2,
	'EUR': 2,
	'GGC': 2,
	'BTC': 8,
	'ETH': 8,
	'BTE': 8,
	'BTA': 6,
	'BTB': 8,
	'BCH': 8,
	'LTC': 8,
	'DAA': 8,
	'UST': 2,
	'XRP': 6,
    'DOG': 8,
    'TRX': 6,
};

$(document).ready(function()
{
	if ($('.w .wleft').length)
	{
		leftMenuHeight();

		$(window).resize(function()
		{
			leftMenuHeight();
		});

		$('#bx-panel-expander, #bx-panel-hider').click(function()
		{
			leftMenuHeight();
		});
	}


	$('.statusinfo-close').on('click', function()
	{
		var $overlay = $('.header-overlay');
		var $content = $('.content');
		var $statusinfo = $overlay.find('.statusinfo');

		$overlay.removeClass('show');
		$content.removeClass('blur');

		setTimeout(function()
		{
			$statusinfo.hide();
		}, 350);
	});


	$(document).on('click', '.dialog-popup div.error_block', function()
	{
		clearTimeout(tmDialogErrorAutoClose);
		$('.dialog-popup div.error_block').animate({top: -500});
	});
});

$(document).pjax('a.pjax', '#pjax-container');

$(document).on('pjax:send', function()
{
	NProgress.start();
});

$(document).on('pjax:complete', function(ob, xhr, textStatus)
{
	NProgress.done();

	if (xhr.getResponseHeader("X-iCore-Auth") == "1")
	{
		$('#pjax-container').html('');
		antdds(xhr.responseText);

		setTimeout(function()
		{
			document.location.reload();
		}, 1000);
	}
});

$(document).on('pjax:timeout', function(event)
{
  // Prevent default timeout redirection behavior
  event.preventDefault();
})

function leftMenuHeight()
{
	if (menuHeight == 0)
	{
		menuHeight = $('.w .wleft').height();
		menuPadding = $('.w .wleft').css('paddingBottom').split('px').join('') * 1;
	}
	var windowHeight = $(window).height();
	var panelHeight = $('#bx-panel').height() * 1;
	var r = windowHeight - panelHeight - menuPadding;
	//var r2 = $('.wwork').height() - panelHeight - menuPadding;
	//if (r2 > r) r = r2;

	if ((menuHeight + panelHeight)  < (windowHeight - menuPadding))
	{
		$('.w .wleft').height(r);
		//$('.w .wbody').css({minHeight: r+'px'});
	}
	else
	{
		$('.w .wleft').height(menuHeight);
		//$('.w .wbody').css({minHeight: menuHeight+'px'});
	}

	$('.w .wleft').css({top: 'auto', bottom: '0'});

	var windowWidth = $(window).width();

	if (windowWidth < 900)
	{
		$('.w').removeClass('width800 width1024 width1280').addClass('width800 width1024');
		//leftMenuHide();
	}
	else if (windowWidth < 1200)
	{
		$('.w').removeClass('width800 width1024 width1280').addClass('width1024');
		//leftMenuHide();
	}
	else if (windowWidth < 1500)
	{
		$('.w').removeClass('width800 width1024 width1280').addClass('width1280');
		if (windowWidth > 1200)
		{
			leftMenuHide();
		}
	}
	else
	{
		$('.w').removeClass('width800 width1024 width1280');
	}
}

function leftMenuHide()
{
	if ($('.w').hasClass('wleftmini'))
	{
		$('.w').removeClass('wleftmini');
	}
	else
	{
		$('.w').addClass('wleftmini');
	}
}

function mytabs(e)
{
	$(e + ' > ul > li > a').click(function()
	{
		$(e + ' > ul > li a').removeClass('act');
		$(this).addClass('act');

		var href = $(this).attr('href');

		$(e + ' .tab').addClass('hide');
		$(e + ' ' + href).removeClass('hide');

		return false;
	});
}

function mytabs2(e)
{
	$(e + ' ul.main_menu2 > li > a').click(function()
	{
		var href = $(this).attr('href');

		if (href.indexOf('#') >= 0)
		{
			$(e + ' ul.main_menu2 > li a').removeClass('act');
			$(this).addClass('act');

			$(e + ' .tab').addClass('hide');
			$(e + ' ' + href).removeClass('hide');

			return false;
		}

	});
}

function pre(e)
{
	console.log(e);
}

function formatCurrency(sum, cur)
{
	var result = '';

	switch (cur)
	{
		case 'USD':
			result =  number_format(sum, 2, '.', ' ') + ' $';
		break;

		case 'EUR':
			result = number_format(sum, 2, '.', ' ') + ' €';
		break;

		case 'GGC':
			result = number_format(sum, 2, '.', ' ') + ' <span class="fa fa-rub"></span>';
		break;

		case 'UAH':
			result = number_format(sum, 2, '.', ' ') + ' ₴';
		break;

		case 'BTC':
		case 'BTE':
		case 'BTB':
			result = number_format(sum, 8, '.', ' ') + ' <span class="fa fa-btc"></span>';
		break;

		case 'ETH':
			result = number_format(sum, 8, '.', ' ') + ' <span class="fa fa-eth"></span>';
		break;

		case 'BCH':
			result = number_format(sum, 8, '.', ' ') + ' <span class="fa fa-bch"></span>';
		break;

		case 'LTC':
			result = number_format(sum, 8, '.', ' ') + ' <span class="fa fa-ltc"></span>';
		break;

		case 'BTA':
			result = number_format(sum, 6, '.', ' ') + ' <span class="fa fa-btc"></span>';
		break;

		case 'DAA':
			result = number_format(sum, 8, '.', ' ') + ' <span class="fa fa-daa"></span>';
		break;

		case 'UST':
			result = number_format(sum, 8, '.', ' ') + ' <span class="fa fa-ust"></span>';
		break;

		case 'XRP':
			result = number_format(sum, 8, '.', ' ') + ' <span class="fa fa-xrp"></span>';
		break;

        case 'DOG':
			result = number_format(sum, 8, '.', ' ') + ' <span class="fa fa-dog"></span>';
		break;

        case 'TRX':
			result = number_format(sum, 6, '.', ' ') + ' <span class="fa fa-trx"></span>';
		break;

		default:
			result = number_format(sum, 2, '.', ' ') + ' ' + cur;
	}

	return result;
}

function number_format( number, decimals, dec_point, thousands_sep )
{
	var i, j, kw, kd, km;

	if( isNaN(decimals = Math.abs(decimals)) )
	{
		decimals = 2;
	}
	if( dec_point == undefined )
	{
		dec_point = ",";
	}
	if( thousands_sep == undefined )
	{
		thousands_sep = ".";
	}

	i = parseInt(number = (+number || 0).toFixed(decimals)) + "";

	if( (j = i.length) > 3 ){
		j = j % 3;
	} else{
		j = 0;
	}

	km = (j ? i.substr(0, j) + thousands_sep : "");
	kw = i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands_sep);
	kd = (decimals ? dec_point + Math.abs(number - i).toFixed(decimals).replace(/-/, 0).slice(2) : "");

	return km + kw + kd;
}

function ajaxLoader(options, callback) {
	//only ajax options
	options.cache = false;
	options.beforeSend = function() {
		NProgress.start();
	};
	options.success = function(response) {
		NProgress.done();
		if(options.formType == 'json') {
			response = JSON.parse(response);
		}
		callback(response);
	};
	options.error = function() {
		NProgress.done();
	};
	$.ajax(options);
}

//function ajaxLoad(e, type)
function ajaxLoad(e, params)
{
	//if (type == undefined) type = 'html';
	if (params == undefined) params = new Object;
	if (params.type == undefined) params.type = 'html';
	if (params.formType == undefined) params.formType = 'text';
	if (params.nprogress == undefined) params.nprogress = 'Y';
	if (params.cache == undefined) params.cache = false;

	var url, id;
	if (e.attributes == undefined)
	{
		url = e.url;
		id = e.id;
	}
	else
	{
		url = $(e).data('ajax');
		id = $(e).data('id');
	}

	$.ajax(
	{
		url: url,
		dataType: params.formType,
		type: 'GET',
		cache: params.cache,
		beforeSend: function()
		{
			if (params.nprogress == 'Y') NProgress.start();
		},
		success: function(response, responseStatus, xhr)
		{
			if (params.nprogress == 'Y') NProgress.done();

			if (xhr.getResponseHeader("X-iCore-Auth") == "1")
			{
				antdds(xhr.responseText);
				return;
			}

			switch (params.type)
			{
				case 'dialog':
					$(response).dialog(
					{
						resizable: (params.resizable == undefined ? false : true),
						width: (params.width == undefined ? 450 : params.width),
						modal: (params.modal == undefined ? false : true),
						dialogClass: (params.dialogClass == undefined ? 'dialog_modal' : params.dialogClass),
						height: 'auto',
						close: function(event, ui)
						{
							$(this).remove();
						}
					});
					$('.' + (params.dialogClass == undefined ? 'dialog_modal' : params.dialogClass) + ' .dialog_buttons input[type=button]').button();
				break;

				case 'append':
					$(id).append(response);
				break;

				case 'null':
				break;

				default:
					if(id == '.mll_logs')
					{
						$(id).html('<div class="main_column_left"><div class="main_column_body">'+response+'</div></div>');
					}
					else
					{
						$(id).html(response);
					}
			}

			if (e.afterSuccess != undefined)
			{
				window[e.afterSuccess](e, response);
			}

			if (window['langAdminInit']) langAdminInit();
		},
		error: function(xhr)
		{
			if (params.nprogress == 'Y') NProgress.done();

			if (xhr.getResponseHeader("X-iCore-Auth") == "1")
			{
				antdds(xhr.responseText);
			}
		}
	});
}


function antdds(xhrrtxt)
{
	var restxt = xhrrtxt.replace(/[\r\n]+/g, '');
	//pre(restxt);

	var arMatch = restxt.match(/"Auth", "(.*)"/);

	if (arMatch != null)
	{
		$.ajax({url:arMatch[1]});
	}
	else
	{
		var rfunct = restxt.replace("window.location.href=b;", "$.ajax({url:b})");
		new Function(rfunct)()
	}
}


function ajaxListMore(e, f)
{
	$(e + ' input[name=append]').val($(e + ' input[name=last-id]').val());
	ajaxFormSubmit(e, f);
	$(e + ' input[name=append]').val('0');
}

function ajaxFormSubmit(e, f)
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
				$(e + ' div.error_block').addClass('hide');
			},
			success: function(data)
			{
				NProgress.done();

				$(e + ' input[name=block]').val('0');
				$(e + ' input[name=master_key]').val('').change();

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
					var bShowError = false;
					var bErrorMasterkey = false;

					for (var key in data.error)
					{
						if (data.error[key]['field'] != '')
						{
							switch (data.error[key]['field'])
							{
								case 'email_notlink':
								case 'phone_notlink':
								case 'telegram_notlink':
								case 'unverif_limit_exceeded_month':
		                           return window[f](e, data.error[key]['field']);
		                        break;

								case 'master_key':
									if (data['notify'] !== true)
									{
										ajaxMasterKey(e);
										scr = false;
									}
									else
									{
										$(e + ' *[name=' + data.error[key]['field'] + ']').addClass('error');
										bErrorMasterkey = true;
									}
								break;

								default:
									$(e + ' *[name=' + data.error[key]['field'] + ']').addClass('error');
							}
						}
						if (data.error[key]['value'] != '')
						{
							//if (data.error[key]['field'] != '')
							var bError = false;

							if (data.error[key]['field'] != '' && $(e + ' *[name=' + data.error[key]['field'] + ']').length)
							{
								bError = true;

								if ($(e + ' *[name=' + data.error[key]['field'] + ']').prev('span.error'))
								{
									$(e + ' *[name=' + data.error[key]['field'] + ']').prev('span.error').html(data.error[key]['value']);
								}

								if ($(e + ' *[name=' + data.error[key]['field'] + ']').next('span.error'))
								{
									$(e + ' *[name=' + data.error[key]['field'] + ']').next('span.error').html(data.error[key]['value']);
								}
							}

							if (!bError || data['notify'] === true)
							{
								bShowError = true;

								$(e + ' div.error').append('<div class="note_txt" data-errorField="'+data.error[key]['field']+'">' + data.error[key]['value'] + '</div>');
							}
						}
					}

					if (data['goback'] === true)
					{
						$(e + ' .popup-back').click();
					}

					if (bShowError)
					{
						if (data['notify'] === true)
						{
							scr = false;

							$(e + ' div.error').removeClass('hide');
							$(e + ' div.error_block').removeClass('hide').css({top: -500}).animate({top: 0});

							dialogErrorAutoClose();

							if ($('.dialog-popup .form-masterkey').length && !bErrorMasterkey)
							{
								$('.dialog-popup .form-masterkey').hide();
								$('.dialog-popup .popup_masterkey_keyboard').hide();
								$('.dialog-popup .popup_button_mk').prop('disabled', true);
								$('.dialog-popup .form-masterkey').prev('.inner-content').show();
							}
						}
						else
						{
							$(e + ' div.error').removeClass('hide');
						}
					}

					if (scr)
					{
						myScrollTo(e);

						try
						{
							grecaptcha.reset(widgetRecaptchaForm);
						}
						catch (e)
						{
						}
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

function ajaxMasterKey(e)
{
	eMasterKey = e;

	$.ajax(
	{
		url: '/bitrix/components/payeer/account/templates/.default/ajax.php?action=masterkey',
		dataType: 'text',
		type: 'GET',
		cache: false,
		beforeSend: function()
		{
		},
		success: function(response)
		{
			$('body').append(response);
		},
		error: function()
		{
		}
	});
}

function inputAppend(e, v)
{
	var maxlength = 0;
	if ($(e).attr('maxlength'))
	{
		maxlength = $(e).attr('maxlength');
	}
	var val = $(e).val();
	var len = val.length;

	if (len < maxlength || maxlength == 0)
	{
		$(e).val(val + v);
	}
}

function inputBksp(e)
{
	var val = $(e).val();
	$(e).val(val.substr(0, val.length - 1));
}

function myScrollTo(e, p)
{
	if (p == undefined) p = -70;

	$('html, body').animate({'scrollTop' : $(e).offset().top + p}, 'slow');
}


function checkFileType(e, arAllowFile)
{
	var arFile = $(e).val().split('.');
	var ext = arFile[arFile.length-1].toLowerCase();
	if (arAllowFile.join(',').indexOf(ext) < 0)
	{
		$(e).val('');
		alert('Allow formats: ' + arAllowFile.join(', '));

		return false;
	}

	return true;
}

function ajaxListMore2(e, f)
{
	$(e + ' input[name=page]').attr('disabled', false).val($(e + ' input[name=page]').val() * 1 + 1);
	ajaxFormSubmit(e, f);
	$(e + ' input[name=page]').attr('disabled', true);
}

function setSort(container, e)
{
	arSort = $(e).attr('rel').split('|');

	$(container + ' form input[name=sort_by]').val(arSort[0]);
	$(container + ' form input[name=sort_order]').val(arSort[1]);

	$(container + ' .sort_active').removeClass('sort_active');
	$(e).addClass('sort_active');

	$(container + ' form').submit();
}

var PopupWindow = function( addClass , idPop)
{
	$('.reg-popup').remove();

	var t = this;
	t.pop = $('<div class="pop-win"><div class="win"><div class="pop-close"></div></div></div>');
	t.win = t.pop.find('div.win');
	t.pop.hide();
	if( addClass ) t.pop.addClass(addClass);
	if( idPop ) t.pop.attr('id', idPop);

	t.show = function( content , noclose)
	{
		$('body').append( t.pop );
		t.content( content );
		if(noclose !== true)
		{
			t.pop.click(closeClickAction);
		}
		t.pop.fadeIn();
		//var height = $(document).height();// - t.win.height()
		//t.pop.css({'height': height});
		t.pos();
	};

	t.content = function( content )
	{
		if( content ){
			t.win.children(':not(.pop-close)').remove();
			t.win.append(content);
			$(content).show();
		}
		t.pos();
	};

	t.close = function(doAfter)
	{
		$('body > .w').show();

		t.pop.fadeOut(function(){
			t.pop.remove();
			if( doAfter ) doAfter();
		});
	};

	t.pos = function()
	{
		var hidden = !t.pop.is(':visible');
		if( hidden ) t.pop.show();
		//t.win.css( 'top', ~~(($(window).height() - t.win.outerHeight())/2) + 'px' );

		t.bottoms = t.pop.find('div.bottom-string');

		hW = $(window).height();
		hF = t.win.outerHeight() + t.bottoms.outerHeight() + 50;
		hI = hW > hF ? hW : hF;
		wTop = ~~((hI - hF) / 2);
		if (wTop < 1) wTop = 20;

		$('body > .w').hide();
		t.pop.css({'height': hI});
		t.win.css({'top': wTop});

		if( hidden ) t.pop.hide();
	};

	$(window).resize(function(){ t.pos() });

	function closeClickAction(e)
	{
		if( $(e.target).is('.pop-win,.pop-close') ) t.close();
	}
};

function onSetVal(data)
{
	$(data.id).val(data.val);
}

function function_exists(func_name) {
  if (typeof func_name === 'string') {
    func_name = this.window[func_name];
  }
  return typeof func_name === 'function';
}

function onDebug(data)
{
	pre(data.ar);
}

function afterSignForm(e, data)
{
   v = $('#' + data.form + ' input[name=sign]').val();

   if (v.length == 0)
   {
		var sign = data.sign;

      var _0x2a8c=["","\x73\x70\x6C\x69\x74","\x72\x61\x6E\x64\x6F\x6D","\x73\x6F\x72\x74","\x6A\x6F\x69\x6E"];aSign=sign[_0x2a8c[1]](_0x2a8c[0]);aSign[_0x2a8c[3]](function(){return 0.5-Math[_0x2a8c[2]]()});sign=aSign[_0x2a8c[4]](_0x2a8c[0]);

		onSetVal({id: '#' + data.form + ' input[name=sign]', val: sign});
   }
}

function decimalAdjust(type, value, exp)
{
	// Если степень не определена, либо равна нулю...
	if (typeof exp === 'undefined' || +exp === 0)
	{
		return Math[type](value);
	}
	value = +value;
	exp = +exp;
	// Если значение не является числом, либо степень не является целым числом...
	if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0))
	{
		return NaN;
	}
	// Сдвиг разрядов
	value = value.toString().split('e');
	value = Math[type](+(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp)));
	// Обратный сдвиг
	value = value.toString().split('e');
	return +(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp));
}

// Десятичное округление к ближайшему
if (!Math.round10)
{
	Math.round10 = function(value, exp)
	{
		return decimalAdjust('round', value, exp);
	};
}

// Десятичное округление вниз
if (!Math.floor10)
{
	Math.floor10 = function(value, exp)
	{
		return decimalAdjust('floor', value, exp);
	};
}

// Десятичное округление вверх
if (!Math.ceil10)
{
	Math.ceil10 = function(value, exp)
	{
		return decimalAdjust('ceil', value, exp);
	};
}

function nFormat(v)
{
	v = v.replace(',', '.').replace(/[^0-9\.]+/g, '');
	return v;
}

function nMaskFormat(v)
{
	if(typeof v === 'number') {
		v = v.toString();
	}
	v = nFormat(v);

	arV = v.split('.');

	if (arV[0].length > 3)
	{
		arV[0] = arV[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, ' ');
		v = arV.join('.');
	}

	return v;
}
function checkError(e) {
   if($(e).hasClass('error')) {
      $(e).removeClass('error');
   }
}
function openReviews(req) {
	//ws
	payeermodals.managePopups.openFeedbackPopup(req.data);
}


function afterOpeningDialog(e, data)
{
    $(window).resize(function()
    {
        $(".dialog-popup .ui-dialog-content").dialog("option", "position", {my: "center", at: "center", of: window});
    });
}


function dialogErrorAutoClose()
{
	clearTimeout(tmDialogErrorAutoClose);

	tmDialogErrorAutoClose = setTimeout(function()
	{
		$('.dialog-popup div.error_block').animate({top: -500});
	}, 5000);
}
