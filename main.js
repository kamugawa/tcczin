
      //HAMBURG
document.addEventListener("DOMContentLoaded", function() {
    const mainContent = document.querySelector("main");
    mainContent.classList.add("visible");


    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('nav ul');


    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');


            navMenu.classList.toggle('show');
        });
    }
//-----------------------------------------------
   


     //SLIDES INDEX
    let currentSlide = 0;

    function showSlide(index) {
        const slides = document.querySelectorAll('.carousel-item');
        if (index >= slides.length) currentSlide = 0;
        if (index < 0) currentSlide = slides.length - 1;

        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            if (i === currentSlide) {
                slide.classList.add('active');
            }
        });
    }

    function nextSlide() {
        currentSlide++;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide--;
        showSlide(currentSlide);
    }

   
    const nextButton = document.querySelector('.carousel-controls .next');
    const prevButton = document.querySelector('.carousel-controls .prev');

    if (nextButton) {
        nextButton.addEventListener('click', nextSlide);
    }

    if (prevButton) {
        prevButton.addEventListener('click', prevSlide);
    }

  
    showSlide(currentSlide);

   
    const slider = document.querySelector('.themes-wrapper');
    let isDown = false;
    let scrollLeft;
    let scrollSpeed = window.innerWidth < 768 ? 0.8 : 0.6; 
    let scrollPos = 0;

    window.addEventListener('resize', () => {
        scrollSpeed = window.innerWidth < 768 ? 0.8 : 0.6;
    });

   
    function autoScroll() {
        if (!isDown && slider.scrollWidth > slider.clientWidth) {
            scrollPos += scrollSpeed;
            slider.scrollLeft = scrollPos;

          
            if (scrollPos >= slider.scrollWidth / 2) {
                scrollPos = 0; 
            }
        }
        
        requestAnimationFrame(autoScroll); 
    }


    if (slider) {
        autoScroll();
    }
});
//---------------------------------




//SOBRE "FAQ"
let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    if (index >= slides.length) currentSlide = 0;
    if (index < 0) currentSlide = slides.length - 1;

    slides.forEach((slide, i) => {
        slide.classList.remove('active', 'fade-in', 'fade-out'); 
        if (i === currentSlide) {
            slide.classList.add('fade-in'); 
            slide.classList.add('active'); 
        } else {
            slide.classList.add('fade-out'); 
        }
    });
}

function nextSlide() {
    currentSlide++;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide--;
    showSlide(currentSlide);
}


showSlide(currentSlide);


function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
//------------------------------




  //FUNÇÃO VOLTA AO TOPO
window.onscroll = function () {
    const backToTopButton = document.getElementById('backToTop');
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopButton.style.display = 'flex';
    } else {
        backToTopButton.style.display = 'none';
    }
};
//--------------------------------------------------





  //"MODAL" Trabalhos +no index
const modal = document.getElementById("myModal");
const modalImg = document.getElementById("modal-img"); 
const closeButton = document.getElementsByClassName("close")[0]; 


const smallImages = document.querySelectorAll('.carrossel-item img'); 

function openModal(imageSrc) {
    modal.style.display = "flex"; 
    modal.classList.add("show"); 
    modalImg.src = imageSrc; 
    document.body.style.overflow = "hidden"; 
}


function closeModal() {
    modal.classList.remove("show"); 
    setTimeout(() => {
        modal.style.display = "none"; 
    }, 500); 
    document.body.style.overflow = "auto"; 
}


function toggleModal(imageSrc) {
    if (modal.style.display === "flex") {
        closeModal(); 
    } else {
        openModal(imageSrc); 
    }
}



modal.addEventListener("click", (event) => {
    if (event.target === modal) closeModal(); 
});


smallImages.forEach((img) => {
    img.addEventListener('click', () => openModal(img.src)); 
});


closeButton.addEventListener("click", closeModal);
//---------------------------------------