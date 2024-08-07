// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Scroll animations
const sections = document.querySelectorAll('section');
const options = {
    root: null,
    threshold: 0.1,
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate__animated', 'animate__fadeIn');
        } else {
            entry.target.classList.remove('animate__animated', 'animate__fadeIn');
        }
    });
}, options);

sections.forEach(section => {
    observer.observe(section);
});

// Modal for service details (optional feature)
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
        const title = card.querySelector('.card-title').innerText;
        const text = card.querySelector('.card-text').innerText;

        const modalHTML = `
            <div class="modal fade" id="serviceModal" tabindex="-1" role="dialog" aria-labelledby="modalTitle" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="modalTitle">${title}</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <p>${text}</p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        `;

        document.body.insertAdjacentHTML('beforeend', modalHTML);
        $('#serviceModal').modal('show');
        $('#serviceModal').on('hidden.bs.modal', function () {
            $(this).remove();
        });
    });
});
