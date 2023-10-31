// various html elements involved with displaying the movies
const searchButton = document.getElementById("search__button");
const searchBox = document.getElementById("search__box");
const searchIcon = document.querySelector(".svg__holder");
const moviesTitle = document.querySelector(".movies__title");
const moviesLoading = document.querySelector(".movies");
const dropDown = document.querySelector(".dropdown");
const featuredMoviesIMDBID = [
  "fight+club",
  "nightcrawler",
  "american+psycho",
  "se7en",
];

// variable to track movies currently loaded on the screen
let loadedMovies = [];
let searchTerm = "Featured Movies";

// load in featured movies by imdbID that I selected
async function getFeaturedMovies() {
  moviesLoading.classList += " movies__loading";
  let featuredMoviesData = [];

  for (let i = 0; i < featuredMoviesIMDBID.length; i++) {
    let movie = await fetch(
      `https://www.omdbapi.com/?apikey=61e2ff59&s=${featuredMoviesIMDBID[i]}`
    );
    const movieData = await movie.json();
    featuredMoviesData.push(movieData.Search[0]);
  }
  console.log(featuredMoviesData);

  loadedMovies = featuredMoviesData;
  searchTerm = "Featured Movies";

  moviesLoading.classList.remove("movies__loading");
  const moviesContainer = document.querySelector(".movies__container");
  moviesContainer.innerHTML = moviesHeadingHTML("Featured Movies");
  moviesContainer.innerHTML += featuredMoviesData
    .map((movie) => moviesHTML(movie, true))
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
      searchTerm = searchBox.value;

      // reset dropdown value once user searches for movie
      dropDown.selectedIndex = 0;

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
        searchTerm = searchBox.value;

        // reset dropdown value once user searches for movie
        dropDown.selectedIndex = 0;

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

  const movies = await fetchMovies(
    `https://www.omdbapi.com/?apikey=61e2ff59&${searchString}`
  );

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
    .map((movie) => moviesHTML(movie, false))
    .join("");
}

// sort movies by year released or rating on change
async function filterMovies(event) {
  const filter = event.target.value;

  // start loading state
  const moviesContainer = document.querySelector(".movies__container");

  moviesLoading.classList += " movies__loading";
  moviesContainer.innerHTML = "";

  setTimeout(async () => {
    if (filter === "OLD") {
      loadedMovies.sort((a, b) => parseFloat(a.Year) - parseFloat(b.Year));
    } else if (filter === "NEW") {
      loadedMovies.sort((a, b) => parseFloat(b.Year) - parseFloat(a.Year));
    } else if (filter === "RATING") {
      
      // array to allow to sort by rating
      let expandedDataMovies = [];

      const loadedIDBMIDS = loadedMovies.map((movie) => movie.imdbID)
      console.log(loadedIDBMIDS);

      for (let i = 0; i < loadedIDBMIDS.length; i ++) {
        const movieData = await fetch(`https://www.omdbapi.com/?apikey=61e2ff59&i=${loadedIDBMIDS[i]}`);
        const movie = await movieData.json();

        expandedDataMovies.push(movie);
      }

      // sort movies by their imdbRating
      expandedDataMovies.sort((a, b) => parseFloat(b.imdbRating) - parseFloat(a.imdbRating));
      loadedMovies = expandedDataMovies;
      console.log(loadedMovies);
    }

  
    // change movies to order by filter
    moviesContainer.innerHTML = moviesHeadingHTML(searchTerm);
  
    // remove loading state
    moviesLoading.classList.remove("movies__loading");
  
    moviesContainer.innerHTML += loadedMovies
      .map((movie) => moviesHTML(movie, false))
      .join("");
  }, 200); // api loads too fast to see loading state

  

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
      throw new Error("Network response was not ok");
    }

    const movies = await response.json();
    return movies;
  } catch (error) {
    // Handle errors, including timeout error
    console.error(error);
    throw error; // Rethrow the error to propagate it further if necessary
  }
}

function moviesHTML(movie, isFeatured) {
  if (movie.Poster === "N/A") {
    movie.Poster = "./assets/img_not_found.jpg";
  }

  const rating = `- ${movie.imdbRating}/10`;

  return `<div class="movie" data-hidden-data="${movie.imdbID}">
                <div class="poster__half no-cursor">
                <img
                    src="${movie.Poster}"
                    alt=""
                />
                </div>
                <div class="text__half">
                <h1 class="movie__title">${movie.Title}</h1>
                <h3 class="year">${movie.Year} ${(rating === "- undefined/10" || isFeatured === true) ? "": rating}</h3>
                </div>
            </div>`;
}

function moviesHeadingHTML(searchValueText) {
  if (searchValueText === "Featured Movies") {
    return `<h1 class="movies__title">${searchValueText}:</h1>`;
  }
  return `<h1 class="movies__title">Results for "${searchValueText}":</h1>`;
}
