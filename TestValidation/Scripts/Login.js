document.getElementById('togglePassword').addEventListener('click', function () {
    var passwordField = document.getElementById('myInput');
    if (passwordField.type === "password") {
        passwordField.type = "text";
    } else {
        passwordField.type = "password";
    }
});
