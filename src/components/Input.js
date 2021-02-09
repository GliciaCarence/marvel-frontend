import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Input = ({ search, setSearch }) => {
    const handleSearch = (event) => {
        const value = event.target.value;
        setSearch(value);
    };

    return (
        <div className="--input-container">
            <input
                className="--input"
                type="text"
                placeholder="Recherche"
                value={search}
                onChange={handleSearch}
            />
            <FontAwesomeIcon
                icon="search"
                size="sm"
                className="--search-icon"
            />
        </div>
    );
};

export default Input;
