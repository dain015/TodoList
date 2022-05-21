import React from "react";
import "./Template.css"

function Template({ children, todoLength }){
    return(
        <div className="Template">
            <div className="title">TO DO LIST ({ todoLength })</div>
            <div>{ children }</div>
        </div>
    );
};

export default Template;