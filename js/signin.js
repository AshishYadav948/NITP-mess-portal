document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM fully loaded"); // Debugging

    // Get all form elements
    const signInForm = document.getElementById("signinForm");
    const signUpForm = document.getElementById("signupForm");
    const forgotPasswordForm = document.getElementById("forgotPasswordForm");
    const otpVerificationForm = document.getElementById("otpVerificationForm");

    // Get all links/buttons
    const showSignUp = document.getElementById("showSignUp");
    const showSignIn = document.getElementById("showSignIn");
    const showSignInFromForgot = document.getElementById("showSignInFromForgot");
    const showSignInFromOTP = document.getElementById("showSignInFromOTP");
    const forgotPassword = document.getElementById("forgotPassword");
    const resendOTPLink = document.getElementById("resendOTPLink");
    const resendOTP = document.getElementById("resendOTP");
    const timerDisplay = document.getElementById("timer");

    let countdown;

    // Toggle between Sign In and Sign Up forms
    showSignUp.addEventListener("click", function (e) {
        e.preventDefault();
        console.log("Sign Up clicked"); // Debugging
        signInForm.style.display = "none";
        signUpForm.style.display = "block";
        forgotPasswordForm.style.display = "none";
        otpVerificationForm.style.display = "none";
    });

    showSignIn.addEventListener("click", function (e) {
        e.preventDefault();
        console.log("Sign In clicked"); // Debugging
        signUpForm.style.display = "none";
        forgotPasswordForm.style.display = "none";
        otpVerificationForm.style.display = "none";
        signInForm.style.display = "block";
    });

    // Handle Forgot Password
    forgotPassword.addEventListener("click", function (e) {
        e.preventDefault();
        console.log("Forgot Password clicked"); // Debugging
        signInForm.style.display = "none";
        signUpForm.style.display = "none";
        otpVerificationForm.style.display = "none";
        forgotPasswordForm.style.display = "block";
    });

    showSignInFromForgot.addEventListener("click", function (e) {
        e.preventDefault();
        console.log("Show Sign In from Forgot clicked"); // Debugging
        forgotPasswordForm.style.display = "none";
        otpVerificationForm.style.display = "none";
        signInForm.style.display = "block";
    });

    showSignInFromOTP.addEventListener("click", function (e) {
        e.preventDefault();
        console.log("Show Sign In from OTP clicked"); // Debugging
        otpVerificationForm.style.display = "none";
        signInForm.style.display = "block";
    });

    // Handle Sign In form submission
    document.getElementById("signinFormContent").addEventListener("submit", function (e) {
        e.preventDefault();
        const rollNo = document.getElementById("rollNo").value;
        const password = document.getElementById("password").value;

        // Add your validation or API call here
        console.log("Sign In Data:", { rollNo, password });
        alert("Sign In Successful!");
    });

    // Handle Sign Up form submission
    document.getElementById("signupFormContent").addEventListener("submit", function (e) {
        e.preventDefault();
        const fullName = document.getElementById("fullName").value;
        const rollNoSignUp = document.getElementById("rollNoSignUp").value;
        const email = document.getElementById("email").value;
        const passwordSignUp = document.getElementById("passwordSignUp").value;
        const confirmPassword = document.getElementById("confirmPassword").value;

        if (passwordSignUp !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        // Add your validation or API call here
        console.log("Sign Up Data:", { fullName, rollNoSignUp, email, passwordSignUp });
        alert("Sign Up Successful!");
    });

    // Handle Forgot Password form submission
    document.getElementById("forgotPasswordFormContent").addEventListener("submit", function (e) {
        e.preventDefault();
        const emailOrPhone = document.getElementById("emailOrPhone").value;

        // Simulate sending OTP
        console.log("OTP sent to:", emailOrPhone);
        forgotPasswordForm.style.display = "none";
        otpVerificationForm.style.display = "block";

        // Start 1-minute timer
        startTimer(1, timerDisplay, resendOTP, resendOTPLink);
    });

    // Handle OTP Verification form submission
    document.getElementById("otpVerificationFormContent").addEventListener("submit", function (e) {
        e.preventDefault();
        const otp = document.getElementById("otp").value;

        // Add your OTP validation logic here
        console.log("OTP Entered:", otp);
        alert("OTP Verified Successfully!");
    });

    // Handle Resend OTP
    resendOTPLink.addEventListener("click", function (e) {
        e.preventDefault();
        console.log("Resending OTP...");
        startTimer(1, timerDisplay, resendOTP, resendOTPLink);
    });

    // Timer function
    function startTimer(minutes, timerDisplay, resendOTP, resendOTPLink) {
        let time = minutes * 60;
        clearInterval(countdown);

        resendOTP.style.display = "block";
        resendOTPLink.style.display = "none";

        countdown = setInterval(() => {
            const minutesLeft = Math.floor(time / 60);
            let secondsLeft = time % 60;
            secondsLeft = secondsLeft < 10 ? `0${secondsLeft}` : secondsLeft;

            timerDisplay.textContent = `${minutesLeft}:${secondsLeft}`;

            if (time <= 0) {
                clearInterval(countdown);
                resendOTP.style.display = "none";
                resendOTPLink.style.display = "block";
            }

            time--;
        }, 1000);
    }
});