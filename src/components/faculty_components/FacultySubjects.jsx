import React, { Component } from 'react'
import {
    EuiPageHeader,
    EuiPageHeaderSection,
    EuiTitle,
    EuiPanel,
    EuiFlexGrid,
    EuiFlexItem
} from '@elastic/eui'

export class FacultySubjects extends Component {
    render() {

        const subjectList =[
            {
                'code': 'CE501',
                'name': 'Theory of Computation',
            },
            {
                'code': 'CE502',
                'name': 'Theory of Computation',
            },
            {
                'code': 'CE503',
                'name': 'Theory of Computation',
            },
            {
                'code': 'CE504',
                'name': 'Theory of Computation',
            },
            {
                'code': 'CE505',
                'name': 'Theory of Computation',
            },
            {
                'code': 'CE506',
                'name': 'Theory of Computation',
            },
        ];

        const subjectListPanels = subjectList.map((subject, index) =>{
            return(
                    <EuiFlexItem>
                        <EuiPanel onClick={'/'} className="subjectsPanel">
                            <div className="container-fluid">
                                <p>CE801</p>
                            </div>
                        </EuiPanel>
                    </EuiFlexItem>
            );
        });

        return (
            <div>
                <EuiPageHeader>
                    <EuiPageHeaderSection>
                        <EuiTitle size="l">
                            <h1>Subjects</h1>
                        </EuiTitle>
                    </EuiPageHeaderSection>
                </EuiPageHeader>

                {/* ----------Subject Codes---------- */}

                {/* <EuiPanel className="subjectsPanel">
                    <div className="container-fluid">
                        <p>CE801</p>
                    </div>
                </EuiPanel> */}
                <div className="container">
                <EuiFlexGrid gutterSize="l" columns={4}>               
                    {subjectListPanels}
                </EuiFlexGrid>
                </div>
            </div>
        )
    }
}

export default FacultySubjects
