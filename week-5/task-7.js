function createList() {
    // Define an array of strings
    const items = ["Apple", "Banana", "Orange", "Grapes", "Pineapple"];
    
    // Create a <ul> element
    const ul = document.createElement('ul');
    
    // Loop through the array and create <li> elements for each item
    items.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item; // Set the text content of the <li> to the item
        ul.appendChild(li); // Append the <li> to the <ul>
    });
    
    // Select the container where the list will be appended
    const container = document.getElementById('list-container');
    
    // Append the <ul> to the container
    container.appendChild(ul);
}
