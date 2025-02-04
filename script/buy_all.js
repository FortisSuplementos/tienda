const cart_emergent = document.getElementById('cart-content');
const cart_openEmergBtn = document.getElementById('cart-btn');
const cart_closeBtn = document.querySelector('.cart-close');

cart_openEmergBtn.addEventListener('click', function() {
    cart_emergent.style.display = 'block';
});

cart_closeBtn.addEventListener('click', function() {
  cart_emergent.style.display = 'none'
});

window.addEventListener('click', function(event) {
    if (event.target === cart_emergent) {
      cart_emergent.style.display = 'none'
    }
});


document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.querySelectorAll('.addToCart');
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    const cartNotification = document.getElementById('cart-notification');
    let total = 0;

    const cart = {};
    const phoneNumber = "5363674663"

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            const product = event.target.closest('.container');
            const productId = product.getAttribute('data-id');
            const productName = product.getAttribute('data-name');
            const productPrice = parseFloat(product.getAttribute('data-price'));
            const productImage = product.getAttribute('data-image');

            if (cart[productId]) {
                cart[productId].quantity += 1;
                cart[productId].totalPrice += productPrice;
            } else {
                cart[productId] = {
                    name: productName,
                    price: productPrice,
                    image: productImage,
                    quantity: 1,
                    totalPrice: productPrice
                };


                const cartItemContainer = document.createElement('div');
                cartItemContainer.classList.add('buying-element');
                cartItemContainer.setAttribute('data-id', productId);
            
                const img = document.createElement('img');
                img.src = productImage;

                const productInfo = document.createElement('div');
                productInfo.classList.add('buying-element-info');
                productInfo.textContent = `${productName} - ${productPrice}$`;

                const productMoney = document.createElement('div');
                productMoney.classList.add('buying-element-price');
                productMoney.textContent = `${productPrice}$`;

                const productQuantity = document.createElement('div');
                productQuantity.classList.add('product-quantity');
                productQuantity.textContent = `Cantidad: 1`;

                cartItemContainer.appendChild(img);
                cartItemContainer.appendChild(productInfo);
                cartItemContainer.appendChild(productQuantity);
                cartItemContainer.appendChild(productMoney);


                cartItems.appendChild(cartItemContainer);

            };

            const cartItemContainer = cartItems.querySelector(`.buying-element[data-id= "${productId}"]`);
            const productQuantity = cartItemContainer.querySelector('.product-quantity');
            productQuantity.textContent = `Cantidad: ${cart[productId].quantity}`;
            const productInfo = cartItemContainer.querySelector('.buying-element-info');
            productInfo.textContent = `${productName}`;
            
            total += productPrice;
            cartTotal.textContent = `$${total.toFixed(2)}`; 

            const itemCounter = Object.values(cart).reduce((acc, item) => acc + item.quantity, 0);
            cartNotification.textContent = itemCounter;
        });
    });

    const cartActionBtn = document.getElementById('cartActionBtn');
    cartActionBtn.addEventListener('click', function() {
        let Wtsmessage = "Hola, quiero pedir los siguientes productos:\n";
        for (let productId in cart) {
            const item = cart[productId];
            Wtsmessage += `${item.name} - Cantidad: ${item.quantity} - Total de: $${item.totalPrice.toFixed(2)}\n`;
        }
        Wtsmessage += `Precio Final: $${total.toFixed(2)}`;

        const wtsUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(Wtsmessage)}`;
        window.open(wtsUrl, '_blank');
    });
});