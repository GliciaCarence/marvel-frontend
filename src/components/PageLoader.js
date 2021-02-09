import React from "react";
import Loader from "react-loader-spinner";

const PageLoader = () => {
    return (
        <Loader
            type="Circles"
            color="#ed1d23"
            height={80}
            width={80}
            timeout={3000}
        />
    );
};

export default PageLoader;
