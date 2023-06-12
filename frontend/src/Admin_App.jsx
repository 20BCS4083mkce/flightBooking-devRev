import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Ad_Login from './admin_login/Ad_Login'


const Admin_App = ({setAdmin}) => {
  return (
    <div>
        <Router>
            <Switch>
                <Route exact path="/">
                    <Ad_Login setAdmin={setAdmin}/>
                </Route>
                <Route path="/admin/home">
                    "Hello All"
                </Route>
            </Switch>
        </Router>
    </div>
  )
}

export default Admin_App