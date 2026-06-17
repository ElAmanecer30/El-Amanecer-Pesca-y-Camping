
const filterButtons = document.querySelectorAll('.filter');
const productCards = document.querySelectorAll('.product-card');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    const selected = button.dataset.filter;

    productCards.forEach(card => {
      const category = card.dataset.category;
      card.style.display = selected === 'Todos' || selected === category ? 'flex' : 'none';
    });
  });
});


document.querySelectorAll('img').forEach(img => {
  img.addEventListener('error', () => {
    img.style.display = 'none';
  });
});


// v10: galerías de cañas
document.querySelectorAll('.cana-galeria').forEach(card=>{
 const mainImg=card.querySelector('.gallery-main img');
 const mainBtn=card.querySelector('.gallery-main');
 card.querySelectorAll('.thumb-btn').forEach(btn=>{
   btn.addEventListener('click',()=>{mainImg.src=btn.dataset.src;});
 });
 mainBtn.addEventListener('click',()=>{
   window.__currentGallery=card.querySelector('.gallery-box').dataset.gallery.split('|');
   window.__currentIndex=window.__currentGallery.indexOf(mainImg.getAttribute('src'));
   if(window.__currentIndex<0) window.__currentIndex=0;
   openModalImage();
 });
});
function openModalImage(){const modal=document.getElementById('imageModal');const img=document.getElementById('modalImage');if(!modal||!img||!window.__currentGallery)return;img.src=window.__currentGallery[window.__currentIndex];modal.classList.add('open');modal.setAttribute('aria-hidden','false');}
function closeModalImage(){const modal=document.getElementById('imageModal');if(!modal)return;modal.classList.remove('open');modal.setAttribute('aria-hidden','true');}
function moveModal(step){if(!window.__currentGallery)return;window.__currentIndex=(window.__currentIndex+step+window.__currentGallery.length)%window.__currentGallery.length;openModalImage();}
document.querySelector('.modal-close')?.addEventListener('click',closeModalImage);
document.querySelector('.modal-prev')?.addEventListener('click',()=>moveModal(-1));
document.querySelector('.modal-next')?.addEventListener('click',()=>moveModal(1));
document.getElementById('imageModal')?.addEventListener('click',e=>{if(e.target.id==='imageModal')closeModalImage();});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModalImage();if(document.getElementById('imageModal')?.classList.contains('open')){if(e.key==='ArrowLeft')moveModal(-1);if(e.key==='ArrowRight')moveModal(1);}});
