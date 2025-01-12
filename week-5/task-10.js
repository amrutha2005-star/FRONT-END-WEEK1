// Select the elements
const counterElement = document.getElementById('counter');
const incrementButton = document.getElementById('increment');
const decrementButton = document.getElementById('decrement');

// Initialize the counter value
let counter = 0;

// Update the displayed counter
function updateCounter() {
    counterElement.textContent = counter;
}

// Add event listener for the increment button
incrementButton.addEventListener('click', function() {
    counter++; // Increment the counter by 1
    updateCounter(); // Update the display
});

// Add event listener for the decrement button
decrementButton.addEventListener('click', function() {
    counter--; // Decrement the counter by 1
    updateCounter(); // Update the display
});
