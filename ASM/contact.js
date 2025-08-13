let logoutButton = document.getElementById('logoutButton');
let contactForm = document.getElementById('contactForm');

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

if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Thank you for contacting us! We will respond as soon as possible..');
        contactForm.reset();
    });
}