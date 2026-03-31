// Blink the referenced section when a navigation link is clicked
const dateContainer = document.getElementById('date-container');
const conversionContainer = document.getElementById('conversion-container');
const numberContainer = document.getElementById('number-container');

function getCurrentDate() {
    const currentDate = new Date();
    return currentDate.toString();
}

// Display the current date in the date container automatically updates every second
function updateDate() {
    //Today is MM/DD/YYYY
    const currentDate = new Date();
    const month = currentDate.getMonth() + 1; // Months are zero-based
    const day = currentDate.getDate();
    const year = currentDate.getFullYear();
    const formattedDate = `Today is ${month}/${day}/${year}`;
    dateContainer.textContent = formattedDate;
    
}

updateDate(); // Initial call to display the date immediately
