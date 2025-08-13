let registerForm = document.getElementById('registerForm');
let usernameInput = document.getElementById('username');
let passwordInput = document.getElementById('password');
let confirmPasswordInput = document.getElementById('confirmPassword');
let emailInput = document.getElementById('email');

function register() {
    let username = usernameInput.value.trim();
    let password = passwordInput.value.trim();
    let confirmPassword = confirmPasswordInput.value.trim();
    let email = emailInput.value.trim();

    if (username === '' || password === '' || confirmPassword === '' || email === '') {
        alert('Please fill in all information.');
        return;
    }

    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return;
    }

    alert('Registration successful!');

    localStorage.setItem('username', username);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
    localStorage.setItem('isLoggedIn', 'false');

    window.location.href = 'login.html';
}

registerForm.addEventListener('submit', function(event) {
    event.preventDefault();
    register();
});

window.onload = function() {
    let isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn && isLoggedIn === 'true') {
        window.location.href = 'index.html';
    }
}