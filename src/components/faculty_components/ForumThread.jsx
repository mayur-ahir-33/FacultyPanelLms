import React, { Component } from 'react'
import { MdAccessTime } from "react-icons/md";
import {
    EuiPanel,
    EuiPageContentHeader,
    EuiTitle,
    EuiPageContentHeaderSection,
    EuiPageContentBody,
    EuiPageHeader,
    EuiPageHeaderSection,
    EuiListGroupItem,
    EuiFlexGroup,
    EuiDescriptionList,
    EuiDescriptionListTitle,
    EuiDescriptionListDescription,
    EuiLink,
    EuiHorizontalRule,
    EuiAvatar,
} from '@elastic/eui'

export class ForumThread extends Component {
    render() {

        const post = {
            'id': 'G01',
            'title': 'Am I learning the right way?',
            'author': 'Martin Garrix',
            'time': '5 minutes',
            'replies': '9',
        };

        return (
            <div>
                <EuiPageHeader>
                    <EuiPageHeaderSection>
                        <EuiTitle size="l">
                            <div>
                                <h3>{post.title}</h3>
                                <h6 className="float-left"> Posted by: <EuiAvatar size="s" name={post.author} /><EuiLink href="#"> {post.author}</EuiLink> | <MdAccessTime /> {post.time} ago</h6>
                            </div>
                        </EuiTitle>
                    </EuiPageHeaderSection>
                    <EuiPageHeaderSection>Page abilities</EuiPageHeaderSection>
                </EuiPageHeader>

                <EuiPanel paddingSize="none">
                   
                </EuiPanel>

            </div>
        )
    }
}

export default ForumThread;
