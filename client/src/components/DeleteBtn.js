import React from "react";

function DeleteBtn(props) {
    return(
        <div onClick={props.onClick} className="save-btn"><button className="btn btn-primary save-btn">Delete</button></div>
    )
}

export default DeleteBtn;