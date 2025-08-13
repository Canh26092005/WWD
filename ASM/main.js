let logoutButton = document.getElementById('logoutButton');

function logout() {
    localStorage.setItem('isLoggedIn', 'false');
    window.location.href = 'login.html';
}

if (logoutButton) {
    logoutButton.addEventListener('click', function(event) {
        event.preventDefault();
        logout();
    });
}

window.onload = function() {
    let isLoggedIn = localStorage.getItem('isLoggedIn');
    let welcomeMessage = document.getElementById('welcomeMessage');

    if (isLoggedIn && isLoggedIn === 'true') {
        let username = localStorage.getItem('username');
        if (welcomeMessage) {
            welcomeMessage.textContent = `Welcome, ${username}!`;
        }
        if (logoutButton) {
            logoutButton.style.display = 'inline-block';
        }
    } else {
        if (window.location.pathname !== '/login.html' && window.location.pathname !== '/register.html') {
            window.location.href = 'login.html';
        }
    }
}