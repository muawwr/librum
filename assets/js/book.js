document.addEventListener('DOMContentLoaded', function() {
    // Функционал для раскрытия полного описания книги
    const toggleButton = document.querySelector('.toggle_description');
    const descriptionContainer = document.querySelector('.book_description_container');
    
    if (toggleButton && descriptionContainer) {
        toggleButton.addEventListener('click', function() {
            descriptionContainer.classList.toggle('expanded');
            
            if (descriptionContainer.classList.contains('expanded')) {
                toggleButton.textContent = 'Свернуть';
            } else {
                toggleButton.textContent = 'Подробнее';
            }
        });
    }
    
    // Функционал переключения состояния кнопки избранного
    const bookFavButton = document.querySelector('.book_fav');
    
    if (bookFavButton) {
        // Сохраняем состояние избранного
        bookFavButton.dataset.favorite = 'false';
        
        bookFavButton.addEventListener('click', function(e) {
            e.preventDefault();
            const favImg = this.querySelector('img');
            
            if (this.dataset.favorite === 'false') {
                // Добавить в избранное
                favImg.src = 'assets/images/book/star-filled.svg';
                this.dataset.favorite = 'true';
                this.classList.add('active');
            } else {
                // Удалить из избранного
                favImg.src = 'assets/images/book/favorite.svg';
                this.dataset.favorite = 'false';
                this.classList.remove('active');
            }
        });
    }
}); 