import React, { Component } from 'react'
import {
    EuiPageContent,
    EuiPageContentBody,
    EuiPageContentHeader,
    EuiPageContentHeaderSection,
    EuiPageHeader,
    EuiPageHeaderSection,
    EuiTitle,
  } from '@elastic/eui'

export class FacultyDashboard extends Component {
    render() {
        return (
            <div>
                <EuiPageHeader>
                    <EuiPageHeaderSection>
                        <EuiTitle size="l">
                            <h1>Dashboard</h1>
                        </EuiTitle>
                    </EuiPageHeaderSection>>
                </EuiPageHeader>
                <EuiPageContent>
                    <EuiPageContentHeader>
                        <EuiPageContentHeaderSection>
                            <EuiTitle>
                            <h2>Content title</h2>
                            </EuiTitle>
                    </EuiPageContentHeaderSection>
                    <EuiPageContentHeaderSection>
                            Content abilities
                    </EuiPageContentHeaderSection>
                </EuiPageContentHeader>
                <EuiPageContentBody>Content body</EuiPageContentBody>
                </EuiPageContent>
            </div>
        )
    }
}

export default FacultyDashboard
