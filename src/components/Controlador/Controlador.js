import BuscarPelis from "../../Servicios/BuscarPelis.js";

const controller = () => {
  BuscarPelis().then(function (respuesta) {
    respuesta.results.forEach(function (peliculas) {
      const imgURL = "https://image.tmdb.org/t/p/w500";

      let fila = document.getElementById("fila");

      let columna = document.createElement("div");
      columna.classList.add("col", "mb-3");

      let tarjeta = document.createElement("div");
      tarjeta.classList.add("card", "h-100", "shadow");

      let poster_path = document.createElement("img");
      poster_path.classList.add("text-center", "fw-bold");
      poster_path.setAttribute("src", imgURL+peliculas.poster_path);

      let original_title = document.createElement("h3");
      original_title.classList.add("text-center", "fw-bold");
      original_title.textContent = peliculas.original_title;

      let overview = document.createElement("p");
      overview.textContent = peliculas.overview;

      let vote_average = document.createElement("p");
      vote_average.classList.add("text-center", "fw-bold");
      vote_average.textContent = `Calificación: ${peliculas.vote_average}`;

      tarjeta.appendChild(poster_path);
      tarjeta.appendChild(original_title);
      tarjeta.appendChild(overview);
      tarjeta.appendChild(vote_average);
      columna.appendChild(tarjeta);
      fila.appendChild(columna);
    });
  });
};

export default controller;
