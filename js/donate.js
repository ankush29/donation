$(document).ready(function() {
	var $donateApp = $('#donate-app');
	var $curr = $donateApp.find('#curr');
	var $giveNowBtn = $donateApp.find('#give_now_button');
	var totalAmount = 1000;
	var $remainingAmountHtml = $donateApp.find('.remaining_amount');
	var remainingAmount = $remainingAmountHtml.html();
	var remainingAmountValue = parseInt(remainingAmount);
	var $alertDanger = $donateApp.find('.alert-danger');
	var $alertSuccess = $donateApp.find('.alert-success');
	var $progressBar = $donateApp.find('.progress-bar');
	var calcProgressBar = (function () {
		return {
			get: function () {
				var currentDonateAmount = 1000 - remainingAmountValue
				var progressBarWidth = (currentDonateAmount/1000)*100
			  	console.log("remaining_amount",remainingAmountValue,currentDonateAmount,progressBarWidth);
			  	$progressBar.css('width',progressBarWidth+'%')
			}
		}
	})();

	calcProgressBar.get();
	var checkvalue = function(amnt) {
		if(amnt > remainingAmountValue || amnt == 0) {
			$remainingAmountHtml.html(remainingAmountValue);
			$alertDanger.css('display','block')
		} else {
			remainingAmountValue = remainingAmountValue - amnt;
			$remainingAmountHtml.html(remainingAmountValue)
			calcProgressBar.get();
			$alertSuccess.css('display','block')
		}

	}
	$giveNowBtn.on('click', function () {
		$alertDanger.css('display','none');
		$alertSuccess.css('display','none');
	    var $btn = $(this).button('loading')
	    var currency = $curr.val();
	    checkvalue(currency);
	    $btn.button('reset')
	})
});