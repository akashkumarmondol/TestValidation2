document.getElementById('signupForm').addEventListener('submit', function (event) {
    event.preventDefault();

    var mobile = document.getElementById('mobile').value;
    var email = document.getElementById('email').value;

    var mobileRegex = /^0\d{10}$/;
    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (!mobileRegex.test(mobile)) {
        alert('Please enter a valid mobile number');
        return false;
    }

    if (!emailRegex.test(email)) {
        alert('Please enter a valid email');
        return false;
    }

    alert('Form submitted successfully');
});
