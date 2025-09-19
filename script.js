// Personal Website JavaScript
// Handles dynamic content loading, navigation, and form interactions

document.addEventListener('DOMContentLoaded', function() {
    // Initialize the website
    initializeWebsite();
});

function initializeWebsite() {
    // Load content from config
    loadContentFromConfig();
    
    // Initialize navigation
    initializeNavigation();
    
    // Initialize contact form
    initializeContactForm();
    
    // Initialize smooth scrolling
    initializeSmoothScrolling();
    
    // Initialize animations
    initializeAnimations();
}

function loadContentFromConfig() {
    // Wait for config to be loaded
    if (typeof CONFIG === 'undefined') {
        setTimeout(loadContentFromConfig, 100);
        return;
    }

    // Update SEO meta tags
    updateSEOTags();
    
    // Update navigation
    updateNavigation();
    
    // Update homepage content
    updateHomepageContent();
    
    // Update about section
    updateAboutContent();
    
    // Update portfolio section
    updatePortfolioContent();
    
    // Update leadership section
    updateLeadershipContent();
    
    // Update contact section
    updateContactContent();
    
    // Update footer
    updateFooter();
}

function updateSEOTags() {
    const config = CONFIG.seo;
    
    // Update page title
    document.title = config.title;
    document.getElementById('page-title').textContent = config.title;
    
    // Update meta description
    document.getElementById('page-description').setAttribute('content', config.description);
    
    // Update meta keywords
    document.getElementById('page-keywords').setAttribute('content', config.keywords);
    
    // Update meta author
    document.getElementById('page-author').setAttribute('content', config.author);
    
    // Update Open Graph tags
    document.getElementById('og-title').setAttribute('content', config.title);
    document.getElementById('og-description').setAttribute('content', config.description);
    document.getElementById('og-image').setAttribute('content', config.ogImage);
    
    // Update Twitter tags
    document.getElementById('twitter-title').setAttribute('content', config.title);
    document.getElementById('twitter-description').setAttribute('content', config.description);
    document.getElementById('twitter-image').setAttribute('content', config.ogImage);
}

function updateNavigation() {
    const config = CONFIG.navigation;
    
    document.getElementById('nav-name').textContent = CONFIG.personal.name;
    document.getElementById('nav-home').textContent = config.home;
    document.getElementById('nav-about').textContent = config.about;
    document.getElementById('nav-portfolio').textContent = config.portfolio;
    document.getElementById('nav-leadership').textContent = config.leadership;
    document.getElementById('nav-contact').textContent = config.contact;
}

function updateHomepageContent() {
    const config = CONFIG.homepage;
    const personal = CONFIG.personal;
    
    // Update hero section
    document.getElementById('hero-title').textContent = config.heroTitle;
    document.getElementById('hero-subtitle').textContent = config.heroSubtitle;
    document.getElementById('cta-primary').textContent = config.ctaPrimary;
    document.getElementById('cta-secondary').textContent = config.ctaSecondary;
    
    // Update headshot
    const headshot = document.getElementById('hero-headshot');
    headshot.src = personal.headshot;
    headshot.alt = personal.name;
    
    // Update stats
    config.quickStats.forEach((stat, index) => {
        document.getElementById(`stat-${index + 1}`).textContent = stat.number;
        document.getElementById(`stat-label-${index + 1}`).textContent = stat.label;
    });
}

function updateAboutContent() {
    const config = CONFIG.about;
    
    // Update section header
    document.getElementById('about-title').textContent = config.title;
    document.getElementById('about-bio').textContent = CONFIG.personal.bio;
    
    // Update education
    document.getElementById('education-title').textContent = config.education.title;
    if (config.education.items.length > 0) {
        const education = config.education.items[0];
        document.getElementById('degree-1').textContent = education.degree;
        document.getElementById('institution-1').textContent = education.institution;
        document.getElementById('year-1').textContent = education.year;
        document.getElementById('education-desc-1').textContent = education.description;
    }
    
    // Update experience
    document.getElementById('experience-title').textContent = config.experience.title;
    if (config.experience.items.length > 0) {
        const experience = config.experience.items[0];
        document.getElementById('position-1').textContent = experience.position;
        document.getElementById('company-1').textContent = experience.company;
        document.getElementById('period-1').textContent = experience.period;
        document.getElementById('experience-desc-1').textContent = experience.description;
    }
    
    // Update skills
    document.getElementById('skills-title').textContent = config.skills.title;
    config.skills.categories.forEach((category, index) => {
        document.getElementById(`skill-cat-${index + 1}`).textContent = category.name;
        category.skills.forEach((skill, skillIndex) => {
            const skillElement = document.getElementById(`skill-${index + 1}-${skillIndex + 1}`);
            if (skillElement) {
                skillElement.textContent = skill;
            }
        });
    });
}

function updatePortfolioContent() {
    const config = CONFIG.portfolio;
    
    // Update section header
    document.getElementById('portfolio-title').textContent = config.title;
    document.getElementById('portfolio-subtitle').textContent = config.subtitle;
    
    // Update projects
    config.projects.forEach((project, index) => {
        const projectIndex = index + 1;
        
        // Update project image
        const projectImg = document.getElementById(`project-img-${projectIndex}`);
        if (projectImg) {
            projectImg.src = project.image;
            projectImg.alt = project.title;
        }
        
        // Update project content
        document.getElementById(`project-title-${projectIndex}`).textContent = project.title;
        document.getElementById(`project-category-${projectIndex}`).textContent = project.category;
        document.getElementById(`project-desc-${projectIndex}`).textContent = project.description;
        
        // Update project link
        const projectLink = document.getElementById(`project-link-${projectIndex}`);
        if (projectLink) {
            projectLink.href = project.link;
        }
        
        // Update technologies
        const techContainer = document.getElementById(`project-tech-${projectIndex}`);
        if (techContainer) {
            techContainer.innerHTML = '';
            project.technologies.forEach(tech => {
                const techTag = document.createElement('span');
                techTag.className = 'tech-tag';
                techTag.textContent = tech;
                techContainer.appendChild(techTag);
            });
        }
    });
}

function updateLeadershipContent() {
    const config = CONFIG.leadership;
    
    // Update section header
    document.getElementById('leadership-title').textContent = config.title;
    document.getElementById('leadership-subtitle').textContent = config.subtitle;
    
    // Update leadership roles
    config.roles.forEach((role, index) => {
        const roleIndex = index + 1;
        
        document.getElementById(`org-${roleIndex}`).textContent = role.organization;
        document.getElementById(`period-${roleIndex}`).textContent = role.period;
        document.getElementById(`role-${roleIndex}`).textContent = role.position;
        document.getElementById(`leadership-desc-${roleIndex}`).textContent = role.description;
        
        // Update achievements
        const achievementsList = document.getElementById(`achievements-${roleIndex}`);
        if (achievementsList) {
            achievementsList.innerHTML = '';
            role.achievements.forEach(achievement => {
                const li = document.createElement('li');
                li.textContent = achievement;
                achievementsList.appendChild(li);
            });
        }
    });
}

function updateContactContent() {
    const config = CONFIG.contact;
    const personal = CONFIG.personal;
    
    // Update section header
    document.getElementById('contact-title').textContent = config.title;
    document.getElementById('contact-subtitle').textContent = config.subtitle;
    
    // Update contact info
    document.getElementById('contact-email').textContent = personal.email;
    document.getElementById('contact-linkedin').textContent = config.info.linkedin;
    document.getElementById('contact-linkedin').href = personal.linkedin;
    document.getElementById('contact-availability').textContent = config.info.availability;
    
    // Update form labels
    document.getElementById('name-label').textContent = config.form.nameLabel;
    document.getElementById('email-label').textContent = config.form.emailLabel;
    document.getElementById('subject-label').textContent = config.form.subjectLabel;
    document.getElementById('message-label').textContent = config.form.messageLabel;
    document.getElementById('submit-btn').textContent = config.form.submitButton;
}

function updateFooter() {
    const config = CONFIG.footer;
    
    document.getElementById('footer-copyright').textContent = config.copyright;
    document.getElementById('footer-built').textContent = config.builtWith;
}

function initializeNavigation() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    // Mobile menu toggle
    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });
    
    // Active navigation highlighting
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-link');
        
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

function initializeContactForm() {
    const form = document.getElementById('contact-form');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(form);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            subject: formData.get('subject'),
            message: formData.get('message')
        };
        
        // Show loading state
        const submitBtn = document.getElementById('submit-btn');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        // Simulate form submission (replace with actual form handling)
        setTimeout(() => {
            // Show success message
            showMessage(CONFIG.contact.form.successMessage, 'success');
            
            // Reset form
            form.reset();
            
            // Reset button
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 2000);
    });
}

function showMessage(message, type) {
    // Remove existing messages
    const existingMessages = document.querySelectorAll('.message');
    existingMessages.forEach(msg => msg.remove());
    
    // Create new message
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${type}`;
    messageDiv.textContent = message;
    
    // Insert message before form
    const form = document.getElementById('contact-form');
    form.parentNode.insertBefore(messageDiv, form);
    
    // Auto-remove message after 5 seconds
    setTimeout(() => {
        messageDiv.remove();
    }, 5000);
}

function initializeSmoothScrolling() {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

function initializeAnimations() {
    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.about-card, .portfolio-item, .leadership-item, .contact-item');
    animateElements.forEach(el => {
        observer.observe(el);
    });
}

// Utility function to handle external links
function handleExternalLinks() {
    document.querySelectorAll('a[href^="http"]').forEach(link => {
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer');
    });
}

// Initialize external link handling
document.addEventListener('DOMContentLoaded', handleExternalLinks);
