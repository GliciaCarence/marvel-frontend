import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import Card from "../components/Card";
import PageLoader from "../components/PageLoader";
import { handleImage } from "../utils";

const Character = () => {
    // we can use the `useParams` hook here to access the dynamic parameters of the URL
    const { id } = useParams();
    const [data, setData] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    `https://app-marvel-backend.herokuapp.com/comics/${id}`
                );
                setData(response.data);
                setIsLoading(false);
                setError(false);
            } catch (error) {
                console.log(error.response);
                setIsLoading(false);
                setError(true);
            }
        };
        setIsLoading(true);
        fetchData();
    }, [id]);

    return error ? (
        <section>
            <p>error</p>
        </section>
    ) : isLoading ? (
        <section className="--loader">
            <PageLoader />
        </section>
    ) : (
        <>
            <section className="--character-profile">
                <img
                    src={handleImage(
                        `${data.thumbnail.path}.${data.thumbnail.extension}`,
                        true
                    )}
                    alt="character"
                />
                <div className="--overlay" />
                <h1>{data.name}</h1>
                <p>{data.description}</p>
            </section>

            <section className="--container">
                <div className="--content">
                    {data.comics.map((comic, index) => {
                        return (
                            <Card
                                key={`card-${comic._id}`}
                                title={comic.title}
                                description={comic.description}
                                image={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                                itemId={comic._id}
                            />
                        );
                    })}
                </div>
            </section>

            {/* <section className="--container">
                <div className="--content">
                    {data.comics.map((comic, index) => {
                        return (
                            <Card
                                key={`card-${comic._id}`}
                                title={comic.title}
                                description={comic.description}
                                image={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                                itemId={comic._id}
                            />
                        );
                    })}
                </div>
            </section> */}
        </>
    );
};

export default Character;
