import React from "react";
import {Link} from "react-router-dom";

export const Root = () => {
    return (
        <div>
            <h1> Root </h1>
            <Link to ={'/About'}>About</Link>
            <Link to ={'/Work'}>Work</Link>
            <Link to ={'/Blogs'}>Blogs</Link>
            <Link to ={'/Contact'}>Contact</Link>
        </div>
    )
}