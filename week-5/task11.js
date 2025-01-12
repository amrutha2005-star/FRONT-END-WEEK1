// Select the button and the paragraph
const toggleButton = document.getElementById('toggle-button');
const paragraph = document.getElementById('paragraph');

// Add an event listener to the button
toggleButton.addEventListener('click', function() {
    // Check if the paragraph is currently visible
    if (paragraph.style.display === 'none') {
        // Show the paragraph
        paragraph.style.display = 'block';
        toggleButton.textContent = 'Hide Paragraph'; // Change button text
    } else {
        // Hide the paragraph
        paragraph.style.display = 'none';
        toggleButton.textContent = 'Show Paragraph'; // Change button text
    }
});
