document.addEventListener('DOMContentLoaded', () => {
    // Lấy các phần tử HTML cần thiết
    const cartItemsElement = document.getElementById('cartItems');
    const cartTotalElement = document.getElementById('cartTotal');

    // Dữ liệu sản phẩm mới
    const productsData = [
        { id: 1, name: "Levents® Blank Boxy Tee", price: 250000, image: "Black_LTSBOCOA113UD0101SS25_1.webp" },
        { id: 2, name: "Levents® Triple Star Classic Cap", price: 480000, image: "Navy_LCPSPCLU351UNAVNOSS25_2.webp" },
        { id: 3, name: "Levents® Seasonal Long Sleeve Boxy Tee", price: 600000, image: "White_LTSBOCOA249UW0102SS25_1.webp" },
        { id: 4, name: "Levents® Leather Card Holder", price: 450000, image: "Black_LCHNOCOY347UD01NOSS25_1.webp" },
        { id: 5, name: "Levents® Classic Triple Star Semi-Oversized Polo", price: 420000, image: "Black_LPOSOCOC123UD0101SS25_1.webp" },
        { id: 6, name: "Levents® Classic Triple Star Slimfit Tanktop", price: 390000, image: "Black_LTASLCOL132UD0101SS25_1.webp" },
        { id: 7, name: "Levents® Striped Boxy Long Sleeve Shirt", price: 550000, image: "Blue_LSHBOCOB233UB0102FW24_1.webp" },
        { id: 8, name: "Levents® Teddy Bear Oversized Tee", price: 450000, image: "White_LTSOVCOA408UW0101SS25_1.webp" },
        { id: 9, name: "Levents® Earth Day Oversized Tee/ White", price: 390000, image: "White_LTSOVCOA406UW0100SS25_1.webp" },
    ];

    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Lưu giỏ hàng vào localStorage
    function saveCart() {
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    // Hiển thị giỏ hàng
    function renderCart() {
        if (!cartItemsElement || !cartTotalElement) return;

        cartItemsElement.innerHTML = '';
        let total = 0;

        if (cart.length === 0) {
            cartItemsElement.innerHTML = '<p style="text-align: center; color: #888;">Giỏ hàng của bạn đang trống.</p>';
        } else {
            cart.forEach(item => {
                const cartItemElement = document.createElement('div');
                cartItemElement.classList.add('cart-item');
                cartItemElement.innerHTML = `
                    <img src="${item.image}" alt="${item.name}" class="item-image">
                    <div class="item-details">
                        <span class="item-name">${item.name}</span>
                        <span class="item-price">${(item.price).toLocaleString('vi-VN')}₫</span>
                    </div>
                    <div class="item-quantity">
                        <input type="number" value="${item.quantity}" min="1" data-id="${item.id}">
                    </div>
                    <button class="remove-item" data-id="${item.id}"><i class="fas fa-trash"></i></button>
                `;
                cartItemsElement.appendChild(cartItemElement);
                total += item.price * item.quantity;
            });
        }

        cartTotalElement.textContent = `${total.toLocaleString('vi-VN')}₫`;
        saveCart();
    }

    // Thêm sản phẩm vào giỏ hàng
    function addToCart(product) {
        const existingProduct = cart.find(item => item.id === product.id);
        if (existingProduct) {
            existingProduct.quantity += 1;
        } else {
            cart.push({ ...product, quantity: 1 });
        }
        alert('Product has been added to cart!');
        saveCart();
    }

    // Gán sự kiện cho các nút "Thêm vào giỏ" trên toàn bộ trang
    document.body.addEventListener('click', (e) => {
        if (e.target.classList.contains('add-to-cart')) {
            const productCard = e.target.closest('.product-card');
            const productId = parseInt(productCard.dataset.id);

            const productInfo = productsData.find(p => p.id === productId);
            if (productInfo) {
                addToCart(productInfo);
            }
        }
    });

    // Gán sự kiện cho các nút "Xóa" và ô "Số lượng" trong giỏ hàng
    if (cartItemsElement) {
        cartItemsElement.addEventListener('click', (e) => {
            if (e.target.closest('.remove-item')) {
                const productId = e.target.closest('.remove-item').dataset.id;
                cart = cart.filter(item => item.id != productId);
                renderCart();
            }
        });

        cartItemsElement.addEventListener('change', (e) => {
            if (e.target.type === 'number') {
                const productId = e.target.dataset.id;
                const newQuantity = parseInt(e.target.value);
                
                const product = cart.find(item => item.id == productId);
                if (product && newQuantity > 0) {
                    product.quantity = newQuantity;
                } else if (newQuantity <= 0) {
                    cart = cart.filter(item => item.id != productId);
                }
                renderCart();
            }
        });

        // Gọi hàm renderCart() khi trang giỏ hàng được tải
        renderCart();
    }
});