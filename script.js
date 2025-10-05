document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".banner-img");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");
  let currentImage = 0;
  const totalImages = images.length;
  let autoSlideInterval;

  function showImage(index) {
    images.forEach((img) => img.classList.remove("active"));
    images[index].classList.add("active");
  }

  function nextImage() {
    currentImage = (currentImage + 1) % totalImages;
    showImage(currentImage);
  }

  function startAutoSlide() {
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(nextImage, 4000);
  }

  showImage(currentImage);
  startAutoSlide();

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      clearInterval(autoSlideInterval);
      currentImage = (currentImage - 1 + totalImages) % totalImages;
      showImage(currentImage);
      startAutoSlide();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      clearInterval(autoSlideInterval);
      nextImage();
      startAutoSlide();
    });
  }
});
