function signUp() {
    const userType = document.getElementById('userType').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    // Check if passwords match
    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return;
    }

    // Check if the username already exists
    if (localStorage.getItem(username)) {
        alert('Username already exists. Choose a different one.');
        return;
    }

    // Store the new username and password
    localStorage.setItem(username, password);

    // Additional logic for doctors
    if (userType === 'doctor') {
        const licenseUpload = document.getElementById('licenseUpload').value;
        // Process license upload, you may want to save it or perform additional validation
        console.log('License uploaded:', licenseUpload);
    }

    // Additional logic for patients
    if (userType === 'patient') {
        const idUpload = document.getElementById('idUpload').value;
        // Process ID upload, you may want to save it or perform additional validation
        console.log('ID uploaded:', idUpload);
    }

    alert('Sign Up successful!');
}
var redirectbutton = document.getElementsByClassName("signup-button");
redirectbutton[0].addEventListener("click", function(){
    window.location.href = "index.html/#login-tiles";
});