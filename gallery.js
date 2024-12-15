
const filterButtons = document.querySelectorAll(".filter-btn");
const galleryItems = document.querySelectorAll(".gallery-item");

filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        const category = button.dataset.category;

        galleryItems.forEach(item => {
            if (category === "all" || item.dataset.category === category) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        });
    });
});

const modal = document.getElementById("image-modal");
const modalImg = document.getElementById("modal-img");
const captionText = document.getElementById("caption");
const closeModal = document.querySelector(".modal .close");


galleryItems.forEach((item) => {
  const img = item.querySelector("img");
  img.addEventListener("click", () => {
    modal.style.display = "flex";
    modalImg.src = img.src;

    modalImg.style.width = "auto";
    modalImg.style.height = "auto";
    captionText.innerText = img.alt;
  });
});

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
