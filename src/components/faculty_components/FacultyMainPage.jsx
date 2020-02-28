import React, { Component } from 'react'
import NavBar from './NavigationBar'
import {
    EuiPage,
    EuiPageBody,
    EuiPageSideBar,
  } from '@elastic/eui'
import TreeView from './TreeView'
import FacultyDashboard from './FacultyDashboard'

export class FacultyMainPage extends Component {
    render() {
        return (
            <div>
                <NavBar/>
                <EuiPage>
                    <EuiPageSideBar><TreeView/></EuiPageSideBar>
                    <EuiPageBody>
                        <FacultyDashboard/>
                    </EuiPageBody>
                </EuiPage>
            </div>
        )
    }
}

export default FacultyMainPage;
