import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Login from "./login/Login";
import Register from "./register/Register";
import App from "./App";

const User_Index = ({setAdmin}) => {
    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Login setAdmin={setAdmin} />
                    </Route>
                    <Route path="/register">
                        <Register setAdmin={setAdmin} />
                    </Route>
                    <Route path="/home">
                        <App />
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default User_Index