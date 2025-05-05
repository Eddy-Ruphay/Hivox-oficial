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
