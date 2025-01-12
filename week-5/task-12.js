// Select the input field and the list
const filterInput = document.getElementById('filter-input');
const itemList = document.getElementById('item-list');

// Add an event listener to the input field for the 'input' event
filterInput.addEventListener('input', function() {
    const filterText = filterInput.value.toLowerCase(); // Get the user input, convert to lowercase
    const items = itemList.getElementsByTagName('li'); // Get all list items

    // Loop through each list item
    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        const itemText = item.textContent.toLowerCase(); // Convert list item text to lowercase

        // Check if the list item text includes the filter text
        if (itemText.includes(filterText)) {
            item.style.display = ''; // Show the item if it matches
        } else {
            item.style.display = 'none'; // Hide the item if it doesn't match
        }
    }
});
