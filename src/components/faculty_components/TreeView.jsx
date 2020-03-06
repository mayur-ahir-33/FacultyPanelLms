import React, { Component } from 'react';
import { EuiIcon, EuiTreeView, } from '@elastic/eui';
import {Link} from 'react-router-dom';

export class TreeView extends Component {
    showAlert = () => {
        alert('You squashed a bug!');
      };
    
      render() {
        const items = [
          {
            label:<Link to='/'>Dashboard</Link>,
            id: 'dashboard',
          },
          {
            label: <Link to='/subjects'>Subjects</Link>,
            id: 'dashboard',
            
          },
          {
            label: 'Assignment',
            id: 'dept',
            icon: <EuiIcon type="folderClosed" />,
            iconWhenExpanded: <EuiIcon type="folderOpen" />,
            isExpanded: true,
            children: [
              {
                label: 'Add Assign',
                id: 'addAssign',
                icon: <EuiIcon type="document" />,
              },
              {
                label: 'View Assign',
                id: 'viewAssign',
                icon: <EuiIcon type="document" />,
                
              },
            ],
          },
          {
            label: 'Quiz',
            id: 'quiz',
            icon: <EuiIcon type="folderClosed" />,
            iconWhenExpanded: <EuiIcon type="folderOpen" />,
            isExpanded: true,
            children: [
              {
                label: 'Add Quiz',
                id: 'addQuiz',
                icon: <EuiIcon type="document" />,
              },
              {
                label: 'View Quiz',
                id: 'viewQuiz',
                icon: <EuiIcon type="document" />,
              },
            ],
          },
          {
            label: 'Reports',
            id: 'reports',
            icon: <EuiIcon type="document" />,
          },
        ];
    
        return (
          <div style={{ width: '13rem' }}>
            <EuiTreeView items={items} aria-label="Sample Folder Tree" />
          </div>
        );
      }
    }

export default TreeView;
