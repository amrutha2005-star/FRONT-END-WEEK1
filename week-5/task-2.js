// Select the button
const button = document.getElementById("modifyAttributesBtn");

// Add an event listener to the button
button.addEventListener("click", () => {
  // Modify the src and alt attributes of the image
  const image = document.getElementById("imageElement");
  image.src = "https://via.placeholder.com/300";
  image.alt = "Modified Image";

  // Modify the href and text content of the link
  const link = document.getElementById("linkElement");
  link.href = "https://www.google.com";
  link.textContent = "Go to Google";
});
