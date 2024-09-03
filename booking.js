// Function to validate the login form
function validateLogin() {
    // Get input values
    var name = document.getElementById("Name").value;
    var email = document.getElementById("loginEmail").value;
    var date = document.getElementById("date").value;
    var time = document.getElementById("time").value;

    // Validate name
    if (name.trim() === "") {
        alert("Please enter your name");
        return false;
    }

    // Validate email
    if (email.trim() === "") {
        alert("Please enter your email");
        return false;
    } else if (!isValidEmail(email)) {
        alert("Please enter a valid email address");
        return false;
    }

    // Validate date
    if (date.trim() === "") {
        alert("Please enter the date of the session");
        return false;
    }

    // Validate time
    if (time.trim() === "") {
        alert("Please enter the time of the session");
        return false;
    }

    // If all validations pass, submit the form
    document.getElementById("loginForm").submit();
}

// Function to validate email format
function isValidEmail(email) {
    // Regular expression for validating email format
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
