import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <footer className="--footer">
            <p>
                Made with <a href="https://reactjs.org/">React</a> at{" "}
                <a href="https://www.lereacteur.io/">Le Reacteur</a>
            </p>
            <a href="https://github.com/GliciaCarence" target="blank">
                <FontAwesomeIcon
                    icon={faGithub}
                    size="2x"
                    style={{ color: "white" }}
                />
            </a>
        </footer>
    );
};

export default Footer;
