import React, { useState } from "react";
import Jumbotron from "./Jumbotron";
import Header from "./Header";
import Book from "./Book"
import SaveBtn from "./SaveBtn"
import API from "../utils/API";

function Search() {
    const [books, setBooks] = useState([]);
    const [searchTerm, setSearchTerm] = useState();

    function saveBook(bookId) {
        const savedBook = books.find(book => book.googleId === bookId)
        console.log(books);
        API.saveBook(savedBook)
            .then(() => console.log(savedBook))
            .catch(err => console.log(err))
    }

    function handleSearchChange(event) {
        const search = event.target.value;
        setSearchTerm(search)
    }

    function handleSearch(event) {
        event.preventDefault();
        API.searchBooks(searchTerm)
            .then(({ data }) => {
                // setBooks(data.items)
                console.log(data)
                const bookData = data.items.map(book => ({
                    title: book.volumeInfo.title,
                    author: book.volumeInfo.authors,
                    description: book.volumeInfo.description,
                    image: book.volumeInfo.imageLinks?.thumbnail,
                    link: book.volumeInfo.infoLink,
                    googleId: book.id
                }));
                console.log(bookData);
                setBooks(bookData);
            })
            .catch(err => console.log(err))
    }


    return (<main className="container">
        <Jumbotron>
            <Header />
        </Jumbotron>
        <Jumbotron>
            <h4>Search Books</h4>
            <form className="form-inline row">
                <input className="form-control col-11" type="search" placeholder="Search" aria-label="Search" onChange={handleSearchChange} />
                <button className="btn btn-primary" type="submit" onClick={handleSearch}>Search</button>
            </form>
        </Jumbotron>
        <Jumbotron>
            {books.length ? (
                books.map(book => {
                    return (<Book key={book.googleId} title={book.title} author={book.author} image={book.image} description={book.description}>
                        <SaveBtn onClick={() => saveBook(book.googleId)} />
                    </Book>)
                })) : (<h3>No results to display</h3>)}
        </Jumbotron>
    </main>
    )
}

export default Search;