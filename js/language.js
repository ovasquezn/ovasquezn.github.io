// Language System for Portfolio
class LanguageManager {
    constructor() {
        this.currentLanguage = 'en';
        this.translations = {
            en: {
                // Navigation
                'nav.about': 'About Me',
                'nav.projects': 'Projects',
                'nav.research': 'Personal Interests',
                'nav.contact': 'Contact',
                'nav.blog': 'Blog',
                'nav.certifications': 'Certifications',
                
                // Hero Section
                'hero.greeting': 'Hello, I\'m',
                'hero.subtitle': 'Backend Developer & Data Scientist',
                'hero.role': 'Founder at Silcon Tech Solutions',
                'hero.location': 'Concepción, Chile',
                'hero.description': 'Expert in building scalable backend systems, designing RESTful APIs, and implementing data-driven solutions. Passionate about transforming complex data into actionable insights and creating high-performance applications that solve real-world problems.',
                'hero.cta.projects': 'View Projects',
                'hero.cta.contact': 'Get in Touch',
                
                // About Section
                'about.title': 'About Me',
                'about.description1': 'I am a multidisciplinary professional from Chile with training in Computer Engineering and Physics, and founder of Silcon Tech Solutions. My professional experience focuses on backend development and data analysis, while astrophysics remains a passionate personal hobby that enriches my technical perspective.',
                'about.description2': 'I have worked on various professional projects ranging from RESTful APIs to data analysis solutions. In my free time, I explore science and technology topics, from astrophysics to computational simulations and mathematical modeling.',
                'about.skills.backend': 'Backend Development',
                'about.skills.data': 'Data Science & ML',
                'about.skills.databases': 'Databases',
                'about.skills.tools': 'Tools & DevOps',
                
                // Projects Section
                'projects.title': 'Featured Projects',
                'projects.backend.title': 'Backend Development',
                'projects.data.title': 'Data Science & Machine Learning',
                'projects.reservations.title': 'Reservations Management API',
                'projects.reservations.desc': 'Complete backend system for automating restaurant reservations, developed with Node.js, Express and PostgreSQL.',
                'projects.auth.title': 'Authentication Platform',
                'projects.auth.desc': 'Secure backend with Django and JWT for user authentication, including granular roles and permissions.',
                'projects.sales.title': 'Sales Prediction Model',
                'projects.sales.desc': 'Machine Learning model in Python with scikit-learn for sales prediction with temporal trend analysis.',
                'projects.dashboard.title': 'Data Analysis Dashboard',
                'projects.dashboard.desc': 'Interactive visualization with Power BI and Python for business data analysis and performance metrics.',
                'projects.btns.documentation': 'Documentation',
                'projects.btns.code': 'Code',
                'projects.btns.demo': 'Live Demo',
                
                // Research Section
                'research.title': 'Personal Interests',
                'research.description': 'In my free time, I explore science and technology topics, from astrophysics to computational simulations and mathematical modeling. These interests complement my professional work and allow me to apply my technical skills in different contexts.',
                'research.astrophysics.title': 'Astrophysics',
                'research.astronomy.title': 'Astronomy',
                'research.astrophotography.title': 'Astrophotography',
                'research.physics.title': 'Physics',
                'research.mathematics.title': 'Mathematics',
                'research.simulations.title': 'Computational Simulations',
                'research.publications.title': 'Personal Blog & Explorations',
                'research.publications.galaxies': 'Studies of high-redshift galaxy evolution',
                'research.publications.morphology': 'Morphological analysis of early galaxies using COSMOS17',
                'research.publications.navier': 'Navier-Stokes equations simulation',
                
                // Certifications Section
                'certifications.title': 'Certifications & Achievements',
                'certifications.aws.desc': 'Cloud Solutions Architect with expertise in AWS services and infrastructure design.',
                'certifications.google.desc': 'Professional Data Engineer certified in Google Cloud Platform technologies.',
                'certifications.kubernetes.desc': 'Certified Kubernetes Administrator with hands-on experience in container orchestration.',
                'certifications.python.desc': 'Advanced Python programming certification with focus on data science applications.',
                
                
                
        // Contact Section
        'contact.title': 'Get In Touch',
        'contact.description': 'I\'m always open to new opportunities, interesting projects and collaborations in backend development, data analysis, and software engineering.',

        // Progress Banner
        'progress.banner': 'Portfolio in Progress - Content Coming Soon',
        'progress.coming_soon': 'Coming Soon',
                'contact.project.title': 'Have a project in mind?',
                'contact.project.desc': 'Let\'s talk about how I can help you make it happen.',
                'contact.btns.message': 'Send Message',
                
                // Footer
                'footer.rights': 'All rights reserved.',
                'footer.developed': 'Developed with ❤️ and lots of coffee',
                
                // Language Selector
                'lang.english': 'English',
                'lang.spanish': 'Español'
            },
            es: {
                // Navigation
                'nav.about': 'Sobre Mí',
                'nav.projects': 'Proyectos',
                'nav.research': 'Intereses Personales',
                'nav.contact': 'Contacto',
                'nav.blog': 'Blog',
                'nav.certifications': 'Certificaciones',
                
                // Hero Section
                'hero.greeting': 'Hola, soy',
                'hero.subtitle': 'Backend Developer & Data Scientist',
                'hero.role': 'Fundador en Silcon Tech Solutions',
                'hero.location': 'Concepción, Chile',
                'hero.description': 'Experto en construir sistemas backend escalables, diseñar APIs RESTful e implementar soluciones basadas en datos. Apasionado por transformar datos complejos en insights accionables y crear aplicaciones de alto rendimiento que resuelven problemas del mundo real.',
                'hero.cta.projects': 'Ver Proyectos',
                'hero.cta.contact': 'Contactar',
                
                // About Section
                'about.title': 'Sobre Mí',
                'about.description1': 'Soy un profesional multidisciplinario de Chile con formación en Ingeniería en Informática y Física, y fundador de Silcon Tech Solutions. Mi experiencia profesional se centra en el desarrollo backend y el análisis de datos, mientras que la astrofísica sigue siendo una pasión personal que enriquece mi perspectiva técnica.',
                'about.description2': 'He trabajado en diversos proyectos profesionales que van desde APIs RESTful hasta soluciones de análisis de datos. En mi tiempo libre, exploro temas de ciencia y tecnología, desde astrofísica hasta simulaciones computacionales y modelado matemático.',
                'about.skills.backend': 'Backend Development',
                'about.skills.data': 'Data Science & ML',
                'about.skills.databases': 'Bases de Datos',
                'about.skills.tools': 'Herramientas & DevOps',
                
                // Projects Section
                'projects.title': 'Proyectos Destacados',
                'projects.backend.title': 'Backend Development',
                'projects.data.title': 'Data Science & Machine Learning',
                'projects.reservations.title': 'API de Gestión de Reservas',
                'projects.reservations.desc': 'Sistema backend completo para automatizar reservas en restaurantes, desarrollado con Node.js, Express y PostgreSQL.',
                'projects.auth.title': 'Plataforma de Autenticación',
                'projects.auth.desc': 'Backend seguro con Django y JWT para autenticación de usuarios, incluyendo roles y permisos granulares.',
                'projects.sales.title': 'Modelo de Predicción de Ventas',
                'projects.sales.desc': 'Modelo de Machine Learning en Python con scikit-learn para predicción de ventas con análisis de tendencias temporales.',
                'projects.dashboard.title': 'Dashboard de Análisis de Datos',
                'projects.dashboard.desc': 'Visualización interactiva con Power BI y Python para análisis de datos empresariales y métricas de rendimiento.',
                'projects.btns.documentation': 'Documentación',
                'projects.btns.code': 'Código',
                'projects.btns.demo': 'Ver Demo',
                
                // Research Section
                'research.title': 'Intereses Personales',
                'research.description': 'En mi tiempo libre, exploro temas de ciencia y tecnología, desde astrofísica hasta simulaciones computacionales y modelado matemático. Estos intereses complementan mi trabajo profesional y me permiten aplicar mis habilidades técnicas en diferentes contextos.',
                'research.astrophysics.title': 'Astrofísica',
                'research.astronomy.title': 'Astronomía',
                'research.astrophotography.title': 'Astrofotografía',
                'research.physics.title': 'Física',
                'research.mathematics.title': 'Matemáticas',
                'research.simulations.title': 'Simulaciones Computacionales',
                'research.publications.title': 'Blog Personal y Exploraciones',
                'research.publications.galaxies': 'Estudios de evolución de galaxias de alto redshift',
                'research.publications.morphology': 'Análisis morfológico de galaxias tempranas usando COSMOS17',
                'research.publications.navier': 'Simulación de ecuaciones de Navier-Stokes',
                
                // Certifications Section
                'certifications.title': 'Certificaciones y Logros',
                'certifications.aws.desc': 'Arquitecto de Soluciones Cloud con experiencia en servicios AWS y diseño de infraestructura.',
                'certifications.google.desc': 'Ingeniero de Datos Profesional certificado en tecnologías de Google Cloud Platform.',
                'certifications.kubernetes.desc': 'Administrador Certificado de Kubernetes con experiencia práctica en orquestación de contenedores.',
                'certifications.python.desc': 'Certificación avanzada en programación Python con enfoque en aplicaciones de ciencia de datos.',
                
                
                
                // Contact Section
                'contact.title': 'Contacto',
                'contact.description': 'Estoy siempre abierto a nuevas oportunidades, proyectos interesantes y colaboraciones en el campo del desarrollo backend, análisis de datos e ingeniería de software.',

                // Progress Banner
                'progress.banner': 'Portafolio en Desarrollo - Contenido Próximamente',
                'progress.coming_soon': 'Próximamente',
                'contact.project.title': '¿Tienes un proyecto en mente?',
                'contact.project.desc': 'Hablemos sobre cómo puedo ayudarte a hacerlo realidad.',
                'contact.btns.message': 'Enviar Mensaje',
                
                // Footer
                'footer.rights': 'Todos los derechos reservados.',
                'footer.developed': 'Desarrollado con ❤️ y mucho café',
                
                // Language Selector
                'lang.english': 'English',
                'lang.spanish': 'Español'
            }
        };
        
        this.init();
    }
    
    init() {
        // Check for saved language preference
        const savedLanguage = localStorage.getItem('portfolio-language');
        if (savedLanguage && this.translations[savedLanguage]) {
            this.currentLanguage = savedLanguage;
        }
        
        // Apply language on page load
        this.applyLanguage();
        
        // Set up language selector
        this.setupLanguageSelector();
    }
    
    applyLanguage() {
        // Update all elements with data-translate attribute
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            if (this.translations[this.currentLanguage][key]) {
                element.textContent = this.translations[this.currentLanguage][key];
            }
        });
        
        // Update HTML lang attribute
        document.documentElement.lang = this.currentLanguage;
        
        // Update language selector
        this.updateLanguageSelector();
    }
    
    changeLanguage(language) {
        if (this.translations[language]) {
            this.currentLanguage = language;
            localStorage.setItem('portfolio-language', language);
            this.applyLanguage();
        }
    }
    
    setupLanguageSelector() {
        const languageToggle = document.querySelector('.language-toggle');
        const langButtons = document.querySelectorAll('.lang-btn');
        
        if (languageToggle && langButtons.length > 0) {
            // Add click event listeners to language buttons
            langButtons.forEach(button => {
                button.addEventListener('click', (e) => {
                    e.preventDefault();
                    const selectedLang = button.getAttribute('data-lang');
                    this.changeLanguage(selectedLang);
                });
            });
        }
    }
    
    updateLanguageSelector() {
        const languageToggle = document.querySelector('.language-toggle');
        const langButtons = document.querySelectorAll('.lang-btn');
        
        if (languageToggle && langButtons.length > 0) {
            // Update toggle state
            languageToggle.setAttribute('data-active', this.currentLanguage);
            
            // Update button states
            langButtons.forEach(button => {
                if (button.getAttribute('data-lang') === this.currentLanguage) {
                    button.classList.add('active');
                } else {
                    button.classList.remove('active');
                }
            });
        }
    }
    
    getTranslation(key) {
        return this.translations[this.currentLanguage][key] || key;
    }
}

// Initialize language manager when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.languageManager = new LanguageManager();
});
