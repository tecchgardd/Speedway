document.addEventListener("DOMContentLoaded", () => {
    // === SLIDESHOW DE IMAGENS DINÂMICAS ===
    const imagens = [
      'assets/relatos-fotos/foto1.jpg',
      'assets/relatos-fotos/foto2.jpg'
    ];
  
    let index = 0;
    const slideshow = document.getElementById('slideshow');
  
    if (slideshow) {
      function trocarImagem() {
        slideshow.style.backgroundImage = `url('${imagens[index]}')`;
        index = (index + 1) % imagens.length;
      }
  
      trocarImagem();
      setInterval(trocarImagem, 4000);
    }
  
    // === BOTÃO WHATSAPP ===
    const btnWhatsapp = document.getElementById("btnWhatsapp");
    if (btnWhatsapp) {
      btnWhatsapp.addEventListener("click", () => {
        window.open(
          "https://wa.me/5511916400424?text=Vi%20seu%20site%20%2C%20e%20gostaria%20de%20receber%20o%20cat%C3%A1logo",
          "_blank"
        );
      });
    }
  
    // === BOTÃO EMAIL ===
    const btnEmail = document.getElementById("btnEmail");
    if (btnEmail) {
      btnEmail.addEventListener("click", () => {
        window.location.href =
          "mailto:legacyspeedlegacy@gmail.com?subject=Catálogo dos produtos&body=Gostaria de mais informações sobre os produtos e receber um catálogo se possível";
      });
    }
  
    // === NAVEGAÇÃO SUAVE PELOS LINKS COM ID ===
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const target = document.getElementById(targetId);
        if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
    });
  });
  // Função para criar a lógica de um modal e carrossel
function setupModal(modalNum, images) {
    const openBtn = document.getElementById(`openModal${modalNum}`);
    const modal = document.getElementById(`modal${modalNum}`);
    const closeBtn = document.getElementById(`closeModal${modalNum}`);
    const carouselImage = document.getElementById(`carouselImage${modalNum}`);
    const prevBtn = document.getElementById(`prevBtn${modalNum}`);
    const nextBtn = document.getElementById(`nextBtn${modalNum}`);
  
    let currentIndex = 0;
  
    openBtn.addEventListener('click', () => {
      modal.classList.remove('hidden');
      currentIndex = 0;
      carouselImage.src = images[currentIndex];
    });
  
    closeBtn.addEventListener('click', () => {
      modal.classList.add('hidden');
    });
  
    prevBtn.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      carouselImage.src = images[currentIndex];
    });
  
    nextBtn.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % images.length;
      carouselImage.src = images[currentIndex];
    });
  
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.add('hidden');
      }
    });
  }
  
  // Agora você chama para cada modal, passando o número e as imagens correspondentes
  
  setupModal(1, [
    './assets/quadros/Quadro Ferrari.JPG',
    './assets/quadros/Quadro Mclaren .JPG',
    './assets/quadros/Quadro Mercedes.JPG',
    './assets/quadros/Quadros Red Bull.JPG'
  ]);
  
  setupModal(2, [
    './assets/quadrominiatura/Miniatura Mclaren .JPG',
    './assets/quadrominiatura/Miniatura Ferrari .JPG',
    './assets/quadrominiatura/Miniatura Mercedes .JPG'
  ]);
  
  setupModal(3, [
    './assets/bico/Bico Red Bull .JPG',
    './assets/bico/Bico Ferrari.JPG',
    './assets/bico/Bico Mclaren.JPG'
  ]);
  
  setupModal(4, [
    './assets/capacetes/Capacete 2.JPG',
    './assets/capacetes/Capacete 1.JPG',
    './assets/capacetes/Capacete 3.JPG'
  ]);
  
  setupModal(5, [
    './assets/volantes/Volante Ferrari .JPG',
    './assets/volantes/Volante Mclaren.JPG',
    './assets/volantes/Volante Mercedes.JPG'
  ]);
  
  setupModal(6, [
    './assets/carropremium/Carro linha premium 23.JPG',
    './assets/carropremium/Carro linha premium 24.JPG',
    './assets/carropremium/Carro linha premium 25.JPG'
  ]);
  
  setupModal(7, [
    './assets/carromoderno/Carro moderno 23.JPG',
    './assets/carromoderno/Carro moderno 24.JPG',
    './assets/carromoderno/Carro moderno 25.JPG'
  ]);
  
  setupModal(8, [
    './assets/carro-concept/Carro Concept 3 .JPG',
    './assets/carro-concept/Carro Concept 4.JPG',
    './assets/carro-concept/Carro Concept 5.JPG'
  ]);
  
  setupModal(9, [
    './assets/carrotamanhoreal/Carro tamanho real 14.JPG',
    './assets/carrotamanhoreal/Carro tamanho real 15.JPG',
    './assets/carrotamanhoreal/Carro tamanho real 16.JPG'
  ]);
  
  document.getElementById('btnEnviar').addEventListener('click', function (e) {
    e.preventDefault(); // previne comportamento padrão

    const nome = document.getElementById('nome').value.trim();
    const telefone = document.getElementById('telefone').value.trim();
    const email = document.getElementById('email').value.trim();
    const cidade = document.getElementById('cidade').value.trim();

    if (!nome || !telefone || !email || !cidade) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    // Monta a mensagem para o WhatsApp
    const mensagem = `Olá! Me chamo ${nome}, meu telefone é ${telefone}, email: ${email}, e sou de ${cidade}. Gostaria de mais informações.`;

    // Monta o link para redirecionamento
    const numero = "5511916400424"; // Número do WhatsApp com DDI
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

    // Redireciona
    window.open(url, '_blank');
  });

  
  
  

    document.addEventListener('DOMContentLoaded', () => {
      const openBtns = document.querySelectorAll('.openModal');
      const closeBtns = document.querySelectorAll('.closeModal');
      const modais = document.querySelectorAll('.modal');
  
      openBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          const target = btn.dataset.target;
          const modal = document.getElementById(target);
          if (modal) modal.classList.remove('hidden');
        });
      });
  
      closeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          const modal = btn.closest('.modal');
          if (modal) modal.classList.add('hidden');
        });
      });
  
      const carousels = {};
      for (let i = 1; i <= 9; i++) {
        carousels[i] = {
          images: [
            `./assets/quadros/Quadro Ferrari.JPG`,
            `./assets/quadros/Quadro Mclaren .JPG`,
            `./assets/quadros/Quadro Mercedes.JPG`,
            `./assets/quadros/Quadros Red Bull.JPG`
          ],
          index: 0
        };
      }
  
      document.querySelectorAll('.nextBtn').forEach(btn => {
        btn.addEventListener('click', () => {
          const id = btn.dataset.carousel;
          const carousel = carousels[id];
          if (!carousel) return;
          carousel.index = (carousel.index + 1) % carousel.images.length;
          document.getElementById(`carouselImage${id}`).src = carousel.images[carousel.index];
        });
      });
  
      document.querySelectorAll('.prevBtn').forEach(btn => {
        btn.addEventListener('click', () => {
          const id = btn.dataset.carousel;
          const carousel = carousels[id];
          if (!carousel) return;
          carousel.index = (carousel.index - 1 + carousel.images.length) % carousel.images.length;
          document.getElementById(`carouselImage${id}`).src = carousel.images[carousel.index];
        });
      });
    });

    const videos = [
        './assets/video/video.mp4'
        
      ];
    
      let current = 0;
      const videoPlayer = document.getElementById('videoPlayer');
    
      function playVideo(index) {
        videoPlayer.style.opacity = 0;
    
        setTimeout(() => {
          videoPlayer.src = videos[index];
          videoPlayer.load();
          videoPlayer.play();
          videoPlayer.style.opacity = 1;
        }, 500);
      }
    
      playVideo(current);
    
      setInterval(() => {
        current = (current + 1) % videos.length;
        playVideo(current);
      }, 8000); // troca a cada 8 segundos
 
  
  
  
