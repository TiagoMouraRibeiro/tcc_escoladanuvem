// script.js

// script.js

// Função para alternar entre os modos de tema (dark e light)
function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-theme');
  }
  
  // Evento de clique no botão de alternar tema
  const darkModeToggle = document.getElementById('dark-mode-toggle');
  darkModeToggle.addEventListener('change', toggleTheme);
  


function openModal(member) {
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    const modalImage = document.getElementById('modal-image');
    const modalContent = document.getElementById('modal-content');

    // Defina o título, a imagem e o conteúdo do modal com base no membro selecionado
    if (member === 'moises') {
        modalTitle.textContent = 'Moises Ximenes';
        modalImage.src = 'moises.jpg';
        modalContent.innerHTML = `
        <p>Descrição do Moises Ximenes...</p>
        <h3>Formação Acadêmica</h3>
        <ul>
          <li>Curso X - Universidade Y (Ano de conclusão)</li>
          <li>Curso Z - Universidade W (Ano de conclusão)</li>
        </ul>
        <h3>Experiência Profissional</h3>
        <ul>
          <li>Empresa A - Cargo X (Ano de início - Ano de fim)</li>
          <li>Empresa B - Cargo Y (Ano de início - Ano de fim)</li>
        </ul>
        <h3>Habilidades</h3>
        <ul>
          <li>Habilidade 1</li>
          <li>Habilidade 2</li>
          <li>Habilidade 3</li>
        </ul>
      `;
    } else if (member === 'jefferson') {
        modalTitle.textContent = 'Jefferson Silva';
        modalImage.src = 'jefferson.jpg';
        modalContent.innerHTML = `
        <p>Descrição do Jefferson Silva...</p>
        <!-- Adicione as informações relevantes para o Jefferson Silva -->
      `;
    }
    // Repita a estrutura condicional para os demais membros

    modal.style.display = 'block';
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}
