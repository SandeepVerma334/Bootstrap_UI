document.addEventListener("DOMContentLoaded", () => {
    const toggleSwitch = document.getElementById("mapViewToggle");
  
    toggleSwitch.addEventListener("change", () => {
      if (toggleSwitch.checked) {
        alert("Map View Enabled!");
      } else {
        alert("Map View Disabled!");
      }
    });
  });
  
    // Add interactivity to category cards (optional)
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
      card.addEventListener('click', () => {
        alert(`You selected: ${card.textContent.trim()}`);
      });
    });
  
// script/script.js
document.querySelector('.viewpoints-text-section').addEventListener('click', function () {
  console.log("clicked");
  alert("clicked");
  // Fetch external content
  fetch('home_page/discover_explore.html') // Adjust the path to your external page
      .then(response => {
          if (!response.ok) {
              throw new Error('Network response was not ok');
          }
          return response.text();
      })
      .then(data => {
          // Insert the fetched content into the modal
          document.getElementById('modalContent').innerHTML = data;

          // Show the modal
          const modal = new bootstrap.Modal(document.getElementById('contentModal'));
          modal.show();
      })
      .catch(error => {
          console.error('Error loading the page:', error);
      });
});
