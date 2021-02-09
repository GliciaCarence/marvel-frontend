import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Header = () => {
    return (
        <header className="--header --container">
            <Link className="--link-decoration-none" to="/">
                <img className="--logo" src={logo} alt="logo" />
            </Link>

            <Link className="--link-decoration-none" to="/characters">
                <p>Characters</p>
            </Link>

            <Link className="--link-decoration-none" to="/comics">
                <p>Comics</p>
            </Link>

            <Link className="--link-decoration-none" to="/favorites">
                <p>Favorites</p>
            </Link>
        </header>
    );
};

export default Header;
