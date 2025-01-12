// Get the parent element (button-container)
const buttonContainer = document.getElementById('button-container');

// Use event delegation: add an event listener to the parent element
buttonContainer.addEventListener('click', function(event) {
    // Check if the clicked target is a button
    if (event.target.tagName.toLowerCase() === 'button') {
        // Log the text of the clicked button
        console.log('You clicked:', event.target.textContent);
    }
});
