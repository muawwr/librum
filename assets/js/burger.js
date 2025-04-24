document.addEventListener('DOMContentLoaded', function() {
    const burgerMenu = document.querySelector('.burger-menu');
    const burgerIcon = document.querySelector('.burger-icon');
    
    if (burgerIcon) {
        burgerIcon.addEventListener('click', function(e) {
            e.stopPropagation();
            burgerMenu.classList.toggle('active');
            
            // Prevent scrolling when menu is open
            if (burgerMenu.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });
    }
    
    // Close menu when clicking on a link
    const mobileNavLinks = document.querySelectorAll('.mobile-nav .nav_item a');
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', function() {
            burgerMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!burgerMenu.contains(e.target) && burgerMenu.classList.contains('active')) {
            burgerMenu.classList.remove('active');
        }
    });
}); 