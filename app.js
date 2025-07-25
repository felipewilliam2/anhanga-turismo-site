// Dados dos destinos
const destinos = [
    {
        id: 'jalapao',
        nome: 'Jalapão, Tocantins',
        descricao: 'Aventura e paisagens deslumbrantes no coração do Brasil. Fervedouros, dunas e cachoeiras esperam por você.',
        imagem: 'jalapao-destino.jpg',
        categoria: ['aventura', 'natureza', 'ecoturismo'],
        popular: true
    },
    {
        id: 'porto-seguro',
        nome: 'Porto Seguro, Bahia',
        descricao: 'Onde a história do Brasil encontra praias paradisíacas e a alegria contagiante do axé.',
        imagem: 'porto-seguro.png',
        categoria: ['praia', 'cultural'],
        popular: true
    },
    {
        id: 'lencois-maranhenses',
        nome: 'Lençóis Maranhenses, MA',
        descricao: 'Um cenário único no mundo, com dunas de areia branca e lagoas de água cristalina. Uma experiência surreal.',
        imagem: 'lencois-maranhenses.png',
        categoria: ['natureza', 'ecoturismo'],
        popular: true
    },
    {
        id: 'gramado',
        nome: 'Gramado, RS',
        descricao: 'Charme europeu no coração do Rio Grande do Sul. Arquitetura única, gastronomia e festivais encantadores.',
        imagem: 'gramado-destino.jpg',
        categoria: ['cultural', 'natureza'],
        popular: false
    },
    {
        id: 'foz-iguacu',
        nome: 'Foz do Iguaçu, PR',
        descricao: 'Uma das sete maravilhas naturais do mundo. Cataratas impressionantes e biodiversidade exuberante.',
        imagem: 'foz-iguacu-destino.jpg',
        categoria: ['natureza', 'aventura', 'ecoturismo'],
        popular: false
    },
    {
        id: 'bonito',
        nome: 'Bonito, MS',
        descricao: 'Capital do ecoturismo brasileiro. Águas cristalinas, grutas e uma natureza preservada incomparável.',
        imagem: 'bonito-destino.jpg',
        categoria: ['ecoturismo', 'natureza', 'aventura'],
        popular: false
    },
    {
        id: 'chapada-diamantina',
        nome: 'Chapada Diamantina, BA',
        descricao: 'Paisagens de tirar o fôlego com cachoeiras, grutas e formações rochosas únicas no sertão baiano.',
        imagem: 'chapada-diamantina-destino.jpg',
        categoria: ['aventura', 'natureza', 'ecoturismo'],
        popular: false
    },
    {
        id: 'amazonia',
        nome: 'Amazônia',
        descricao: 'A maior floresta tropical do mundo. Biodiversidade única e experiências autênticas na natureza selvagem.',
        imagem: 'amazonia-destino.jpg',
        categoria: ['ecoturismo', 'natureza', 'aventura'],
        popular: false
    },
    {
        id: 'pantanal',
        nome: 'Pantanal, MT',
        descricao: 'A maior planície alagável do mundo. Paraíso da vida selvagem com onças, jacarés e centenas de aves.',
        imagem: 'pantanal-destino.jpg',
        categoria: ['ecoturismo', 'natureza', 'aventura'],
        popular: false
    },
    {
        id: 'ouro-preto',
        nome: 'Ouro Preto, MG',
        descricao: 'Patrimônio Mundial da UNESCO. História colonial preservada em cada rua e igreja barroca.',
        imagem: 'ouro-preto-destino.jpg',
        categoria: ['cultural'],
        popular: false
    },
    {
        id: 'buzios',
        nome: 'Búzios, RJ',
        descricao: 'Charme internacional e praias paradisíacas. O destino que encantou Brigitte Bardot.',
        imagem: 'buzios-destino.jpg',
        categoria: ['praia'],
        popular: false
    },
    {
        id: 'fernando-noronha',
        nome: 'Fernando de Noronha, PE',
        descricao: 'Paraíso ecológico com as praias mais bonitas do Brasil. Mergulho e vida marinha incomparáveis.',
        imagem: 'fernando-noronha-destino.jpg',
        categoria: ['praia', 'ecoturismo', 'natureza'],
        popular: false
    }
];

// Dados dos depoimentos
const depoimentos = [
    {
        texto: "A viagem para o Jalapão com a Anhangá foi a melhor da minha vida! Organização impecável e guias super atenciosos. Recomendo de olhos fechados!",
        autor: "Maria S., São Paulo/SP"
    },
    {
        texto: "A assistência de viagem da Anhangá superou expectativas! Organização impecável, suporte total em check-in e documentação. Recomendo completamente!",
        autor: "William S."
    }
];

// Dados do blog
const artigos = [
    {
        id: 1,
        titulo: "10 Destinos Imperdíveis no Brasil",
        resumo: "Descubra os lugares mais incríveis do nosso país que você precisa conhecer.",
        categoria: "Destinos Nacionais",
        data: "2025-01-15",
        imagem: "jalapao-destino.jpg",
        popular: true
    },
    {
        id: 2,
        titulo: "Como Planejar sua Viagem para o Jalapão",
        resumo: "Dicas essenciais para aproveitar ao máximo este destino único.",
        categoria: "Dicas de Viagem",
        data: "2025-01-10",
        imagem: "jalapao-destino.jpg",
        popular: true
    },
    {
        id: 3,
        titulo: "Ecoturismo: Viajando de Forma Sustentável",
        resumo: "Aprenda como viajar respeitando o meio ambiente e as comunidades locais.",
        categoria: "Ecoturismo",
        data: "2025-01-05",
        imagem: "bonito-destino.jpg",
        popular: false
    },
    {
        id: 4,
        titulo: "As Melhores Praias do Nordeste",
        resumo: "Um guia completo das praias mais paradisíacas da região.",
        categoria: "Praias",
        data: "2025-01-01",
        imagem: "fernando-noronha-destino.jpg",
        popular: true
    },
    {
        id: 5,
        titulo: "Aventura na Chapada Diamantina",
        resumo: "Trilhas, cachoeiras e paisagens de tirar o fôlego na Bahia.",
        categoria: "Aventura",
        data: "2024-12-28",
        imagem: "chapada-diamantina-destino.jpg",
        popular: false
    }
];

// Inicialização do site
document.addEventListener('DOMContentLoaded', function() {
    initNavigation();
    renderDestinos();
    renderDepoimentos();
    renderBlog();
    initModal();
    initForms();
    initFilters();
    initSearch();
    checkFormSubmission();
});

// Navegação
function initNavigation() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navClose = document.getElementById('nav-close');
    const navLinks = document.querySelectorAll('.nav__link');

    // Toggle menu mobile
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.add('active');
        });
    }

    if (navClose) {
        navClose.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    }

    // Fechar menu ao clicar em link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });

    // Scroll suave
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Destacar link ativo no scroll
    window.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('.section');
        const scrollPos = window.scrollY + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active-link');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active-link');
                    }
                });
            }
        });
    });
}

// Renderizar destinos
function renderDestinos() {
    const destinosPopularesContainer = document.getElementById('destinos-populares');
    const destinosGridContainer = document.getElementById('destinos-grid');

    if (destinosPopularesContainer) {
        const destinosPopulares = destinos.filter(destino => destino.popular);
        destinosPopularesContainer.innerHTML = destinosPopulares.map(destino => createDestinoCard(destino)).join('');
    }

    if (destinosGridContainer) {
        destinosGridContainer.innerHTML = destinos.map(destino => createDestinoCard(destino)).join('');
    }
}

function createDestinoCard(destino) {
    const tags = destino.categoria.map(cat => `<span class="tag">${cat}</span>`).join('');
    
    return `
        <div class="destino-card" data-categoria="${destino.categoria.join(' ')}">
            <img src="${destino.imagem}" alt="${destino.nome}" loading="lazy">
            <div class="destino-card__content">
                <h3 class="destino-card__title">${destino.nome}</h3>
                <p class="destino-card__description">${destino.descricao}</p>
                <div class="destino-card__tags">
                    ${tags}
                </div>
            </div>
        </div>
    `;
}

// Renderizar depoimentos
function renderDepoimentos() {
    const depoimentosContainer = document.getElementById('depoimentos-grid');
    
    if (depoimentosContainer) {
        depoimentosContainer.innerHTML = depoimentos.map(depoimento => `
            <div class="depoimento-card">
                <p class="depoimento-card__text">"${depoimento.texto}"</p>
                <p class="depoimento-card__author">– ${depoimento.autor}</p>
            </div>
        `).join('');
    }
}

// Renderizar blog
function renderBlog() {
    const blogContainer = document.getElementById('blog-grid');
    const popularPostsContainer = document.getElementById('popular-posts');

    if (blogContainer) {
        blogContainer.innerHTML = artigos.map(artigo => createBlogCard(artigo)).join('');
    }

    if (popularPostsContainer) {
        const artigosPopulares = artigos.filter(artigo => artigo.popular);
        popularPostsContainer.innerHTML = artigosPopulares.map(artigo => `
            <div class="popular-post">
                <img src="${artigo.imagem}" alt="${artigo.titulo}" loading="lazy">
                <div>
                    <p class="popular-post__title">${artigo.titulo}</p>
                </div>
            </div>
        `).join('');
    }
}

function createBlogCard(artigo) {
    const dataFormatada = new Date(artigo.data).toLocaleDateString('pt-BR');
    
    return `
        <article class="blog-card" data-categoria="${artigo.categoria}">
            <img src="${artigo.imagem}" alt="${artigo.titulo}" loading="lazy">
            <div class="blog-card__content">
                <h3 class="blog-card__title">${artigo.titulo}</h3>
                <p class="blog-card__excerpt">${artigo.resumo}</p>
                <div class="blog-card__meta">
                    <span>${dataFormatada}</span>
                    <span>${artigo.categoria}</span>
                </div>
            </div>
        </article>
    `;
}

// Modal
function initModal() {
    const modal = document.getElementById('orcamento-modal');
    const openBtn = document.getElementById('orcamento-btn');
    const closeBtn = document.getElementById('modal-close');

    if (openBtn) {
        openBtn.addEventListener('click', () => {
            modal.classList.add('active');
        });
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            modal.classList.remove('active');
        });
    }

    // Fechar modal ao clicar fora
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });
}

// Formulários
function initForms() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Simular envio
            const submitBtn = form.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            submitBtn.textContent = 'Enviando...';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
                form.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
                
                // Fechar modal se for o formulário de orçamento
                if (form.id === 'orcamento-form') {
                    document.getElementById('orcamento-modal').classList.remove('active');
                }
            }, 2000);
        });
    });
}

// Filtros
function initFilters() {
    // Filtros de destinos
    const destinoFilters = document.querySelectorAll('.destinos .filter-btn');
    const destinoCards = document.querySelectorAll('.destinos .destino-card');

    destinoFilters.forEach(filter => {
        filter.addEventListener('click', () => {
            const categoria = filter.getAttribute('data-filter');
            
            // Atualizar botão ativo
            destinoFilters.forEach(btn => btn.classList.remove('active'));
            filter.classList.add('active');
            
            // Filtrar cards
            destinoCards.forEach(card => {
                const cardCategorias = card.getAttribute('data-categoria');
                
                if (categoria === 'todos' || cardCategorias.includes(categoria)) {
                    card.style.display = 'block';
                    card.classList.add('fade-in-up');
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // Filtros de blog
    const blogFilters = document.querySelectorAll('.blog .filter-btn, .category-list a');
    const blogCards = document.querySelectorAll('.blog-card');

    blogFilters.forEach(filter => {
        filter.addEventListener('click', (e) => {
            e.preventDefault();
            const categoria = filter.getAttribute('data-category');
            
            // Atualizar botão ativo (apenas para filter-btn)
            if (filter.classList.contains('filter-btn')) {
                document.querySelectorAll('.blog .filter-btn').forEach(btn => btn.classList.remove('active'));
                filter.classList.add('active');
            }
            
            // Filtrar cards
            blogCards.forEach(card => {
                const cardCategoria = card.getAttribute('data-categoria');
                
                if (categoria === 'todas' || cardCategoria === categoria) {
                    card.style.display = 'grid';
                    card.classList.add('fade-in-up');
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

// Busca no blog
function initSearch() {
    const searchInput = document.getElementById('blog-search');
    const blogCards = document.querySelectorAll('.blog-card');

    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase();
            
            blogCards.forEach(card => {
                const title = card.querySelector('.blog-card__title').textContent.toLowerCase();
                const excerpt = card.querySelector('.blog-card__excerpt').textContent.toLowerCase();
                
                if (title.includes(searchTerm) || excerpt.includes(searchTerm)) {
                    card.style.display = 'grid';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    }
}

// Animações de scroll
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, observerOptions);

    // Observar elementos para animação
    const elementsToAnimate = document.querySelectorAll('.destino-card, .blog-card, .depoimento-card');
    elementsToAnimate.forEach(el => observer.observe(el));
}

// Inicializar animações quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', initScrollAnimations);


// Verificar se o formulário foi enviado
function checkFormSubmission() {
    // Verificar se há parâmetro na URL indicando que o formulário foi enviado
    const urlParams = new URLSearchParams(window.location.search);
    const formSubmitted = urlParams.get('orcamento');
    
    if (formSubmitted === 'enviado') {
        // Criar e mostrar mensagem de sucesso
        const successMessage = document.createElement('div');
        successMessage.className = 'form-success-message';
        successMessage.innerHTML = `
            <div class="success-content">
                <div class="success-icon">✓</div>
                <h3>Orçamento Enviado com Sucesso!</h3>
                <p>Agradecemos pelo seu interesse. Nossa equipe entrará em contato em breve.</p>
                <button class="btn btn--primary close-success">Fechar</button>
            </div>
        `;
        
        document.body.appendChild(successMessage);
        
        // Adicionar estilo para a mensagem
        const style = document.createElement('style');
        style.textContent = `
            .form-success-message {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: rgba(0, 0, 0, 0.7);
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 2000;
                animation: fadeIn 0.3s ease;
            }
            
            .success-content {
                background-color: white;
                padding: 30px;
                border-radius: 8px;
                text-align: center;
                max-width: 90%;
                width: 400px;
                box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
            }
            
            .success-icon {
                width: 60px;
                height: 60px;
                background-color: #4CAF50;
                color: white;
                border-radius: 50%;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 30px;
                margin: 0 auto 20px;
            }
            
            @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }
        `;
        
        document.head.appendChild(style);
        
        // Remover parâmetro da URL para evitar mostrar a mensagem ao atualizar
        window.history.replaceState({}, document.title, window.location.pathname);
        
        // Fechar mensagem ao clicar no botão
        document.querySelector('.close-success').addEventListener('click', function() {
            document.body.removeChild(successMessage);
        });
    }
}


// Atualização da função checkFormSubmission para verificar também o formulário de contato
function checkFormSubmission() {
    // Verificar se há parâmetro na URL indicando que algum formulário foi enviado
    const urlParams = new URLSearchParams(window.location.search);
    const orcamentoSubmitted = urlParams.get('orcamento');
    const contatoSubmitted = urlParams.get('contato');
    
    let title, message;
    
    if (orcamentoSubmitted === 'enviado') {
        title = "Orçamento Enviado com Sucesso!";
        message = "Agradecemos pelo seu interesse. Nossa equipe entrará em contato em breve com seu orçamento personalizado.";
        showSuccessMessage(title, message);
    } else if (contatoSubmitted === 'enviado') {
        title = "Mensagem Enviada com Sucesso!";
        message = "Obrigado por entrar em contato conosco. Responderemos o mais breve possível.";
        showSuccessMessage(title, message);
    }
}

// Função para mostrar mensagem de sucesso
function showSuccessMessage(title, message) {
    // Criar e mostrar mensagem de sucesso
    const successMessage = document.createElement('div');
    successMessage.className = 'form-success-message';
    successMessage.innerHTML = `
        <div class="success-content">
            <div class="success-icon">✓</div>
            <h3>${title}</h3>
            <p>${message}</p>
            <button class="btn btn--primary close-success">Fechar</button>
        </div>
    `;
    
    document.body.appendChild(successMessage);
    
    // Adicionar estilo para a mensagem
    const style = document.createElement('style');
    style.textContent = `
        .form-success-message {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.7);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 2000;
            animation: fadeIn 0.3s ease;
        }
        
        .success-content {
            background-color: white;
            padding: 30px;
            border-radius: 8px;
            text-align: center;
            max-width: 90%;
            width: 400px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
        }
        
        .success-icon {
            width: 60px;
            height: 60px;
            background-color: #4CAF50;
            color: white;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 30px;
            margin: 0 auto 20px;
        }
        
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
    `;
    
    document.head.appendChild(style);
    
    // Remover parâmetro da URL para evitar mostrar a mensagem ao atualizar
    window.history.replaceState({}, document.title, window.location.pathname);
    
    // Fechar mensagem ao clicar no botão
    document.querySelector('.close-success').addEventListener('click', function() {
        document.body.removeChild(successMessage);
    });
}


// Atualização da função checkFormSubmission para verificar também o formulário de newsletter
function checkFormSubmission() {
    // Verificar se há parâmetro na URL indicando que algum formulário foi enviado
    const urlParams = new URLSearchParams(window.location.search);
    const orcamentoSubmitted = urlParams.get('orcamento');
    const contatoSubmitted = urlParams.get('contato');
    const newsletterSubmitted = urlParams.get('newsletter');
    
    let title, message;
    
    if (orcamentoSubmitted === 'enviado') {
        title = "Orçamento Enviado com Sucesso!";
        message = "Agradecemos pelo seu interesse. Nossa equipe entrará em contato em breve com seu orçamento personalizado.";
        showSuccessMessage(title, message);
    } else if (contatoSubmitted === 'enviado') {
        title = "Mensagem Enviada com Sucesso!";
        message = "Obrigado por entrar em contato conosco. Responderemos o mais breve possível.";
        showSuccessMessage(title, message);
    } else if (newsletterSubmitted === 'enviado') {
        title = "Inscrição Confirmada!";
        message = "Você foi inscrito com sucesso em nossa newsletter. Em breve você receberá nossas melhores ofertas e dicas de viagem.";
        showSuccessMessage(title, message);
    }
}

