import React, { useState } from "react";
import Jumbotron from "./Jumbotron";
import Header from "./Header";
import Book from "./Book"
import SaveBtn from "./SaveBtn"
import API from "../utils/API";

function Search() {
    const [books, setBooks] = useState([]);
    const [searchTerm, setSearchTerm] = useState();

    function saveBook(event){
        console.log("Saving...");
    }

    function handleSearchChange(event){
        const search = event.target.value;
        setSearchTerm(search)
    }

    function handleSearch(event){
        event.preventDefault();
        API.searchBooks(searchTerm)
            .then(res => {
                setBooks(res.data.items)
                console.log(res.data.items)
                console.log(books);
            })
            .catch(err => console.log(err))
    }


    return(<main className="container">
        <Jumbotron>
            <Header />
        </Jumbotron>
        <Jumbotron>
        <h4>Search Books</h4>
            <form className="form-inline row">
                <input className="form-control col-11" type="search" placeholder="Search" aria-label="Search" onChange={handleSearchChange}/>
                <button className="btn btn-primary" type="submit" onClick={handleSearch}>Search</button>
            </form>
        </Jumbotron>
        <Jumbotron>
        {books.length ? (
                books.map(book => {
                    return(<Book key={book.id} title={book.volumeInfo.title} author={book.volumeInfo.authors} image={book.volumeInfo.imageLinks.thumbnail} summary={book.volumeInfo.description}>
                        <SaveBtn onClick={() => saveBook(book.id)} />
                    </Book>)
                })) : (<h3>No results to display</h3>)}
        </Jumbotron>
    </main>
    )
}

export default Search;