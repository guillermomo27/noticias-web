document.addEventListener("DOMContentLoaded", function() {
    const seccion = document.body.getAttribute("data-seccion"); // Obtener sección de cada página
    const contenedorNoticias = document.querySelector(".noticias");

    fetch("noticias.json")
        .then(response => response.json())
        .then(data => {
            data.forEach(noticia => {
                if (noticia.categoria === seccion) {
                    const article = document.createElement("article");

                    article.innerHTML = `
                        <img src="${noticia.imagen}" alt="${noticia.titulo}">
                        <h2>${noticia.titulo}</h2>
                        <p>${noticia.resumen}</p>
                        <a href="${noticia.enlace}" target="_blank" class="leer-mas">Leer más en ${noticia.fuente}</a>
                    `;

                    contenedorNoticias.appendChild(article);
                }
            });
        })
        .catch(error => console.error("Error al cargar las noticias:", error));
});
