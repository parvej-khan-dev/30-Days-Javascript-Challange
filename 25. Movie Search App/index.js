const apiKey = `https://www.omdbapi.com/?s=deadpool&apikey=101bc080`;
let loading = false;
let searchError = null;
function searchApiKey(search) {
  loading = true;
  const url = `https://www.omdbapi.com/?s=${search}&apikey=101bc080`;
  return fetch(url)
    .then((response) => response.json())
    .then((json) => json)
    .catch((error) => {
      console.log(error);
      if (error.Error === 'Too many results.') {
        searchError = error;
      }
    })
    .finally(() => (loading = false));
}

function movieInfo(id) {
  loading = true;
  const url = `https://www.omdbapi.com/?i=${id}&apikey=101bc080`;
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.log(error))
    .finally(() => (loading = false));
}

const results = document.querySelector('#results');
async function displayMovies() {
  let searchValue = document.querySelector('#search-input')?.value;
  let errorBlock = document.querySelector('#error');
  console.log('search', searchValue, loading);
  if (searchValue.length < 3) {
    errorBlock.innerText = 'Enter a more specific search';
    return;
  }
  const moviesResult = await searchApiKey(searchValue);
  searchValue = null;
  if (loading) {
    document.getElementById('loading').innerHTML = `Loading...`;
    return;
  }
  if (moviesResult.Error === 'Too many results.') {
    document.getElementById('error').innerText = 'Enter a more specific search';
    return;
  }
  if (moviesResult.Error === 'Movie not found!') {
    errorBlock.innerText = 'Movie not found';
    return;
  }
  results.innerHTML = ``;
  errorBlock.innerText = '';
  for (let item of moviesResult.Search) {
    const movieCard = document.createElement('div');
    movieCard.classList.add('movie-card');
    movieCard.innerHTML = `
        <img src=${item?.Poster} alt="Movie Title">
        <h3>${item?.Title}</h3>
        <p><strong>Year:</strong> ${item?.Year}</p>
        <a href="./details.html?id=${item?.imdbID}" class="more-info" >More Info</a>
        `;
    results.appendChild(movieCard);
  }
}

document
  .getElementById('search-button')
  .addEventListener('click', displayMovies);

document
  .getElementById('search-input')
  .addEventListener('keypress', function (event) {
    // Check if the pressed key is Enter
    if (event.key === 'Enter') {
      displayMovies();
    }
  });

let searchParams = new URLSearchParams(window.location.search);
console.log('searchParams', searchParams);
let id = searchParams.get('id');
console.log(id, 'id');
if (id) {
  displayMovieDetails(id);
}

async function displayMovieDetails(id) {
  const movie = await movieInfo(id);

  if (!movie) {
    document.getElementById(
      'movie-details'
    ).innerHTML = `<h2>No movie found</h2>`;
    return;
  }
  document.getElementById('movie-details').innerHTML = `
    <h2>${movie?.Title || ''}</h2>
            <img src=${movie?.Poster} alt="Movie Poster">
            <p><strong>Year:</strong> ${movie?.Year}</p>
            <p><strong>Rated:</strong> ${movie?.Rated}</p>
            <p><strong>Released:</strong> ${movie?.Released}</p>
            <p><strong>Runtime:</strong> ${movie?.Runtime}</p>
            <p><strong>Genre:</strong> ${movie?.Genre}</p>
            <p><strong>Director:</strong> ${movie?.Director}</p>
            <p><strong>Writers:</strong> ${movie?.Writer}</p>
            <p><strong>Actors:</strong> ${movie?.Actors}</p>
            <p><strong>Plot:</strong> ${movie?.Plot}</p>
            <p><strong>Language:</strong> ${movie?.Language}</p>
            <p><strong>Country:</strong> ${movie?.Country}</p>
            <p><strong>Awards:</strong> ${movie?.Awards}</p>
            <p><strong>IMDb Rating:</strong> ${movie?.imdbRating}</p>
            <p><strong>Box Office:</strong> ${movie?.BoxOffice}</p>
    `;
}
