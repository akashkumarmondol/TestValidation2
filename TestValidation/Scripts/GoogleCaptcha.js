function submitForm() {
    // Get the response from the reCAPTCHA widget
    var recaptchaResponse = grecaptcha.getResponse();

    // Check if the reCAPTCHA widget has been completed
    if (recaptchaResponse.length == 0) {
        // The reCAPTCHA widget has not been completed, show an alert
        alert('Please complete the reCAPTCHA to submit the form.');
        return false;
    } else {
        // The reCAPTCHA widget has been completed, submit the form
        return true;
    }
}
