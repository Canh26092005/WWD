let profileUsername = document.getElementById('profileUsername');
let profileEmail = document.getElementById('profileEmail');
let logoutButtonProfile = document.getElementById('logoutButtonProfile');

function logout() {
    localStorage.setItem('isLoggedIn', 'false');
    window.location.href = 'login.html';
}

if (logoutButtonProfile) {
    logoutButtonProfile.addEventListener('click', function(event) {
        event.preventDefault();
        logout();
    });
}

window.onload = function() {
    let isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn && isLoggedIn === 'true') {
        profileUsername.textContent = localStorage.getItem('username');
        profileEmail.textContent = localStorage.getItem('email');
    } else {
        alert('You are not logged in.');
        window.location.href = 'login.html';
    }
}