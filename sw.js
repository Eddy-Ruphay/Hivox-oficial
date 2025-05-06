self.addEventListener("install", (event) => {
  console.log("Service Worker instalado.");
});

self.addEventListener("fetch", function (event) {
  // Aqui você pode adicionar lógica de cache no futuro
});
