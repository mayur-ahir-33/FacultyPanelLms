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
import FacultyProfile from './FacultyProfile';
import FacultyEditProfile from './FacultyEditProfile';
import Forum from './Forum';
import GeneralForum from './GeneralForum';

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
                                <Route exact path="/profile" component={FacultyProfile} />
                                <Route exact path="/editprofile" component={FacultyEditProfile} />
                                <Route exact path="/forum" component={Forum} />
                                <Route exact path="/generalforum" component={GeneralForum} />
                            </Switch>
                        
                    </EuiPageBody>
                </EuiPage>
                </BrowserRouter>
            </div>
        )
    }
}

export default FacultyMainPage;
