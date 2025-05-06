// Formulário para Google Sheet
document.getElementById('newsletterForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = this.name.value;
  const phone = this.phone.value;

  fetch("https://script.google.com/macros/s/AKfycbw-vcg1eD5NszmbZcihiawiP66A-ozfwPhXHWKvib-gWwMmsH17EIkIrFdfI3lEen7Z2A/exec", {
    method: "POST",
    mode: "no-cors",
    body: new URLSearchParams({ name, phone })
  });

  alert("Obrigado! Receberás novidades em breve.");
  this.reset();
});

// Popup login automático após 15 segundos
setTimeout(() => {
  document.getElementById('loginPopup').classList.remove('hidden');
}, 15000);

// Fechar popup
document.getElementById('closePopup').addEventListener('click', () => {
  document.getElementById('loginPopup').classList.add('hidden');
});

// Abrir popup pelo botão de perfil
document.getElementById('perfilBtn').addEventListener('click', () => {
  document.getElementById('loginPopup').classList.remove('hidden');
});
