




const modal = document.getElementById("videoModal");
const videoFrame = document.getElementById("videoFrame");
const closeModal = document.querySelector(".close-modal");

document.querySelectorAll(".gallery-item").forEach(item => {
  item.addEventListener("click", () => {
    const videoSrc = item.dataset.video;
    videoFrame.src = `${videoSrc}?autoplay=1`;
    modal.style.display = "flex";
  });
});

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
  videoFrame.src = "";
});

modal.addEventListener("click", e => {
  if (e.target === modal) {
    modal.style.display = "none";
    videoFrame.src = "";
  }
});
