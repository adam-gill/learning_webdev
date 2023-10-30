// various html elements involved with displaying the movies
const searchButton = document.getElementById("search__button");
const searchBox = document.getElementById("search__box");
const searchIcon = document.querySelector(".svg__holder");
const moviesTitle = document.querySelector(".movies__title");
const moviesLoading = document.querySelector(".movies");
const featuredMoviesIMDBID = [
  "tt0137523",
  "tt2872718",
  "tt0144084",
  "tt0114369",
];

// variable to track movies currently loaded on the screen
let loadedMovies = [];

// load in featured movies by imdbID that I selected
async function getFeaturedMovies() {
  moviesLoading.classList += " movies__loading";
  let featuredMoviesData = [];

  for (let i = 0; i < featuredMoviesIMDBID.length; i++) {
    let movie = await fetch(
      `https://www.omdbapi.com/?apikey=61e2ff59&i=${featuredMoviesIMDBID[i]}`
    );
    const movieData = await movie.json();
    featuredMoviesData.push(movieData);
  }

  moviesLoading.classList.remove("movies__loading");
  const moviesContainer = document.querySelector(".movies__container");
  moviesContainer.innerHTML = moviesHeadingHTML("Featured Movies");
  moviesContainer.innerHTML += featuredMoviesData
    .map((movie) => moviesHTML(movie))
    .join("");
}

getFeaturedMovies();

function movieClick(event) {
  const hoveredMovie = event.target;
  console.log(hoveredMovie);
}

// if search button is pressed, put cursor in search box
if (searchButton) {
  searchButton.addEventListener("click", function () {
    searchBox.focus();
  });
}

// if magnifying glass is clicked, looks up search
if (searchIcon) {
    searchIcon.addEventListener("click", function () {
    const searchValue = searchBox.value.trim().split(" ");

    if (searchValue[0] !== "") {
      moviesTitle.textContent = `Results for "${searchBox.value}":`;
      moviesLoading.classList += " movies__loading";
      const moviesContainer = document.querySelector(".movies__container");
      moviesContainer.innerHTML = "";

      // getMovies(searchValue, searchBox.value);
      setTimeout(() => {
        getMovies(searchValue, searchBox.value);
      }, 200); // api loads too fast to see loading state
    }
  });
}

// if cursor is in text box and user presses enter, looks up search
if (searchBox) {
  searchBox.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
      const searchValue = searchBox.value.trim().split(" ");
      
      // stop search if search box is empty
      if (searchValue[0] !== "") {
        moviesTitle.textContent = `Results for "${searchBox.value}":`;

        moviesLoading.classList += " movies__loading";
        const moviesContainer = document.querySelector(".movies__container");
        moviesContainer.innerHTML = "";
        // getMovies(searchValue, searchBox.value);
        setTimeout(() => {
          getMovies(searchValue, searchBox.value);
        }, 200);
      }
    }
  });
}

async function getMovies(searchText, searchTextValue) {
  let searchString = "s=";
  for (let i = 0; i < searchText.length; i++) {
    searchString += searchText[i];
    if (i !== searchText.length - 1) {
      searchString += "+";
    }
  }

    // const movies = await fetch(
    //   `https://www.omdbapi.com/?apikey=61e2ff59&${searchString}`
    // );

    const moviesContainer = document.querySelector(".movies__container");

    const movies = await fetchMovies(`https://www.omdbapi.com/?apikey=61e2ff59&${searchString}`);
    console.log(movies)

    // show error if input is something like 'e' which is too many requests, or request isn't found
    if (movies.Response === "False") {
        moviesLoading.classList.remove("movies__loading");
        moviesContainer.innerHTML = moviesHeadingHTML(searchTextValue);
        moviesContainer.innerHTML += `
                                        <div class="not__found--container">
                                            <img class="not__found--img" src="./assets/movie_not_found.png"><br>
                                            <h1 class="not__found--title">No results for "${searchTextValue}"</h1>
                                        </div>`;

        return;
    }
    // const moviesData = await movies.json();
    const moviesList = movies.Search.slice(0, 6);
    loadedMovies = moviesList;
  
  

  moviesLoading.classList.remove("movies__loading");

  if (typeof moviesList === "undefined") {
    moviesContainer.innerHTML = moviesHeadingHTML(searchTextValue);
    moviesContainer.innerHTML += `
                                        <div class="not__found--container">
                                            <img class="not__found--img" src="./assets/movie_not_found.png"><br>
                                            <h1 class="not__found--title">No results for "${searchTextValue}"</h1>
                                        </div>`;

    return;
  }

  moviesContainer.innerHTML = moviesHeadingHTML(searchTextValue);
  moviesContainer.innerHTML += moviesList
    .map((movie) => moviesHTML(movie))
    .join("");
}

function filterMovies(event) {
  const filter = event.target.value;

  // sort loadedMovies list by filter and refresh movies
}

async function fetchMovies(searchString) {
    const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 5000); // Set a timeout of 5 seconds

  try {
    const response = await fetch(
      `https://www.omdbapi.com/?apikey=61e2ff59&${searchString}`,
      { signal: controller.signal }
    );

    clearTimeout(timeoutId); // Clear the timeout since the request completed within 5 seconds

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const movies = await response.json();
    return movies;
  } catch (error) {
    // Handle errors, including timeout error
    console.error(error);
    throw error; // Rethrow the error to propagate it further if necessary
  }
}

function moviesHTML(movie) {
  if (movie.Poster === "N/A") {
    movie.Poster = "./assets/img_not_found.jpg";
  }

  return `<div class="movie" data-hidden-data="${movie.imdbID}">
                <div class="poster__half">
                <img
                    src="${movie.Poster}"
                    alt=""
                />
                </div>
                <div class="text__half">
                <h1 class="movie__title">${movie.Title}</h1>
                <h3 class="year">${movie.Year}</h3>
                </div>
            </div>`;
}

function moviesHeadingHTML(searchValueText) {
  if (searchValueText === "Featured Movies") {
    return `<h1 class="movies__title">${searchValueText}:</h1>`;
  }
  return `<h1 class="movies__title">Results for "${searchValueText}":</h1>`;
}
