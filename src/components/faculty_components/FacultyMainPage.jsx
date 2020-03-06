import React, { Component } from 'react'
import NavBar from './NavigationBar'
import { 
    BrowserRouter,
    Switch,
    Route,
} from 'react-router-dom';
import {
    EuiPage,
    EuiPageBody,
    EuiPageSideBar,
} from '@elastic/eui'
import TreeView from './TreeView'
import FacultyDashboard from './FacultyDashboard'
import FacultySubjects from './FacultySubjects';

export class FacultyMainPage extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                <NavBar />
                <EuiPage>
                    <EuiPageSideBar><TreeView /></EuiPageSideBar>
                    <EuiPageBody>
                        
                            <Switch>
                                <Route exact path="/" component={FacultyDashboard} />
                                <Route exact path="/subjects" component={FacultySubjects} />
                            </Switch>
                        
                    </EuiPageBody>
                </EuiPage>
                </BrowserRouter>
            </div>
        )
    }
}

export default FacultyMainPage;
