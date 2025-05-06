self.addEventListener("install", (event) => {
  console.log("Service Worker instalado.");
});

self.addEventListener("fetch", function (event) {
  // Aqui você pode colocar lógica de cache depois
});
