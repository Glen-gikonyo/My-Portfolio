/**
 * Calculates the total price of a website based on the selected options.
 */
function calculatePrice() {
    let name = document.getElementById('name').value;

    const basePrice = 15000; // Base price in Kenyan Shillings
    let totalPrice = basePrice;

    // Get the number of pages
    const pages = parseInt(document.getElementById('pages').value);
    totalPrice += pages * 2000; // 2000 KES per page

    // Add additional cost for e-commerce
    if (document.getElementById('ecommerce').checked) {
        totalPrice += 10000;
    }

    // Add additional cost for responsive design
    if (document.getElementById('responsive').checked) {
        totalPrice += 5000;
    }

    // Get the value of additional services
    const additionalServices = parseInt(document.getElementById('additionalServices').value);
    totalPrice += additionalServices;

    // Display the total price
    document.getElementById('totalPrice').innerHTML = `<h4>Hello ${name} your total price is ${totalPrice} KES</h4>`;
}
