const images = [
  "Assets/IMG/Caroussel1.jpg",
  "Assets/IMG/Caroussel2.jpg",
  "Assets/IMG/Caroussel3.jpg",
  "Assets/IMG/Caroussel4.jpg",
  "Assets/IMG/Caroussel5.jpg"
];

const texts = [
  "Hangartræ og Operatræ",
  "Text 2",
  "Text 3",
  "Text 4",
  "Text 5"
];

const slider = document.querySelector(".carousel-slider");
const img = document.querySelector("#carouselImage");
const text = document.querySelector("#carouselText");

slider.addEventListener("input", () => {
  const index = Math.round((slider.value / 100) * (images.length - 1));

  img.src = images[index];
  text.textContent = texts[index];

  slider.style.setProperty("--thumb-rotate", `${slider.value * 7.2}deg`);
});