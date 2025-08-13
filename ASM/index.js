// Khai báo các phần tử DOM để thao tác
let welcomeMessage = document.getElementById('welcomeMessage');
let logoutButton = document.getElementById('logoutButton');
// Khai báo các biến toàn cục

// Khai báo các hàm xử lý sự kiện
function logout() {
    // Xóa thông tin đăng nhập khỏi localStorage
    localStorage.setItem('isLoggedIn', 'false');

    // Điều hướng về trang đăng nhập
    window.location.href = 'login.html';
}

// Gán hàm xử lý sự kiện cho các phần tử DOM
logoutButton.addEventListener('click', function(event) {
    logout();
});

window.onload = function() {
    // Kiểm tra xem người dùng đã đăng nhập hay chưa
    let isLoggedIn = localStorage.getItem('isLoggedIn');
    
    if (isLoggedIn && isLoggedIn === 'true') {
        // Hiển thị thông điệp chào mừng
        let username = localStorage.getItem('username');
        welcomeMessage.textContent = `Welcome, ${username}!`;
    } else {
        alert('You are not logged in.');
        // Nếu chưa đăng nhập, điều hướng về trang đăng nhập
        window.location.href = 'login.html';
    }
}