import React from 'react';
import { fetchAuthors } from "../services/fetchAuthor";

const Autors = () => {

    fetchAuthors().then((author) => {
        return author;
    })
    const authors = console.log(fetchAuthors());
    return (
        <h1>Authors</h1>
    )
}

export default Autors