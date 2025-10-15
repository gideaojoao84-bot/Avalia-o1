,
// Aguarda o carregamento completo do conteúdo da página
document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Seleciona o botão de toggle e o menu de navegação
    const menuToggle = document.getElementById('menu-toggle');
    const mainNav = document.getElementById('main-nav');

    // 2. Adiciona um "ouvinte de evento" para o clique no botão
    menuToggle.addEventListener('click', function() {
        // 3. Alterna a classe 'active' no menu principal
        // Isso faz com que as regras CSS de mobile sejam aplicadas
        mainNav.classList.toggle('active');
        
        // OPCIONAL: Mudar o ícone do menu (☰ para X)
        if (mainNav.classList.contains('active')) {
            menuToggle.textContent = '✕'; // Ícone 'X'
        } else {
            menuToggle.textContent = '☰'; // Ícone 'menu'
        }
    });
    
    // *Exemplo Adicional:* Simulação de carregamento de notícias (opcional)
    // Este é um exemplo simples de como o JS poderia carregar conteúdo de forma dinâmica
    /*
    const gridNoticias = document.querySelector('.grid-noticias');
    
    function criarCardNoticia(titulo, imagemUrl) {
        const card = document.createElement('article');
        card.className = 'card-noticia';
        card.innerHTML = `
            <img src="${imagemUrl}" alt="Imagem Notícia">
            <h4>${titulo}</h4>
            <p>Conteúdo carregado dinamicamente com JavaScript!</p>
            <a href="#" class="leia-mais">Leia Mais</a>
        `;
        return card;
    }

    // Exemplo: Adicionar mais 3 notícias dinamicamente
    // gridNoticias.appendChild(criarCardNoticia("Notícia JS 4", "https://via.placeholder.com/300x200?text=JS+4"));
    // gridNoticias.appendChild(criarCardNoticia("Notícia JS 5", "https://via.placeholder.com/300x200?text=JS+5"));
    */
});