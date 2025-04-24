document.addEventListener('DOMContentLoaded', function() {
    const slider = document.getElementById('newsSlider');
    const progressBar = document.getElementById('progressBar');
    
    if (slider && progressBar) {
        let isScrolling = false;
        const cardWidth = slider.querySelector('.news_card').offsetWidth;
        const cardGap = 20; // Значение gap из CSS
        const totalWidth = slider.scrollWidth;
        const visibleWidth = slider.offsetWidth;
        const maxScroll = totalWidth - visibleWidth;
        
        // Обновление прогресс-бара
        function updateProgressBar() {
            const scrollPercentage = (slider.scrollLeft / maxScroll) * 100;
            progressBar.style.width = `${scrollPercentage}%`;
        }
        
        // Инициализация прогресс-бара
        updateProgressBar();
        
        // Обработка события прокрутки колесика мыши
        slider.addEventListener('wheel', function(e) {
            e.preventDefault();
            
            if (isScrolling) return;
            isScrolling = true;
            
            // Определяем направление прокрутки
            const direction = Math.sign(e.deltaY);
            const scrollAmount = (cardWidth + cardGap) * direction;
            
            // Плавно прокручиваем до следующей карточки
            slider.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            });
            
            // Обновляем прогресс-бар
            setTimeout(() => {
                updateProgressBar();
                isScrolling = false;
            }, 300);
        });
        
        // Обновление прогресс-бара при ручной прокрутке
        slider.addEventListener('scroll', function() {
            if (!isScrolling) {
                updateProgressBar();
            }
        });
        
        // Обработка тач-событий для мобильных устройств
        let touchStartX = 0;
        let touchEndX = 0;
        
        slider.addEventListener('touchstart', function(e) {
            touchStartX = e.changedTouches[0].screenX;
        });
        
        slider.addEventListener('touchend', function(e) {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        });
        
        function handleSwipe() {
            const swipeDistance = touchStartX - touchEndX;
            
            if (Math.abs(swipeDistance) > 50) {
                const direction = Math.sign(swipeDistance);
                const scrollAmount = (cardWidth + cardGap) * direction;
                
                slider.scrollBy({
                    left: scrollAmount,
                    behavior: 'smooth'
                });
                
                setTimeout(updateProgressBar, 300);
            }
        }
    }
    
    // Функционал переключения звезды для блока новинок
    const starButtons = document.querySelectorAll('.n_card_b, .n_card_b_2, .n_card_b_3');
    
    starButtons.forEach(button => {
        // Сохраняем состояние избранного
        button.dataset.favorite = 'false';
        
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const starImg = this.querySelector('img');
            
            if (this.dataset.favorite === 'false') {
                // Добавить в избранное
                starImg.src = 'assets/images/favorite/star-filled.svg';
                this.dataset.favorite = 'true';
                this.classList.add('active');
            } else {
                // Удалить из избранного
                starImg.src = 'assets/images/news/star.svg';
                this.dataset.favorite = 'false';
                this.classList.remove('active');
            }
        });
    });
    
    // Функционал переключения звезды для блока каталога
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