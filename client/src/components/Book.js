import React from "react";

function Book(props) {
    return (
        <div className="card bg-secondary">
            <div className="card-header">
                <h5>{props.title}</h5>
                <h6>{props.author}</h6>
            </div>
            <div className="card-body">
                <img className="bookImg" alt={props.title} width="150px" src={props.image} />
                <p className="card-text">{props.description}</p>
                {props.children}
            </div>
        </div>
    )
}

export default Book;