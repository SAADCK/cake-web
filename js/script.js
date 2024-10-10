const form = document.getElementById('order-form');
const orderBtn = document.getElementById('order-btn');
const orderResponse = document.getElementById('order-response');

orderBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const productName = formData.get('product');
    const quantity = formData.get('quantity');
    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');

    // You can add your own logic here to process the order
    // For example, you can send an AJAX request to a server-side script
    // or use a library like jQuery to make a POST request

    orderResponse.innerHTML = `Thank you for your order, ${name}! You have ordered ${quantity} units of ${productName}. We will contact you at ${email} or ${phone} to confirm your order.`;
});

