// Ссылка на swager: https://kinopoiskapiunofficial.tech/documentation/api/#/films/get_api_v2_2_films_top

const apiKEY = "4c778d14-cc50-4c76-8705-b0308485b611"; //API-ключ
const apiURLPop = "https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=1"; //URL на который ходим с ключом

getMovies(apiURLPop);

async function getMovies(url) { // асинхронный запрос
  const resp = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      "X-API-KEY": apiKEY,
    },
  });
  const respData = await resp.json();
  showMovies(respData);
}

function getClassByRate(vote) { // в if делаем ранжирование по рейтингу фильма
  switch (true) { //через switch
    case (vote >= 7):
      return "green";
      break;
    case (vote > 5):
      return "orange";
      break;
    default:
      return "red";
      break;
  }
}

//   if (vote >= 7) { //через IF
//     return "green";
//   } else if (vote > 5) {
//       return "orange";
//   } else {
//       return "red";
//   }
// }

function showMovies(data) {
  const moviesElement = document.querySelector(".movies");

  data.films.forEach(movie => { //динамически создаем карточки фильмов
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
      <div class="movie_average movie_average-${getClassByRate(movie.rating)}">${movie.rating}</div>
    </div>
    `;
      moviesElement.appendChild(movieElement);

  });

}
