const fetchPosts = () => {
    return fetch("https://jsonplaceholder.typicode.com/posts")
        .then(posts => posts.json())
        .then((posts) => {
            const p = posts.slice(0, 15)
            console.log(p);
            return p
        })
}

const fetchSinglePost = (props) => {
    const id = props.match.params.id;
    return fetch("https://jsonplaceholder.typicode.com/posts/" + id)
        .then(singlePosts => singlePosts.json())
        .then((post) => {
            console.log(post);
            return post
        })
}

export { fetchPosts, fetchSinglePost }