// weeklymenu.js
document.addEventListener('DOMContentLoaded', function() {
    // Example: Add interactivity to the table (optional)
    const tableRows = document.querySelectorAll('table tbody tr');
    tableRows.forEach(row => {
        row.addEventListener('click', function() {
            alert('You clicked on ' + row.cells[0].textContent + "'s menu.");
        });
    });
});