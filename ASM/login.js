let loginForm = document.getElementById('loginForm');
let usernameInput = document.getElementById('username');
let passwordInput = document.getElementById('password');

function login() {
    let username = usernameInput.value.trim();
    let password = passwordInput.value.trim();

    if (username === '' || password === '') {
        alert('Please fill in all information.');
        return;
    }

    let storedUsername = localStorage.getItem('username');
    let storedPassword = localStorage.getItem('password');

    if (username === storedUsername && password === storedPassword) {
        alert('Login successful!');
        localStorage.setItem('isLoggedIn', 'true');
        window.location.href = 'index.html';
    } else {
        alert('Incorrect username or password.');
    }
}

loginForm.addEventListener('submit', function(event) {
    event.preventDefault();
    login();
});

window.onload = function() {
    let isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn && isLoggedIn === 'true') {
        window.location.href = 'index.html';
    }
}