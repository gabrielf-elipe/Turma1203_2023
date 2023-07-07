// Obtém uma referência para o elemento do carrossel
var carousel = document.getElementById("carousel");

// Obtém uma lista de todas as imagens dentro do carrossel
var images = carousel.getElementsByTagName("img");

// Define o índice da imagem atual
var currentImageIndex = 0;

// Define a função para exibir a próxima imagem no carrossel
function showNextImage() {
    // Esconde a imagem atual
    images[currentImageIndex].classList.remove("active");
    
    // Incrementa o índice da imagem atual
    currentImageIndex++;
    
    // Verifica se chegou ao final das imagens e reinicia o carrossel
    if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    }
    
    // Exibe a próxima imagem
    images[currentImageIndex].classList.add("active");
}

// Define a função para iniciar o carrossel
function startCarousel() {
    // Exibe a primeira imagem
    images[currentImageIndex].classList.add("active");
    
    // Configura um intervalo para trocar as imagens a cada 3 segundos (3000 milissegundos)
    setInterval(showNextImage, 3000);
}

// Inicia o carrossel quando a página terminar de carregar
window.addEventListener("load", startCarousel);
