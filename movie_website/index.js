let searchButton = document.getElementById('search__button');
let searchBox = document.getElementById('search__box');

if (searchButton) {
    searchButton.addEventListener("click", function() {
        searchBox.focus();
    })
}
    
