import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
    addOrRemoveFromFavorites,
    handleImage,
    isFavorite,
    htmlTagRemove,
} from "../utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Card = ({ title, image, description, itemId, itemType }) => {
    const [isFav, setIsFav] = useState(isFavorite(itemId));
    const [hover, setHover] = useState(false);

    const onMouseEnter = () => {
        setHover(true);
    };

    const onMouseLeave = () => {
        setHover(false);
    };

    const handleFavorite = (event) => {
        event.preventDefault();
        addOrRemoveFromFavorites({
            title,
            image,
            description,
            itemId,
            itemType,
        });
        setIsFav(!isFav);
    };

    const contentToReturn = (
        <div
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            className="--card"
        >
            <div className="--container-image-icon">
                <div className="--favorite-icon" onClick={handleFavorite}>
                    <FontAwesomeIcon
                        icon="heart"
                        size="sm"
                        style={{
                            color: isFav ? "#ed1d23" : "#bbbbbb",
                        }}
                    ></FontAwesomeIcon>
                </div>
                <img
                    className="--thumbnail"
                    src={handleImage(image)}
                    alt="profile thumbnail"
                />
            </div>
            <h4 className="--title">
                {title && title.length > 40 && !hover
                    ? title.substring(0, 40) + "..."
                    : title}
            </h4>
            <p className="--description">
                {description && description.length > 30 && !hover
                    ? htmlTagRemove(description).substring(0, 30) + "..."
                    : htmlTagRemove(description)}
            </p>
        </div>
    );

    if (itemType === "character") {
        return (
            <Link
                className="--link-decoration-none"
                to={`/character/${itemId}`}
            >
                {contentToReturn}
            </Link>
        );
    }

    return contentToReturn;
};

export default Card;
