const container = document.querySelector(".container"),
        pwShowHide = document.querySelectorAll(".show_hide"),
        pwFields = document.querySelectorAll(".password"),
        signup = document.querySelector(".signup_link"),
        login = document.querySelector(".login_link");

    pwShowHide.forEach(eyeIcon =>{
        eyeIcon.addEventListener("click", ()=>{
            pwFields.forEach(pwField =>{
                if(pwField.type ==="password"){
                    pwField.type = "text";

                    pwShowHide.forEach(icon=>{
                        icon.classList.replace("uil-eye-slash", "uil-eye")
                    })
                }else{
                    pwField.type = "password";

                    pwShowHide.forEach(icon=>{
                        icon.classList.replace("uil-eye", "uil-eye-slash")
                    })
                }
            })
        })
    })

    // code to appear sign up and login form
    signup.addEventListener("click", ()=>{
        container.classList.add("active");
    });
    login.addEventListener("click", ()=>{
        container.classList.remove("active");
    });

    // validating the fields 

    function validateLogin() {
        var email = document.getElementById("loginEmail").value;
        var password = document.getElementById("loginPassword").value;
        
        // Basic email validation
        if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
            return false;
        }
        
        // Password length check
        if (password.length < 6) {
            alert("Password must be at least 6 characters long.");
            return false;
        }
    
        // Additional validation checks can be added as needed
        
        // If everything is valid, submit the form
        document.getElementById("loginForm").submit();
    }
    
    function validateSignup() {
        var name = document.getElementById("signupName").value;
        var email = document.getElementById("signupEmail").value;
        var password = document.getElementById("signupPassword").value;
        var confirmPassword = document.getElementById("confirmPassword").value;
        
        // email validation
        if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
            return false;
        }
    
        // Password length check
        if (password.length < 6) {
            alert("Password must be at least 6 characters long.");
            return false;
        }
    
        // Password match check
        if (password !== confirmPassword) {
            alert("Passwords do not match.");
            return false;
        }
        // If everything is valid, submit the form
        document.getElementById("signupForm").submit();
    }
    
    // Function to validate email address using regex
    function validateEmail(email) {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }
    
