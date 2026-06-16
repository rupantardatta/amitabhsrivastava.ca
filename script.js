// ============================================
// FORM HANDLING & INTERACTIONS
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    const feedbackForm = document.getElementById('feedbackForm');
    const formNotice = document.getElementById('formNotice');

    // Handle form submission
    feedbackForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = {
            name: document.getElementById('name').value.trim(),
            email: document.getElementById('email').value.trim(),
            phone: document.getElementById('phone').value.trim(),
            topic: document.getElementById('topic').value,
            message: document.getElementById('message').value.trim(),
            wantContact: document.getElementById('contact').checked,
            timestamp: new Date().toISOString()
        };

        // Validation
        if (!formData.name || !formData.email || !formData.topic || !formData.message) {
            showFormNotice('Please fill in all required fields.', 'error');
            return;
        }

        // Email validation
        if (!isValidEmail(formData.email)) {
            showFormNotice('Please enter a valid email address.', 'error');
            return;
        }

        // In a real application, you would send this data to a server
        // For now, we'll store it in localStorage as a demo
        saveFeedback(formData);
        
        // Show success message
        showFormNotice(
            '✓ Thank you for your feedback! We will review your message and respond shortly if you requested contact.',
            'success'
        );

        // Reset form
        feedbackForm.reset();

        // Scroll to notice
        formNotice.scrollIntoView({ behavior: 'smooth', block: 'center' });

        // Hide notice after 5 seconds
        setTimeout(() => {
            formNotice.style.display = 'none';
        }, 5000);
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#' || href === '') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add animation to platform cards on scroll
    observeElementsOnScroll();
});

/**
 * Validate email format
 */
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/**
 * Display form notice message
 */
function showFormNotice(message, type) {
    const notice = document.getElementById('formNotice');
    notice.textContent = message;
    notice.className = `form-notice ${type}`;
    notice.style.display = 'block';
}

/**
 * Save feedback (in a real app, this would send to a server)
 * For now, we'll use localStorage for demo purposes
 */
function saveFeedback(formData) {
    let allFeedback = JSON.parse(localStorage.getItem('campaignFeedback')) || [];
    allFeedback.push(formData);
    localStorage.setItem('campaignFeedback', JSON.stringify(allFeedback));
    
    console.log('Feedback saved:', formData);
    
    // In a production environment, you would:
    // 1. Send to a backend API endpoint
    // 2. Store in a database
    // 3. Send confirmation email to the user
    // 4. Send notification email to campaign team
    
    // Example (uncomment for real backend):
    /*
    fetch('/api/feedback', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => console.log('Feedback submitted:', data))
    .catch(error => console.error('Error:', error));
    */
}

/**
 * Animate elements as they come into view
 */
function observeElementsOnScroll() {
    const platformCards = document.querySelectorAll('.platform-card');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    platformCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
}

/**
 * Debug function to view all collected feedback (remove in production)
 */
function viewCollectedFeedback() {
    const feedback = JSON.parse(localStorage.getItem('campaignFeedback')) || [];
    console.log('All collected feedback:', feedback);
    return feedback;
}

// Example: Log feedback in console (for development)
// Uncomment to view: console.log(viewCollectedFeedback());

// -----------------------------
// Modals: Volunteer & Donate
// -----------------------------
document.addEventListener('DOMContentLoaded', function() {
    const overlay = document.getElementById('modalOverlay');
    const modalButtons = document.querySelectorAll('[data-modal]');
    const closeButtons = document.querySelectorAll('.modal-close');

    function openModal(id) {
        const modal = document.getElementById(id);
        if (!modal || !overlay) return;
        modal.hidden = false;
        overlay.hidden = false;
        document.body.style.overflow = 'hidden';
        modal.setAttribute('aria-hidden', 'false');
        overlay.setAttribute('aria-hidden', 'false');
        // focus first input
        const firstInput = modal.querySelector('input, textarea, button');
        if (firstInput) firstInput.focus();
    }

    function closeModal(modal) {
        if (!modal) return;
        modal.hidden = true;
        overlay.hidden = true;
        document.body.style.overflow = '';
        modal.setAttribute('aria-hidden', 'true');
        overlay.setAttribute('aria-hidden', 'true');
    }

    modalButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const id = this.dataset.modal;
            openModal(id);
        });
    });

    closeButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const modal = this.closest('.modal');
            closeModal(modal);
        });
    });

    if (overlay) {
        overlay.addEventListener('click', function() {
            document.querySelectorAll('.modal').forEach(m => { if(!m.hidden) closeModal(m); });
        });
    }

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            document.querySelectorAll('.modal').forEach(m => { if(!m.hidden) closeModal(m); });
        }
    });

    // Volunteer form handling
    const volunteerForm = document.getElementById('volunteerForm');
    const volunteerNotice = document.getElementById('volunteerNotice');
    if (volunteerForm) {
        volunteerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('v-name').value.trim();
            const email = document.getElementById('v-email').value.trim();
            const phone = document.getElementById('v-phone').value.trim();
            const message = document.getElementById('v-message').value.trim();

            if (!name || !email) {
                volunteerNotice.textContent = 'Please provide name and email.';
                volunteerNotice.className = 'modal-notice error';
                volunteerNotice.style.display = 'block';
                return;
            }

            if (!isValidEmail(email)) {
                volunteerNotice.textContent = 'Please enter a valid email address.';
                volunteerNotice.className = 'modal-notice error';
                volunteerNotice.style.display = 'block';
                return;
            }

            const payload = { name, email, phone, message, timestamp: new Date().toISOString() };
            let volunteers = JSON.parse(localStorage.getItem('campaignVolunteers')) || [];
            volunteers.push(payload);
            localStorage.setItem('campaignVolunteers', JSON.stringify(volunteers));

            volunteerNotice.textContent = '✓ Thanks — we will be in touch soon.';
            volunteerNotice.className = 'modal-notice success';
            volunteerNotice.style.display = 'block';
            volunteerForm.reset();

            setTimeout(() => {
                volunteerNotice.style.display = 'none';
                const modal = document.getElementById('volunteerModal');
                closeModal(modal);
            }, 2500);
        });
    }

    // Donate copy action
    const copyBtn = document.getElementById('copyDonateEmail');
    const interacEmailEl = document.getElementById('interacEmail');
    if (copyBtn && interacEmailEl) {
        copyBtn.addEventListener('click', async function() {
            const text = interacEmailEl.textContent.trim();
            try {
                await navigator.clipboard.writeText(text);
                copyBtn.textContent = 'Copied!';
                setTimeout(() => { copyBtn.textContent = 'Copy Email'; }, 2000);
            } catch (err) {
                console.error('Copy failed', err);
            }
        });
    }
});
