// Reference to the container
const listContainer = document.getElementById('list-container');
const addItemBtn = document.getElementById('add-item-btn');

// Counter for unique item IDs
let itemCount = 0;

// Add item function
addItemBtn.addEventListener('click', () => {
  itemCount++;

  // Create a new list item
  const listItem = document.createElement('div');
  listItem.className = 'list-item';
  listItem.id = `item-${itemCount}`;
  listItem.innerHTML = `
    <span>Item ${itemCount}</span>
    <button class="remove-btn" onclick="removeItem('${listItem.id}')">Remove</button>
  `;

  // Append to the container
  listContainer.appendChild(listItem);
});

// Remove item function
function removeItem(itemId) {
  const item = document.getElementById(itemId);
  if (item) {
    listContainer.removeChild(item);
  }
}
