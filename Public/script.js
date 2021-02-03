//Lottie animation properties
var animation = bodymovin.loadAnimation({
	container: document.getElementById("anim"),
	rendered: "svg",
	loop: false,
	autoplay: false,
	path: "data.json",
});

//Lottie animation + Copy to Clipboard animation
document.getElementById("anim").addEventListener("click", function () {
	animation.goToAndPlay(0);
	animation.play();

	copyToClipBoard($("#email-address").html());

	setTimeout(function () {
		document.getElementById("copied-to-clipboard-container").className +=
			" showCopiedText";
	}, 1000);

	setTimeout(function () {
		document.getElementById("copied-to-clipboard-container").className +=
			" opacity1";
	}, 1400);

	setTimeout(function () {
		document
			.getElementById("copied-to-clipboard-container")
			.classList.remove("showCopiedText");
		document.getElementById("copied-to-clipboard-container").className +=
			" hideCopiedText";
		document
			.getElementById("copied-to-clipboard-container")
			.classList.remove("opacity1");
	}, 3000);

	document
		.getElementById("copied-to-clipboard-container")
		.classList.remove("hideCopiedText");
});

//Copy to clipboard function
const copyToClipBoard = (str) => {
	const el = document.createElement("textarea");
	el.value = str;
	document.body.appendChild(el);
	el.select();
	document.execCommand("copy");
	document.body.removeChild(el);
};

//Email Signup Form//
var notificationTimer; //Global timer variable required for clearTimeout()//
$(function () {
	var $form = $("#mc-embedded-subscribe-form");
	$("#mc-embedded-subscribe").on("click", function (event) {
		if (event) {
			event.preventDefault();
		}
		$("#notification_container").clearQueue().fadeOut(200);
		$("#notification_container").html("<span></span>");
		register($form);
		$(this).fadeOut(250);
		$("#loadingAnimation").delay(250).fadeIn(100);
	});
});

function register($form) {
	$.ajax({
		type: $form.attr("method"),
		url: $form.attr("action"),
		data: $form.serialize(),
		cache: false,
		dataType: "jsonp",
		contentType: "application/json; charset=utf-8",
		timeout: 10000,
		error: function () {
			$("#notification_container").html(
				'<span class="alert"> Could not connect to server. Please try again later.</span>'
			);
			$("#notification_container").fadeIn(500);
			notificationTimer = setTimeout(function () {
				if ($("#notification_container .alert").css("opacity") === "1") {
					$("#notification_container .alert").fadeToggle(2000);
				}
			}, 7000);
			$("#notification_container").hover(
				function () {
					//Prevent notification from fading out during hover//
					clearTimeout(notificationTimer);
					$("#notification_container .alert")
						.filter(":animated")
						.stop(true, false)
						.fadeToggle(200);
				},
				function () {
					notificationTimer = setTimeout(function () {
						if ($("#notification_container .alert").css("opacity") === "1") {
							$("#notification_container .alert").fadeToggle(2000);
						}
					}, 7000);
				}
			);
			$("#mc-embedded-subscribe")
				.filter(":not(:animated)")
				.delay(500)
				.fadeIn(250); //Bring back the submit button//
		},

		success: function (data) {
			var message;
			if (data.result !== "success") {
				message = data.msg.substring(4);
				$("#notification_container").html(
					'<span class="alert">' + " Error: " + message + "</span>"
				);
				$("#mc-signup")
					.filter(":not(:animated)")
					.effect("shake", { distance: 3 });
				$("#mc-embedded-subscribe").delay(500).fadeIn(250);
				$("#notification_container").fadeIn(500); //Fade in the notification//
				notificationTimer = setTimeout(function () {
					if ($("#notification_container .alert").css("opacity") === "1") {
						$("#notification_container .alert").fadeToggle(2000);
					}
				}, 7000);
				$("#notification_container").hover(
					function () {
						//Prevent notification from fading out during hover//
						clearTimeout(notificationTimer);
						$("#notification_container .alert")
							.filter(":animated")
							.stop(true, false)
							.fadeToggle(200);
						/*if ($('#notification_container .alert').css('opacity') < 1) {	//Trigger fadeToggle only is animation is already fading//
                        $('#notification_container .alert').stop(true, false).fadeToggle(200);
                        }*/
					},
					function () {
						notificationTimer = setTimeout(function () {
							if ($("#notification_container .alert").css("opacity") === "1") {
								$("#notification_container .alert").fadeToggle(2000);
							}
						}, 7000);
					}
				);
			} else {
				message = "Done! Check your mailbox and verify.";
				$("#notification_container").html(
					'<span class="success">' + message + "</span>"
				);
				clearTimeout(notificationTimer);
				$("#notification_container").fadeIn(500);
				$("#mce-EMAIL").blur();
			}
		},
		complete: function () {
			$("#loadingAnimation").fadeOut(500);
		},
	});
}

function addHomepageEmail() {
	$("#email-address").html(
		"&" +
			"#" +
			"1" +
			"0" +
			"4" +
			";" +
			"e" +
			"l" +
			"l" +
			"&" +
			"#" +
			"1" +
			"1" +
			"1" +
			";" +
			"&" +
			"#" +
			"6" +
			"4" +
			";" +
			"p" +
			"r" +
			"&" +
			"#" +
			"1" +
			"1" +
			"1" +
			";" +
			"p" +
			"h" +
			"e" +
			"&" +
			"#" +
			"9" +
			"9" +
			";" +
			"&" +
			"#" +
			"1" +
			"2" +
			"1" +
			";" +
			"&" +
			"#" +
			"4" +
			"6" +
			";" +
			"o" +
			"n" +
			"e"
	);
}
addHomepageEmail();
