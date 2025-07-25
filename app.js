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

    // Lógica para mostrar/ocultar campo de idades das crianças
    const numCriancasInput = document.querySelector('#orcamento-form input[placeholder*="crianças"]');
    const idadesCriancasGroup = document.getElementById('idades-criancas-group');
    
    if (numCriancasInput && idadesCriancasGroup) {
        numCriancasInput.addEventListener('input', (e) => {
            const numCriancas = parseInt(e.target.value) || 0;
            if (numCriancas > 0) {
                idadesCriancasGroup.style.display = 'block';
                idadesCriancasGroup.querySelector('textarea').required = true;
            } else {
                idadesCriancasGroup.style.display = 'none';
                idadesCriancasGroup.querySelector('textarea').required = false;
                idadesCriancasGroup.querySelector('textarea').value = '';
            }
        });
    }
}

// Formulários
function initForms() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const submitBtn = form.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            submitBtn.textContent = 'Enviando...';
            submitBtn.disabled = true;
            
            try {
                let endpoint = '';
                let formData = {};
                
                if (form.id === 'orcamento-form') {
                    // Formulário de orçamento
                    endpoint = '/api/send-quote';
                    const inputs = form.querySelectorAll('input, select, textarea');
                    
                    inputs.forEach(input => {
                        if (input.type === 'text' && input.placeholder === 'Seu nome') {
                            formData.nome = input.value;
                        } else if (input.type === 'email') {
                            formData.email = input.value;
                        } else if (input.type === 'tel') {
                            formData.telefone = input.value;
                        } else if (input.type === 'text' && input.placeholder.includes('Destino de interesse')) {
                            formData.destino = input.value;
                        } else if (input.type === 'date') {
                            formData.data_partida = input.value;
                        } else if (input.type === 'number' && input.placeholder.includes('adultos')) {
                            formData.num_adultos = input.value;
                        } else if (input.type === 'number' && input.placeholder.includes('crianças')) {
                            formData.num_criancas = input.value;
                        } else if (input.tagName === 'TEXTAREA' && input.placeholder.includes('Idades das crianças')) {
                            formData.idades_criancas = input.value;
                        } else if (input.tagName === 'TEXTAREA' && input.placeholder.includes('Observações')) {
                            formData.observacoes = input.value;
                        }
                    });
                } else if (form.id === 'contact-form') {
                    // Formulário de contato
                    endpoint = '/api/send-contact';
                    const inputs = form.querySelectorAll('input, select, textarea');
                    
                    inputs.forEach(input => {
                        if (input.type === 'text') {
                            formData.nome = input.value;
                        } else if (input.type === 'email') {
                            formData.email = input.value;
                        } else if (input.type === 'tel') {
                            formData.telefone = input.value;
                        } else if (input.tagName === 'SELECT') {
                            formData.assunto = input.value;
                        } else if (input.tagName === 'TEXTAREA') {
                            formData.mensagem = input.value;
                        }
                    });
                } else {
                    // Outros formulários (newsletter, etc.) - simular envio
                    setTimeout(() => {
                        alert('Inscrição realizada com sucesso!');
                        form.reset();
                        submitBtn.textContent = originalText;
                        submitBtn.disabled = false;
                    }, 1000);
                    return;
                }
                
                // Enviar dados para o backend
                const response = await fetch(`https://mzhyi8cneojx.manus.space${endpoint}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData)
                });
                
                const result = await response.json();
                
                if (response.ok) {
                    alert(result.message || 'Mensagem enviada com sucesso!');
                    form.reset();
                    
                    // Fechar modal se for o formulário de orçamento
                    if (form.id === 'orcamento-form') {
                        document.getElementById('orcamento-modal').classList.remove('active');
                    }
                } else {
                    throw new Error(result.error || 'Erro ao enviar mensagem');
                }
                
            } catch (error) {
                console.error('Erro:', error);
                alert('Erro ao enviar mensagem. Tente novamente ou entre em contato via WhatsApp.');
            } finally {
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }
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

