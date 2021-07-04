import React from 'react'
import { Switch, Route } from "react-router-dom";

// import Pages
import MainPage from '../pages/MainPage';
import PostPage from '../pages/PostPage';

const ContainerLayout = () => {
    return (
        <main>
            <Switch>
                {/* Main */}
                <Route exact path="/">
                    <MainPage />
                </Route>
                {/* Posts */}
                <Route exact path="/post">
                    <PostPage />
                </Route>
            </Switch>
        </main>
    )
}

export default ContainerLayout
