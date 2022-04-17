const apiKEY = "4c778d14-cc50-4c76-8705-b0308485b611";
const apiURLPop = "https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=1";

getMovies(apiURLPop);

async function getMovies(url) {
  const resp = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      "X-API-KEY": apiKEY,
    },
  });
  const respData = await resp.json();
  showMovies(respData);
}


function showMovies(data) {
  const moviesElement = document.querySelector(".movies");

  data.films.forEach(movie => {
    const movieElement = document.createElement("div");
    movieElement.classList.add("movie");
    movieElement.innerHTML = `
    <div class="movie_cover-inner">
      <img src="${movie.posterUrlPreview}" class=" movie_cover" alt="${movie.nameRu}">
      <div class="movie_cover-darkened"></div>
    </div>
    <div class="movie_info">
      <div class="movie_title">${movie.nameRu}</div>
      <div class="movie_category">${movie.genres.map( (genre) => `${ genre.genre}`)}</div>
      <div class="movie_average movie_average-green">9</div>
    </div>
    `;
      moviesElement.appendChild(movieElement);

  });

}
