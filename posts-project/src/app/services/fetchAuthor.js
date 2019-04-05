// import User from "../entities/user"
import User from "../entities/user"

const fetchAuthor = (userId) => {
    return fetch("https://jsonplaceholder.typicode.com/users/" + userId)
        .then(user => user.json())
        .then((user) => {
            const author = { ...user }
            return author
        })

}

const fetchAuthors = () => {
    return fetch("https://jsonplaceholder.typicode.com/users/")
        .then(user => user.json())
        .then((user) => {
            console.log(user);
        })

}
export { fetchAuthor, fetchAuthors }