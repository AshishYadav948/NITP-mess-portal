// mealcancelation.js
document.addEventListener('DOMContentLoaded', function() {
    const breakfastButton = document.getElementById('breakfastButton');
    const lunchButton = document.getElementById('lunchButton');
    const dinnerButton = document.getElementById('dinnerButton');
    const confirmationMessage = document.getElementById('confirmationMessage');

    if (breakfastButton) {
        breakfastButton.addEventListener('click', function() {
            confirmationMessage.textContent = 'Your breakfast has been cancelled.';
            confirmationMessage.style.display = 'block';
        });
    }

    if (lunchButton) {
        lunchButton.addEventListener('click', function() {
            confirmationMessage.textContent = 'Your lunch has been cancelled.';
            confirmationMessage.style.display = 'block';
        });
    }

    if (dinnerButton) {
        dinnerButton.addEventListener('click', function() {
            confirmationMessage.textContent = 'Your dinner has been cancelled.';
            confirmationMessage.style.display = 'block';
        });
    }
});