import React from 'react';
import {Link} from "react-router-dom";

const Error = (props) => {
    return (
        <div className="error text-center">
            <h1>{props.title !== undefined ? props.title : "404"}</h1>
            <p>{props.message !== undefined ? props.message : "On dirait que tu es perdu ... C'est un problème ?"}</p>
            <Link className="btn" to="/">Retourner à la page d'accueil</Link>
        </div>
    );
};

export default Error;
