import React from "react";
import cover from "../assets/cover.jpg";

const Home = () => {
    return (
        <section>
            <img className="--cover" src={cover} alt={cover} />
        </section>
    );
};

export default Home;
