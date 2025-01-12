// References to the DOM elements
const fetchDataBtn = document.getElementById('fetch-data-btn');
const userContainer = document.getElementById('user-container');

// Fetch and display data
fetchDataBtn.addEventListener('click', () => {
  // Fetch data from JSONPlaceholder API
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      return response.json();
    })
    .then(users => {
      // Clear the container before adding new data
      userContainer.innerHTML = '';

      // Loop through the users and display their details
      users.forEach(user => {
        // Create a user card
        const userCard = document.createElement('div');
        userCard.className = 'user-card';
        userCard.innerHTML = `
          <h3>${user.name}</h3>
          <p><strong>Email:</strong> ${user.email}</p>
          <p><strong>Phone:</strong> ${user.phone}</p>
          <p><strong>Company:</strong> ${user.company.name}</p>
        `;
        // Append the card to the container
        userContainer.appendChild(userCard);
      });
    })
    .catch(error => {
      console.error(error);
      userContainer.innerHTML = `<p style="color: red;">An error occurred while fetching data. Please try again later.</p>`;
    });
});
