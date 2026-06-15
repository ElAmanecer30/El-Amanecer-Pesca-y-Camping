
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
