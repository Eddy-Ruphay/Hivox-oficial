self.addEventListener("install", (event) => {
  console.log("Service Worker instalado.");
});

self.addEventListener("fetch", function (event) {
  // Lógica de cache pode ser adicionada aqui depois
});
