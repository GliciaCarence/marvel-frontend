import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./containers/Home";
import Characters from "./containers/Characters";
import Comics from "./containers/Comics";
import Favorites from "./containers/Favorites";
import Header from "./components/Header";
import Character from "./containers/Character";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
    faSearch,
    faAngleDoubleRight,
    faAngleDoubleLeft,
    faHeart,
} from "@fortawesome/free-solid-svg-icons";
library.add(faSearch, faAngleDoubleRight, faAngleDoubleLeft, faHeart);

const App = () => {
    return (
        <div>
            <Router>
                <ScrollToTop />
                <Header />
                <Switch>
                    <Route path="/characters">
                        <Characters />
                    </Route>
                    <Route path="/character/:id">
                        <Character />
                    </Route>
                    <Route path="/comics">
                        <Comics />
                    </Route>
                    <Route path="/favorites">
                        <Favorites />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
                <Footer />
            </Router>
        </div>
    );
};

export default App;
