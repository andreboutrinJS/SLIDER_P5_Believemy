// declaration du slides
let slideIndex = 1;
showSlides(slideIndex);
// fleche
function plusSlides(n){
showSlides(slideIndex += n);
}

// point
function currentSlides(n){
showSlides(slideIndex=n);
}


function showSlides(n) {
let i;
let slides =document.getElementsByClassName('slides');
let dots=document.getElementsByClassName('dot');

if(n>slides.length) {slideIndex=1}
if(n<1){ slideIndex= slides.length}

// cacher toutes les slides
for(let i =0; i<slides.length; i++) {
slides[i].style .display = 'none';
}
// retirer  active de tous les points
for(let i=0;i<dots.length;i++) {  
dots[i].classList.remove('active');
}
// afficher le slide demandée
slides[slideIndex -1].style.display = 'block';


// Ajouter active sur le point cliquer
dots[slideIndex -1].classList.add('active');        
}