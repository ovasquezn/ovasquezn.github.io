// Content Loader for Dynamic Portfolio Content
class ContentLoader {
    constructor() {
        this.projectsData = null;
        this.certificationsData = null;
        this.currentLanguage = 'en';
    }

    async loadContent() {
        try {
            // Load projects data
            const projectsResponse = await fetch('data/projects.json');
            this.projectsData = await projectsResponse.json();

            // Load certifications data
            const certificationsResponse = await fetch('data/certifications.json');
            this.certificationsData = await certificationsResponse.json();

            // Render content
            this.renderProjects();
            this.renderCertifications();

        } catch (error) {
            console.error('Error loading content:', error);
            // Fallback to static content if JSON fails
        }
    }

    renderProjects() {
        if (!this.projectsData) return;

        const projectsContainer = document.getElementById('projects-container');
        if (!projectsContainer) return;

        // Clear existing content
        projectsContainer.innerHTML = '';

        // Render Backend Projects
        this.renderProjectCategory('backend', this.projectsData.projects.backend);
        
        // Render Data Science Projects
        this.renderProjectCategory('data_science', this.projectsData.projects.data_science);
    }

    renderProjectCategory(category, projects) {
        const categoryTitle = category === 'backend' ? 
            (this.currentLanguage === 'es' ? 'Backend Development' : 'Backend Development') :
            (this.currentLanguage === 'es' ? 'Data Science & Machine Learning' : 'Data Science & Machine Learning');

        const categoryIcon = category === 'backend' ? 'fas fa-server' : 'fas fa-chart-line';

        const categoryHTML = `
            <div class="project-category">
                <h3 class="category-title">
                    <i class="${categoryIcon}"></i>
                    ${categoryTitle}
                </h3>
                <div class="project-grid">
                    ${projects.map(project => this.renderProjectCard(project)).join('')}
                </div>
            </div>
        `;

        const projectsContainer = document.getElementById('projects-container');
        projectsContainer.insertAdjacentHTML('beforeend', categoryHTML);
    }

    renderProjectCard(project) {
        const title = this.currentLanguage === 'es' ? project.title_es : project.title;
        const description = this.currentLanguage === 'es' ? project.description_es : project.description;
        
        const techTags = project.technologies.map(tech => 
            `<span class="tech-tag">${tech}</span>`
        ).join('');

        const linksHTML = this.renderProjectLinks(project.links);

        return `
            <div class="project-card">
                <div class="project-image">
                    <img src="${project.image}" alt="${title}">
                </div>
                <div class="project-content">
                    <h4>${title}</h4>
                    <p>${description}</p>
                    <div class="project-tech">
                        ${techTags}
                    </div>
                    <div class="project-links">
                        ${linksHTML}
                    </div>
                </div>
            </div>
        `;
    }

    renderProjectLinks(links) {
        let linksHTML = '';
        const comingSoonText = this.currentLanguage === 'es' ? 'Próximamente' : 'Coming Soon';
        
        // All links are disabled for now
        linksHTML += `<span class="btn btn-outline disabled">${comingSoonText}</span>`;
        
        return linksHTML;
    }

    renderCertifications() {
        if (!this.certificationsData) return;

        const certificationsContainer = document.getElementById('certifications-container');
        if (!certificationsContainer) return;

        const certificationsHTML = this.certificationsData.certifications.map(cert => {
            const title = this.currentLanguage === 'es' ? cert.title_es : cert.title;
            const issuer = this.currentLanguage === 'es' ? cert.issuer_es : cert.issuer;
            const description = this.currentLanguage === 'es' ? cert.description_es : cert.description;

            return `
                <div class="cert-card">
                    <div class="cert-icon">
                        <i class="${cert.icon}"></i>
                    </div>
                    <div class="cert-content">
                        <h3>${title}</h3>
                        <p class="cert-issuer">${issuer}</p>
                        <p class="cert-date">${cert.date}</p>
                        <p class="cert-desc">${description}</p>
                    </div>
                </div>
            `;
        }).join('');

        certificationsContainer.innerHTML = certificationsHTML;
    }

    setLanguage(language) {
        this.currentLanguage = language;
        this.renderProjects();
        this.renderCertifications();
    }
}

// Initialize content loader when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.contentLoader = new ContentLoader();
    window.contentLoader.loadContent();
    
    // Listen for language changes
    const languageSelector = document.getElementById('language-selector');
    if (languageSelector) {
        languageSelector.addEventListener('change', (e) => {
            window.contentLoader.setLanguage(e.target.value);
        });
    }

    // Sync with language manager if it exists
    if (window.languageManager) {
        const originalApplyLanguage = window.languageManager.applyLanguage;
        window.languageManager.applyLanguage = function() {
            originalApplyLanguage.call(this);
            if (window.contentLoader) {
                window.contentLoader.setLanguage(this.currentLanguage);
            }
        };
    }
});
