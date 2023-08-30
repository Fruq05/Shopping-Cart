document.addEventListener("DOMContentLoaded", function () {
    const likeButtons = document.querySelectorAll(".like-button");
    const plusButtons = document.querySelectorAll(".plus-button");
    const minusButtons = document.querySelectorAll(".minus-button");
    const deleteButtons = document.querySelectorAll(".delete-button");
    const quantityElements = document.querySelectorAll(".quantity");
    const priceElements = document.querySelectorAll(".price");
    const totalPriceElement = document.querySelector(".total-price");

    let total = 0;

    likeButtons.forEach((button) => {
        button.addEventListener("click", function () {
            button.classList.toggle("active");
        });
    });

    plusButtons.forEach((button, index) => {
        button.addEventListener("click", function () {
            let quantity = parseInt(quantityElements[index].textContent);
            quantity++;
            quantityElements[index].textContent = quantity;
            updateTotalPrice();
        });
    });

    minusButtons.forEach((button, index) => {
        button.addEventListener("click", function () {
            let quantity = parseInt(quantityElements[index].textContent);
            if (quantity > 0) {
                quantity--;
                quantityElements[index].textContent = quantity;
                updateTotalPrice();
            }
        });
    });

    deleteButtons.forEach((button, index) => {
        button.addEventListener("click", function () {
            const price = parseFloat(priceElements[index].textContent.substring(1)); // Removing the "$" sign
            const quantity = parseInt(quantityElements[index].textContent);
            total -= price * quantity;
            total = parseFloat(total.toFixed(2)); // Ensure two decimal places
            totalPriceElement.textContent = "$" + total.toFixed(2);
            button.parentElement.remove();
        });
    });

    function updateTotalPrice() {
        total = 0;
        priceElements.forEach((element, index) => {
            const price = parseFloat(element.textContent.substring(1)); // Removing the "$" sign
            const quantity = parseInt(quantityElements[index].textContent);
            total += price * quantity;
        });
        total = parseFloat(total.toFixed(2)); // Ensure two decimal places
        totalPriceElement.textContent = "$" + total.toFixed(2);
    }
});
