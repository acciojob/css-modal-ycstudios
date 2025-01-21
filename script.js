const modal = document.getElementById("modal");
const openModalBtn = document.getElementById("openModal");
const closeModalBtn = document.querySelector(".close-modal");

openModalBtn.addEventListener("click", () => {
  modal.style.display = "block"; // changed from 'flex' to 'block' (more consistent with CSS testing)
});

closeModalBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
