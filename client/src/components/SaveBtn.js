
import React from "react";

function SaveBtn(props) {
    return(
        <div onClick={props.onClick} className="save-btn"><button className="btn btn-primary save-btn">Save</button></div>
    )
}

export default SaveBtn;