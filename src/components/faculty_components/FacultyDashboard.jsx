import React, { Component } from 'react'
import { GiBlackBook } from "react-icons/gi";
import { FaRegStickyNote } from "react-icons/fa";
import { GoCalendar } from "react-icons/go";
// import  SubjectList  from './SubjectList'
import {
    EuiPageHeader,
    EuiPageHeaderSection,
    EuiTitle,
    EuiLink,
    EuiCard,
    EuiFlexItem,
    EuiFlexGrid,
    EuiListGroup,
    EuiListGroupItem,
    EuiHorizontalRule,
    EuiDescriptionList,
    EuiDescriptionListTitle,
    EuiDescriptionListDescription,
    EuiFlexGroup,
} from '@elastic/eui'

// import {
//     Card,
//     ListGroup,
//     Button
// } from 'react-bootstrap';

// export const SubjectList = (props) => {
    
//     return (
//         <div>
//             <EuiListGroupItem className="pl-3" onClick={'/'} label={props.name} />
//             <EuiHorizontalRule className="m-0"/>
//         </div>
//     )
// }

export class FacultyDashboard extends Component {
    render() {
        const subjectArr = [
            {
                'id': 1,
                'name': 'C',
            },
            {
                'id': 2,
                'name': 'C++',
            },
            {
                'id': 3,
                'name': 'Java',
            },
            {
                'id': 4,
                'name': 'JavaScript',
            },
            {
                'id': 5,
                'name': 'Python',
            },
        ];
        // console.log(subjectArr);
        let subjectDisplayArr = [...subjectArr];
        subjectDisplayArr = subjectDisplayArr.reverse().slice(0,3);
    
       
        const getSubject = subjectDisplayArr.map((item, index)=> {
            return (
                <div>
                    <EuiListGroupItem className="pl-3" onClick={'/'} label={item.name} />
                    <EuiHorizontalRule className="m-0"/>
                </div>
            );
        })

        const getDeadline = subjectArr.map((item, index)=> {
            return (
                <div>
                    <EuiListGroupItem className="pl-3" onClick={'/'} label={item.name} />
                    <EuiHorizontalRule className="m-0"/>
                </div>
            );
        })

        return (
            <div>
                <EuiPageHeader>
                    <EuiPageHeaderSection>
                        <EuiTitle size="l">
                            <h1>Dashboard</h1>
                        </EuiTitle>
                    </EuiPageHeaderSection>
                </EuiPageHeader>
                {/* <Card className="subjectCard">
                    <div className="dashboardCardHeader">
                        <GiBlackBook className="GiBlackBook" size={50} />
                    </div>
                    <ListGroup id='subjects' variant="flush">
                        <ListGroup.Item><h3>Subjects</h3></ListGroup.Item>
                        <ListGroup.Item>Cras justo odio</ListGroup.Item>
                        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                        {subjectDisplayArr.map((subject)=> <ListGroup.Item>{subject}</ListGroup.Item>)}
                    </ListGroup>
                    <div>
                        <Button variant="outline-primary" size="sm" className="subjectCardBtn">View All</Button>
                    </div>
                </Card> */}
                <EuiFlexGrid gutterSize="l">
                    <EuiFlexItem>
                        <EuiCard className='p-0 subjectCard'
                            title={
                                <h2 className="subjectCardHeader " >
                                    <GiBlackBook /> Subjects
                                </h2>
                            }
                            description={
                                <div>
                                    {/* <EuiSpacer size="s" /> */}
                                    {/* <EuiHorizontalRule className='m-0'/> */}

                                    <EuiListGroup maxWidth="500px" flush={true} bordered={false} className="m-0">
                                        {/* <EuiListGroupItem className="pl-3" onClick={'/'} label="First item" />
                                        <EuiHorizontalRule className="m-0"/>
                                        <EuiListGroupItem className="pl-3" onClick={'/'} label="Second item" />
                                        <EuiHorizontalRule className="m-0"/>
                                        <EuiListGroupItem className="pl-3" onClick={'/'} label="Second item" /> */}
                                        {getSubject}
                                        <EuiLink href="#" className='viewAll'>View All</EuiLink>
                                    </EuiListGroup>
                                    {/* <EuiHorizontalRule margin="none" className="cardList"/> */}
                                </div>
                            }
                        />
                    </EuiFlexItem>

                    <EuiFlexItem style={{height:'270px'}}>
                        <EuiCard className='p-0 deadlineCard'
                            title={
                                <h2 className="deadlineCardHeader " >
                                    <GoCalendar /> Deadlines
                                </h2>
                            }
                            description={
                                <div>
                                    {/* <EuiSpacer size="s" /> */}
                                    {/* <EuiHorizontalRule className='m-0'/> */}

                                    <EuiListGroup maxWidth="500px" flush={true} bordered={false} className="m-0">
                                        {/* <EuiListGroupItem className="pl-3" onClick={'/'} label="First item" />
                                        <EuiHorizontalRule className="m-0"/>
                                        <EuiListGroupItem className="pl-3" onClick={'/'} label="Second item" />
                                        <EuiHorizontalRule className="m-0"/>
                                        <EuiListGroupItem className="pl-3" onClick={'/'} label="Second item" /> */}
                                        <div className="scrollable">
                                        {getDeadline}
                                        </div>
                                        {/* <EuiHorizontalRule margin="none" className="cardList"/> */}
                                        <EuiLink href="#" className='viewAll'>View All</EuiLink>
                                    </EuiListGroup>
                                    
                                </div>
                            }
                        />
                    </EuiFlexItem>

                    <EuiFlexItem>
                        <EuiCard className='p-0'
                            title={
                                <h2 className="testCardHeader " >
                                    <FaRegStickyNote /> Tests
                                </h2>
                            }
                            description={
                                <div>
                                    {/* <EuiDescriptionList>
                                        <EuiDescriptionListTitle>
                                            Dota 2
                                        </EuiDescriptionListTitle>
                                        <EuiDescriptionListDescription>
                                            A videogame that I have spent way too much time on over the years.
                                        </EuiDescriptionListDescription>
                                        <EuiDescriptionListTitle>
                                            Kings Quest VI
                                        </EuiDescriptionListTitle>
                                        <EuiDescriptionListDescription>
                                            The game that forced me to learn DOS.
                                        </EuiDescriptionListDescription>
                                    </EuiDescriptionList>            */}
                                    <EuiListGroup maxWidth="900px" flush={true} bordered={false} className="m-0">
                                         <EuiListGroupItem className="pl-3" onClick={'/'} label={
                                             <div>
                                                <EuiFlexGroup wrap>
                                                    <EuiFlexItem style={{ minWidth: '750px' }}>
                                                        <EuiDescriptionList>
                                                            <EuiDescriptionListTitle>
                                                                Dota 2
                                                            </EuiDescriptionListTitle>
                                                            <EuiDescriptionListDescription>
                                                                A videogame that I have spent way too much time on over the years.
                                                            </EuiDescriptionListDescription>
                                                        </EuiDescriptionList> 
                                                    </EuiFlexItem>
                                                    <EuiFlexItem style={{ minWidth: '50px' }}>
                                                        <h1>90%</h1>
                                                    </EuiFlexItem>
                                                </EuiFlexGroup>
                                             </div>
                                         } />
                                        <EuiHorizontalRule className="m-0"/>
                                        <EuiListGroupItem className="pl-3 pt-0 pb-0" onClick={'/'} label={
                                             <div>
                                                <EuiFlexGroup wrap>
                                                    <EuiFlexItem style={{ minWidth: '750px' }}>
                                                        <EuiDescriptionList>
                                                            <EuiDescriptionListTitle>
                                                                Kings Quest VI
                                                            </EuiDescriptionListTitle>
                                                            <EuiDescriptionListDescription>
                                                                The game that forced me to learn DOS.
                                                            </EuiDescriptionListDescription>
                                                        </EuiDescriptionList> 
                                                    </EuiFlexItem>
                                                    <EuiFlexItem style={{ minWidth: '50px' }}>
                                                        <h1>60%</h1>
                                                    </EuiFlexItem>
                                                </EuiFlexGroup>
                                             </div>
                                         } />
                                        <EuiHorizontalRule className="m-0"/>

                                    </EuiListGroup>
                                    <EuiLink href="#" className='viewAll'>View All</EuiLink>
                                </div>
                            }
                        />
                    </EuiFlexItem>
                </EuiFlexGrid>
            </div>
        )
    }
}

export default FacultyDashboard
