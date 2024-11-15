// Handle sidenote highlighting and interactions
document.addEventListener('DOMContentLoaded', function() {
    // Handle sidenote word interactions
    document.querySelectorAll('.sidenote-word').forEach(word => {
        word.addEventListener('mouseenter', () => {
            const noteId = `sidenote-${word.dataset.note}`;
            const sidenote = document.getElementById(noteId);
            if (sidenote) {
                sidenote.classList.add('highlight');
            }
        });

        word.addEventListener('mouseleave', () => {
            const noteId = `sidenote-${word.dataset.note}`;
            const sidenote = document.getElementById(noteId);
            if (sidenote) {
                sidenote.classList.remove('highlight');
            }
        });

        word.addEventListener('click', (e) => {
            e.preventDefault();
            const noteId = `sidenote-${word.dataset.note}`;
            const sidenote = document.getElementById(noteId);
            if (sidenote) {
                sidenote.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        });
    });

    // Position preview boxes
    document.querySelectorAll('.sidenote-word').forEach(word => {
        const preview = word.querySelector('.preview-box');
        if (preview) {
            word.addEventListener('mouseenter', () => {
                const rect = word.getBoundingClientRect();
                const isRightHalf = rect.left > window.innerWidth / 2;
                
                if (isRightHalf) {
                    preview.style.right = '0';
                    preview.style.left = 'auto';
                } else {
                    preview.style.left = '0';
                    preview.style.right = 'auto';
                }
            });
        }
    });
});