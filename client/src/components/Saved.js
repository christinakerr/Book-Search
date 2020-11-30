import React, { useState, useEffect } from "react";
import Jumbotron from "./Jumbotron"
import Header from "./Header";
import Book from "./Book";
import DeleteBtn from "./DeleteBtn"
import API from "../utils/API"

function Saved() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        loadBooks()
    }, []);

    function loadBooks() {
        API.getBooks()
            .then(res =>
                setBooks(res.data))
            .catch(err => console.log(err));
    }

    function deleteBook(id) {
        API.deleteBook(id)
            .then(res => loadBooks())
            .catch(err => console.log(err))
    }


    return (<main class="container">
        <Jumbotron>
            <Header />
        </Jumbotron>
        <Jumbotron>
            <h4>Saved Books</h4>
            {books.length ? (
                books.map(book => {
                    return(<Book key={book._id} {...book}>
                        <DeleteBtn onClick={() => deleteBook(book._id)} />
                    </Book>)
                })) : (<h3>No results to display</h3>)}
        </Jumbotron>
    </main>
    )
}

export default Saved;