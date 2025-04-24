document.addEventListener('DOMContentLoaded', function() {
    // Функционал переключения звезды для страницы каталога
    const catalogFavButtons = document.querySelectorAll('.catalog_fav');
    
    catalogFavButtons.forEach(button => {
        // Сохраняем состояние избранного
        button.dataset.favorite = 'false';
        
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const starImg = this.querySelector('img');
            
            if (this.dataset.favorite === 'false') {
                // Добавить в избранное
                starImg.src = 'assets/images/catalog/star-filled.svg';
                this.dataset.favorite = 'true';
                this.classList.add('active');
            } else {
                // Удалить из избранного
                starImg.src = 'assets/images/catalog/fav.svg';
                this.dataset.favorite = 'false';
                this.classList.remove('active');
            }
        });
    });
}); 