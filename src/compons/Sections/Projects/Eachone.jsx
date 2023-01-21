import React from "react";
import { Link } from "react-router-dom";

export default function Eachone ({name, url, email, githubLogin, inspectorUrl, target, githubRepo, }) {
    
    return (
        <div className="eachone">
            {/* Nombre: */}
            {name}
            <br />
            <a href={`https://${url}`} target='_blank'>{url}</a>
            <br />
            {/* Email: {email}
            <br />
            GitHub Login: {githubLogin}
            <br />
            Inspector URL: {inspectorUrl}
            <br />
            Target: {target}
            <br /> 
            GitHub Login: {githubLogin}
            <br /> */}
            <a href={`https://github.com/${githubLogin}/${githubRepo}`} target='_blank'>GitHub Repo</a>
        </div>
    )
}