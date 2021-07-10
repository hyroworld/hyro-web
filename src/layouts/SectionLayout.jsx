import React from 'react'
import { Switch, Route } from "react-router-dom";

// import Pages
import MainPage from '../pages/Main';
import About from "../pages/About";
import Posts from '../pages/Posts';
import Contact from "../pages/Contact";
import Ask from "../pages/Ask";

const SectionLayout = () => {
    return (
        <main>
            <Switch>
                {/* Main */}
                <Route exact path="/">
                    <MainPage />
                </Route>
                {/* About Me */}
                <Route exact path="/info">
                    <About />
                </Route>
                {/* Posts */}
                <Route exact path="/posts">
                    <Posts />
                </Route>
                {/* Contact */}
                <Route exact path="/contact">
                    <Contact />
                </Route>
                {/* Ask */}
                <Route exact path="/ask">
                    <Ask />
                </Route>
            </Switch>
        </main>
    )
}

export default SectionLayout
