import React, { Component } from 'react'
import { TiMessages } from "react-icons/ti";
import { MdAccessTime } from "react-icons/md";
import {
    EuiPageHeader,
    EuiPageHeaderSection,
    EuiTitle,
    EuiButtonEmpty,
    EuiContextMenuItem,
    EuiFlexGroup,
    EuiFlexItem,
    EuiPopover,
    EuiContextMenuPanel,
    EuiPagination,
    EuiPanel,
    EuiListGroup,
    EuiHorizontalRule,
    EuiListGroupItem,
    EuiDescriptionList,
    EuiDescriptionListTitle,
    EuiDescriptionListDescription,
    EuiAvatar,
    EuiLink,
    EuiFlexGrid,
} from '@elastic/eui'

export class LessonForum extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isPopoverOpen: false,
            activePage: 0,
        };

        this.PAGE_COUNT = 10;
    }

    onButtonClick() {
        this.setState({
            isPopoverOpen: !this.state.isPopoverOpen,
        });
    }

    closePopover() {
        this.setState({
            isPopoverOpen: false,
        });
    }

    goToPage = pageNumber => {
        this.setState({
            activePage: pageNumber,
        });
    };

    render() {
        // ----------Lesson Forum Variables----------

        const lesson = [
            {
                'id': 'G01',
                'title': 'Am I learning the right way?',
                'author': 'Martin Garrix',
                'time': '5 minutes',
                'replies': '9',
                'subject': 'Java',
            },
            {
                'id': 'G01',
                'title': 'Am I learning the right way?',
                'author': 'DJ Snake',
                'time': '15 minutes',
                'replies': '10',
                'subject': 'JavaScript',
            },
            {
                'id': 'G01',
                'title': 'Am I learning the right way?',
                'author': 'Dimitri Vegas',
                'time': '20 minutes',
                'replies': '5',
                'subject': 'Python',
            },
            {
                'id': 'G01',
                'title': 'Am I learning the right way?',
                'author': 'Martin Garrix',
                'time': '5 minutes',
                'replies': '9',
                'subject': 'Java',
            },
            {
                'id': 'G01',
                'title': 'Am I learning the right way?',
                'author': 'DJ Snake',
                'time': '15 minutes',
                'replies': '10',
                'subject': 'JavaScript',
            },
            {
                'id': 'G01',
                'title': 'Am I learning the right way?',
                'author': 'Dimitri Vegas',
                'time': '20 minutes',
                'replies': '5',
                'subject': 'Python',
            },
        ];

        const getLesson = lesson.map((post, index) => {
            return (
                <div>
                    <EuiListGroupItem className="pl-3 pt-3" onClick={'/'} label={
                        <div>
                            <EuiFlexGroup wrap>
                                <EuiFlexItem style={{ minWidth: '750px' }}>
                                    <EuiDescriptionList>
                                        <EuiDescriptionListTitle>
                                            {post.title}
                                        </EuiDescriptionListTitle>
                                        <EuiDescriptionListDescription>
                                            Subject: {post.subject} <br/>
                                            Posted by: <EuiAvatar size="s" name={post.author} /><EuiLink href="#"> {post.author}</EuiLink> | <MdAccessTime /> {post.time} ago
                                        </EuiDescriptionListDescription>
                                    </EuiDescriptionList>
                                </EuiFlexItem>
                                <EuiFlexItem style={{ minWidth: '50px' }}>
                                    <h4><TiMessages /> {post.replies}</h4>
                                </EuiFlexItem>
                            </EuiFlexGroup>
                        </div>
                    } />
                    <EuiHorizontalRule className="m-0" />
                </div>
            );
        });


        // ---------- Pagination Variables----------
        const button = (
            <EuiButtonEmpty
                size="s"
                color="text"
                iconType="arrowDown"
                iconSide="right"
                onClick={this.onButtonClick.bind(this)}>
                Rows per page: 50
            </EuiButtonEmpty>
        );

        const items = [
            <EuiContextMenuItem
                key="10 rows"
                icon="empty"
                onClick={() => {
                    this.closePopover();
                    window.alert('10 rows');
                }}>
                10 rows
            </EuiContextMenuItem>,
            <EuiContextMenuItem
                key="20 rows"
                icon="empty"
                onClick={() => {
                    this.closePopover();
                    window.alert('20 rows');
                }}>
                20 rows
            </EuiContextMenuItem>,
            <EuiContextMenuItem
                key="50 rows"
                icon="check"
                onClick={() => {
                    this.closePopover();
                    window.alert('50 rows');
                }}>
                50 rows
            </EuiContextMenuItem>,
            <EuiContextMenuItem
                key="100 rows"
                icon="empty"
                onClick={() => {
                    this.closePopover();
                    window.alert('100 rows');
                }}>
                100 rows
            </EuiContextMenuItem>,
        ];
        return (
            <div>
                <EuiPageHeader>
                    <EuiPageHeaderSection>
                        <EuiTitle size="l">
                            <h1>Lesson Forum</h1>
                        </EuiTitle>
                    </EuiPageHeaderSection>
                </EuiPageHeader>

                {/* ---------- General Forum ---------- */}

                <div>
                    <EuiFlexGrid>
                        <EuiFlexItem>
                            <EuiPanel>
                                <EuiListGroup maxWidth="1200px" flush={true} bordered={false} className="m-0 mt-3">
                                    <EuiHorizontalRule className="m-0" />
                                    {getLesson}
                                </EuiListGroup>
                            </EuiPanel>
                        </EuiFlexItem>
                    </EuiFlexGrid>
                </div>

                {/* ---------- Pagination ---------- */}

                <EuiFlexGroup justifyContent="spaceBetween" alignItems="center" style={{ 'max-width': '900px' }}>
                    <EuiFlexItem grow={false}>
                        <EuiPopover
                            button={button}
                            isOpen={this.state.isPopoverOpen}
                            closePopover={this.closePopover.bind(this)}
                            panelPaddingSize="none">
                            <EuiContextMenuPanel items={items} />
                        </EuiPopover>
                    </EuiFlexItem>

                    <EuiFlexItem grow={false}>
                        <EuiPagination
                            pageCount={this.PAGE_COUNT}
                            activePage={this.state.activePage}
                            onPageClick={this.goToPage}
                        />
                    </EuiFlexItem>
                </EuiFlexGroup>
            </div>
        )
    }
}

export default LessonForum
