/**
* @functionName ContentScript
*
* @functionOverview

* @param 
* @api none
*/

(function () {

	var NonStopMessenger=function(){function n(n){window.InputEvent=window.Event||window.InputEvent
	var t=(new Date,new InputEvent("input",{bubbles:!0})),e=document.querySelector("div > div.input")
	e.textContent=n,e.dispatchEvent(t),setTimeout(function(){document.querySelector(".icon.icon-send").click()},200)}var t=0,e=0
	this.send=function(o,i){function u(){n(o),t++,t<e&&setTimeout(u,300)}t=0,e=i,u()},this.stop=function(){e=t}},mes=new NonStopMessenger

	var Assistant = $('<div id="web-assistant" class="panel panel-primary">' +
	'<div class="panel-heading minimize-icon"><span class="panel-title">Web Assistant' +
	'</span></div><div class="panel-body"><div class="input-group">' +
	'<textarea class="form-control custom-control" rows="3" placeholder="Enter Message"></textarea>' +
	'</div><select class="form-control elm" id="no-of-times"><option>10' +
	'</option><option>20</option><option>50</option><option>100</option><option>' +
	'200</option><option>500</option></select>' +
	'<a id="send" class="bttn btn-outline-primary elm">Send</a>' +
	'<a id="stop" class="bttn btn-outline-warning elm">Stop</a></div></div>');

	$('body').append(Assistant);

	var numberOfMsgs = $("#no-of-times", Assistant);
	var messageText = $("textarea", Assistant);

	$("#send", Assistant).click(function (e) {
		var txt = messageText.val();
		var count = numberOfMsgs.val();

		console.log(txt);
		console.log(count);

		if(txt.trim().length == 0) {
			console.log("No message...");
			return;
		}

		console.log("Sending message...");

		mes.send(txt, count);
	});

	$("#stop", Assistant).click(function (e) {
		console.log("Stopped sending message...");
		mes.stop();
	});


})();