import React, { Component } from 'react'
import FacultyMainPage from './FacultyMainPage'
import {
    BrowserRouter,
    Switch,
    Route,
  } from 'react-router-dom';

export class Routing extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Switch>
                        
                        <Route exact path="/" component={FacultyMainPage}/>
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}

export default Routing
