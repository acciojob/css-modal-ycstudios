const modal = document.getElementById("modal");
const openModalBtn = document.getElementById("openModal");
const closeModalBtn = document.querySelector(".close-modal");

openModalBtn.addEventListener("click", () => {
  modal.style.display = "block"; // Show modal
});

closeModalBtn.addEventListener("click", () => {
  modal.style.display = "none"; // Close modal when close button is clicked
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none"; // Close modal when clicking outside
  }
});
