searchText = "Lebron "

let searchString = "s=";
    for (let i = 0; i < searchText.length; i++) {
        searchString += searchText[i];
        if (i !== searchText.length - 1) {
            searchString += "+";
        }
    }

console.log(searchString)