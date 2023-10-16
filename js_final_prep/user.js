const postListEl = document.querySelector('.post-list');
const id = localStorage.getItem("id");
let searchById = document.getElementById("searchById");
let numUsers;

function onSearchChangeHandler(event) {
    let id = event.target.value;

    if (id > numUsers) {
        id, searchById.value = 1;
    } else if (id < 1) {
        id, searchById.value = numUsers;
    }

    onSearchChange(id);
}

async function onSearchChange(id) {
    // searchById.addEventListener("input", function() {
    //     if (parseInt(searchById.value) > parseInt(searchById.max)) {
    //         id, searchById.value = searchById.min;
    //     } else if (parseInt(searchById.value) < parseInt(searchById.min)) {
    //         id, searchById.value = searchById.max;
    //     }
    // })
    renderPosts(id);
}

async function renderPosts(id) {
    const posts = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
    const postsData = await posts.json();

    postListEl.innerHTML = postsData.map((post) => postHTML(post)).join('');
}

function postHTML(post) {
    return `<div class="post">
                <div class="post__title">
                    ${post.title}
                </div>
                    <p class="post__body">
                        ${post.body}
                    </p>
            </div>`
}

async function setInputParams() {
    // get numUsers
    const users = await fetch("https://jsonplaceholder.typicode.com/users")
    const usersData = await users.json();
    numUsers = usersData.length;
}

setInputParams();
renderPosts(id);