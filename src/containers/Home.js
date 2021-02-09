import React from "react";
import cover from "../assets/cover.jpg";

const Home = () => {
    return (
        <section className="--home">
            <img className="--cover" src={cover} alt={cover} />
        </section>
    );
};

export default Home;
