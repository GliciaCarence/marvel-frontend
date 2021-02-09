import React from "react";
import Card from "../components/Card";

const Favorites = () => {
    let favorites = localStorage.getItem("favorites");

    favorites = JSON.parse(favorites);

    return (
        <>
            <section className="--hero">
                <div className="--hero-text">
                    <h1>Favorites</h1>
                </div>
            </section>

            <section className="--container">
                {favorites && favorites.length ? (
                    <div className="--content">
                        {favorites.map((item, index) => {
                            return (
                                <Card
                                    key={`card-${item.itemId}`}
                                    itemId={item.itemId}
                                    itemType={item.itemType}
                                    title={item.title}
                                    description={item.description}
                                    image={item.image}
                                />
                            );
                        })}
                    </div>
                ) : (
                    <div className="--no-favorites">
                        <p>You don't have any favorites yet.</p>
                    </div>
                )}
            </section>
        </>
    );
};

export default Favorites;
