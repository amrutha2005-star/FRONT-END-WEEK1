// Select the button using its ID
const button = document.getElementById("createDivBtn");

// Add a click event listener to the button
button.addEventListener("click", () => {
  // Create a new div element
  const newDiv = document.createElement("div");

  // Add text content to the div
  newDiv.textContent = "Hello! This is a dynamically created div.";

  // Apply some basic styling for visibility
  newDiv.style.backgroundColor = "#f0f0f0";
  newDiv.style.border = "1px solid #ccc";
  newDiv.style.padding = "10px";
  newDiv.style.margin = "10px 0";

  // Append the div to the body
  document.body.appendChild(newDiv);
});
