const searchButton = document.getElementById('search__button');
const searchBox = document.getElementById('search__box');
const moviesTitle = document.querySelector('.movies__title');


// if search button is pressed, put cursor in search box
if (searchButton) {
    searchButton.addEventListener("click", function() {
        searchBox.focus();
    })
}

// if cursor is in text box and user presses enter, looks up search
if (searchBox) {
    searchBox.addEventListener("keyup", function(event) {
        if (event.key === "Enter") {
            const searchValue = searchBox.value.split(" ");
            moviesTitle.textContent = `Results for "${searchBox.value}":`
            getMovies(searchValue, searchBox.value);
        }
    })
}

async function getMovies(searchText, searchTextValue) {
    let searchString = "s=";
    for (let i = 0; i < searchText.length; i++) {
        searchString += searchText[i];
        if (i !== searchText.length - 1) {
            searchString += "+";
        }
    }

    const movies = await fetch(`https://www.omdbapi.com/?apikey=61e2ff59&${searchString}`);
    const moviesData = await movies.json();
    const moviesList = moviesData.Search;
    const moviesContainer = document.querySelector('.movies__container');

    console.log(moviesList);

    moviesContainer.innerHTML = moviesHeadingHTML(searchTextValue);
    moviesContainer.innerHTML += moviesList.map((movie) => moviesHTML(movie)).join("");
    


}

function moviesHTML(movie) {
    if (movie.Poster === "N/A") {
        movie.Poster = "./assets/img_not_found.jpg";
    }

    return `<div class="movie">
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
    return `<h1 class="movies__title">Results for "${searchValueText}":</h1>`
}

    
