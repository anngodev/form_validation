function isEmail(email) {
 	var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
 	return regex.test(email);
}

$("#submitButton").click(function() {
	var errorMessage = "";

	if (isEmail($("#email").val()) == false) {
		errorMessage += "<p>Your E-mail address is not valid</p>";
	}

	if ($.isNumeric($("#phone").val()) == false) {
		errorMessage += "<p>Your phone number is not valid</p>"
	}

	if ($("#password").val() != $("#passwordConfirm").val()) {
		errorMessage += "<p>Sorry, your password does not match</p>"
	}

	alert(errorMessage);
});