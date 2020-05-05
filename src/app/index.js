import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Home from './pages/home';
import Add from "./pages/add/index";

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/add-expense/:type" component={Add} />
                <Route path="/" component={Home} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
