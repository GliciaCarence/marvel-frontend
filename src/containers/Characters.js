import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

import Card from "../components/Card";
import Input from "../components/Input";
import Buttons from "../components/Buttons";
import PageLoader from "../components/PageLoader";

const Characters = () => {
    const [data, setData] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [search, setSearch] = useState("");
    const [page, setPage] = useState(0);
    const [error, setError] = useState(false);

    const sectionRef = useRef(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    `https://app-marvel-backend.herokuapp.com/characters?name=${search}&page=${page}`
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
        setIsLoading(search ? false : true);
        fetchData();
    }, [search, page]);

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
            <section className="--hero">
                <div className="--hero-text">
                    <h1>Marvel Characters</h1>
                </div>
            </section>

            <section ref={sectionRef} className="--container">
                <Input search={search} setSearch={setSearch} />

                {data.results && data.results.length ? (
                    <>
                        <Buttons
                            limit={data.limit}
                            count={data.count}
                            page={page}
                            setPage={setPage}
                            onScroll={() => sectionRef.current.scrollIntoView()}
                        />

                        <div className="--content">
                            {data.results.map((result, index) => {
                                return (
                                    <Card
                                        key={`card-${result._id}`}
                                        itemId={result._id}
                                        itemType="character"
                                        title={result.name}
                                        description={result.description}
                                        image={`${result.thumbnail.path}.${result.thumbnail.extension}`}
                                    />
                                );
                            })}
                        </div>

                        <Buttons
                            limit={data.limit}
                            count={data.count}
                            page={page}
                            setPage={setPage}
                            onScroll={() => sectionRef.current.scrollIntoView()}
                        />
                    </>
                ) : (
                    <div className="--no-results">
                        <p>No results found.</p>
                    </div>
                )}
            </section>
        </>
    );
};

export default Characters;
