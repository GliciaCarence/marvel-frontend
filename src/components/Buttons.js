import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Buttons = ({ page, setPage, limit, count, onScroll }) => {
    const nextPage = () => {
        setPage(page + 1);
        if (onScroll) {
            onScroll();
        }
    };

    const previousPage = () => {
        setPage(page - 1);
        if (onScroll) {
            onScroll();
        }
    };

    const showNextButton = () => {
        const nextPage = page + 1;
        if (nextPage * limit > count) {
            return false;
        }
        return true;
    };

    return (
        <div className="--buttons-container">
            <div className="--buttons">
                <div
                    onClick={page > 0 ? previousPage : null}
                    className={page > 0 ? "--previous-page-btn" : "--disable"}
                >
                    <FontAwesomeIcon
                        icon="angle-double-left"
                        color="#ffff"
                    ></FontAwesomeIcon>
                </div>

                <div
                    onClick={showNextButton() ? nextPage : null}
                    className={
                        showNextButton() ? "--next-page-btn" : "--disable"
                    }
                >
                    <FontAwesomeIcon
                        icon="angle-double-right"
                        color="#ffff"
                    ></FontAwesomeIcon>
                </div>
            </div>
        </div>
    );
};

export default Buttons;
