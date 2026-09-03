document.addEventListener('DOMContentLoaded', () => {
  // Controle de Luminosidade (Modo Claro / Escuro)
  const themeToggleBtn = document.getElementById('theme-toggle');

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      document.body.classList.toggle('light-mode');
      
      if (document.body.classList.contains('light-mode')) {
        themeToggleBtn.textContent = '👁️ Modo Escuro';
      } else {
        themeToggleBtn.textContent = '👁️ Modo Luz';
      }
    });
  }

  // Botão Único de Curtida Geral do Blog
  const likeBlogBtn = document.getElementById('like-blog-btn');
  const likeCountSpan = document.getElementById('blog-like-count');

  if (likeBlogBtn && likeCountSpan) {
    const btnText = likeBlogBtn.querySelector('.btn-text');
    let isLiked = false;
    let totalLikes = 0;

    likeBlogBtn.addEventListener('click', () => {
      if (!isLiked) {
        totalLikes++;
        isLiked = true;
        btnText.textContent = 'Apoiado!';
        likeBlogBtn.classList.add('liked');
      } else {
        totalLikes--;
        isLiked = false;
        btnText.textContent = 'Apoiar o Blog';
        likeBlogBtn.classList.remove('liked');
      }
      
      likeCountSpan.textContent = totalLikes;
    });
  }
});