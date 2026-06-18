// ============================================
// FORM HANDLING & INTERACTIONS
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    const feedbackForm = document.getElementById('feedbackForm');
    const formNotice = document.getElementById('formNotice');
    const feedbackTarget = document.getElementById('feedbackTarget');
    let feedbackSubmitting = false;

    feedbackTarget.addEventListener('load', function() {
        if (!feedbackSubmitting) return;
        feedbackSubmitting = false;
        showFormNotice('✓ Thank you for your feedback! Your submission has been recorded.', 'success');
        feedbackForm.reset();
        formNotice.scrollIntoView({ behavior: 'smooth', block: 'center' });
        setTimeout(() => { formNotice.style.display = 'none'; }, 5000);
    });

    // Handle feedback form submission
    feedbackForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const topic = document.getElementById('topic').value;
        const message = document.getElementById('message').value.trim();

        // Validation
        if (!name || !email || !topic || !message) {
            showFormNotice('Please fill in all required fields.', 'error');
            return;
        }

        // Email validation
        if (!isValidEmail(email)) {
            showFormNotice('Please enter a valid email address.', 'error');
            return;
        }

        showFormNotice('Submitting your feedback...', 'success');
        document.getElementById('f-submittedAt').value = new Date().toISOString();
        feedbackSubmitting = true;
        feedbackForm.target = 'feedbackTarget';
        feedbackForm.submit();

        setTimeout(() => {
            if (feedbackSubmitting) {
                feedbackSubmitting = false;
                showFormNotice('There was a problem submitting feedback. Please try again or contact us directly.', 'error');
            }
        }, 10000);
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
 * Submit feedback to the Google Apps Script web app
 */
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
    const volunteerTarget = document.getElementById('volunteerTarget');
    let volunteerSubmitting = false;

    volunteerTarget.addEventListener('load', function() {
        if (!volunteerSubmitting) return;
        volunteerSubmitting = false;
        volunteerNotice.textContent = '✓ Thanks for volunteering! We will be in touch soon.';
        volunteerNotice.className = 'modal-notice success';
        volunteerNotice.style.display = 'block';
        volunteerForm.reset();

        setTimeout(() => {
            volunteerNotice.style.display = 'none';
            const modal = document.getElementById('volunteerModal');
            closeModal(modal);
        }, 2500);
    });

    if (volunteerForm) {
        volunteerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('v-name').value.trim();
            const email = document.getElementById('v-email').value.trim();

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

            volunteerNotice.textContent = 'Submitting your information...';
            volunteerNotice.className = 'modal-notice success';
            volunteerNotice.style.display = 'block';
            document.getElementById('v-submittedAt').value = new Date().toISOString();

            volunteerSubmitting = true;
            volunteerForm.target = 'volunteerTarget';
            volunteerForm.submit();

            setTimeout(() => {
                if (volunteerSubmitting) {
                    volunteerSubmitting = false;
                    volunteerNotice.textContent = 'There was a problem submitting your volunteer request. Please try again or contact us directly.';
                    volunteerNotice.className = 'modal-notice error';
                }
            }, 10000);
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
