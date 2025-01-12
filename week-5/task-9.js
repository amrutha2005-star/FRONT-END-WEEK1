// Select the form and the paragraph where data will be displayed
const form = document.getElementById('user-form');
const userDataParagraph = document.getElementById('user-data');

// Add an event listener to the form to handle form submission
form.addEventListener('submit', function(event) {
    // Prevent the default form submission (which would reload the page)
    event.preventDefault();
    
    // Get the values from the input fields
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    // Display the entered data in the user-data paragraph
    userDataParagraph.textContent = `Name: ${name}, Email: ${email}`;
    
    // Optionally, clear the form fields after submission
    form.reset();
});
