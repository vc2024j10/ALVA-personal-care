// array de frases 
const frases = [
  "Cashback de até 30%",
  "Use o cupom BEMVINDO e ganhe 10%OFF",
  "Parcelamento até 12x sem juros*!"
];
let fraseIndex = 0; //1 frase

//Seleciona o elemento do texto animado
const animatedText = document.querySelector(".animated-text");

//Função para aternar frases
function alternarFrases() {
  fraseIndex = (fraseIndex + 1) % frases.length; //Muda para a próxima frase
  animatedText.textContent = frases[fraseIndex];
}
//Alterna as frases a cada 2 segundos
setInterval(alternarFrases, 2000);

// Transição manual de imagens no banner principal
const bannerContainer = document.getElementById('banner-container');
const images = bannerContainer.querySelectorAll('img');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let currentImage = 0;

prevButton.addEventListener('click', () => {
    images[currentImage].classList.remove('active');
    currentImage = (currentImage - 1 + images.length) % images.length;
    images[currentImage].classList.add('active');
});

nextButton.addEventListener('click', () => {
    images[currentImage].classList.remove('active');
    currentImage = (currentImage + 1) % images.length;
    images[currentImage].classList.add('active');
});


