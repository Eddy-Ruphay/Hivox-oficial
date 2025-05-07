// Função para abrir o pop-up de login
function openLoginPopup() {
  document.getElementById('login-popup').style.display = 'flex';
}

// Função para fechar o pop-up de login
function closeLoginPopup() {
  document.getElementById('login-popup').style.display = 'none';
}

// Função de login (simples, apenas fecha o pop-up por agora)
function login() {
  const phoneNumber = document.getElementById('phone-number').value;
  if (phoneNumber.trim() !== '') {
    alert('Login efetuado com sucesso: ' + phoneNumber);
    closeLoginPopup();
  } else {
    alert('Por favor, insira o número de telefone.');
  }
}

// Função para mudar a cor dos ícones
function changeIconColor(selectedId) {
  const links = document.querySelectorAll('.navbar a');
  links.forEach(link => {
    link.classList.remove('active');
  });
  document.getElementById(selectedId).classList.add('active');
}

// Controle do aparecimento da navbar
let navbarVisible = true;

// Exibe a barra ao clicar no centro da tela (não na barra de navegação)
document.addEventListener('click', (event) => {
  const navbar = document.getElementById('navbar');
  const isNavbar = navbar.contains(event.target);

  if (!isNavbar) {
    if (!navbarVisible) {
      navbar.style.display = 'flex';
      navbarVisible = true;
    }
  }
});

// Opcional: esconder a barra ao clicar duas vezes
document.addEventListener('dblclick', (event) => {
  const navbar = document.getElementById('navbar');
  const isNavbar = navbar.contains(event.target);

  if (!isNavbar) {
    navbar.style.display = 'none';
    navbarVisible = false;
  }
});
