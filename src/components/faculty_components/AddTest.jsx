import React, { Component } from 'react'
import {
    EuiPageHeader,
    EuiPageHeaderSection,
    EuiTitle,
    EuiForm,
    EuiFormRow,
    EuiFieldText,
    EuiSelect,
} from '@elastic/eui';

export class AddTest extends Component {
    constructor(props) {
        super(props);

        this.dept = [
            { value: 'option_select', text: 'Please select' },
            { value: 'option_male', text: 'CE' },
            { value: 'option_female', text: 'IT' },
        ];

        this.sem = [
            { value: 'option_select', text: 'Please select' },
            { value: 'option_one', text: 'Semester 1' },
            { value: 'option_two', text: 'Semester 2' },
            { value: 'option_three', text: 'Semester 3' },
            { value: 'option_four', text: 'Semester 4' },
            { value: 'option_five', text: 'Semester 5' },
            { value: 'option_six', text: 'Semester 6' },
            { value: 'option_seven', text: 'Semester 7' },
            { value: 'option_eight', text: 'Semester 8' },
        ];

        this.subject = [
            { value: 'option_select', text: 'Please select' },
            { value: 'option_java', text: 'Java' },
            { value: 'option_c', text: 'C' },
            { value: 'option_python', text: 'Python' },
        ];

        this.attempts = [
            { value: 'option_select', text: 'Please select' },
            { value: 'option_one', text: 'One Time' },
            { value: 'option_multi', text: 'Multiple Time' },
        ];



        this.state = {
            dept: this.dept[0].value,
            sem: this.sem[0].value,
            subject: this.subject[0].value,
            attempts: this.attempts[0].value,
        };

        // this.handleChange = this.handleChange.bind(this);
    }

    onChangeDept = e => {
        this.setState({
            dept: e.target.value,
        });
    };

    onChangeSem = e => {
        this.setState({
            sem: e.target.value,
        });
    };

    onChangeSubject = e => {
        this.setState({
            subject: e.target.value,
        });
    };

    onChangeAttempts = e => {
        this.setState({
            Attempts: e.target.value,
        });
    };

    render() {
        return (
            <div>
                <EuiPageHeader>
                    <EuiPageHeaderSection>
                        <EuiTitle size="l">
                            <h1>Add Test</h1>
                        </EuiTitle>
                    </EuiPageHeaderSection>
                </EuiPageHeader>

                {/* ---------- Test Form ---------- */}

                <EuiForm>
                    <EuiFormRow label="Exam Label">
                        <EuiFieldText name="examlabel" />
                    </EuiFormRow>
                    <EuiFormRow label="Department:">
                        <EuiSelect
                            id="dept"
                            options={this.dept}
                            value={this.state.value}
                            onChange={this.onChangeDept}
                        />
                    </EuiFormRow>
                    <EuiFormRow label="Semester:">
                        <EuiSelect
                            id="sem"
                            options={this.sem}
                            value={this.state.value}
                            onChange={this.onChangeDept}
                        />
                    </EuiFormRow>
                    <EuiFormRow label="Subject:">
                        <EuiSelect
                            id="dept"
                            options={this.gender}
                            value={this.state.value}
                            onChange={this.onChangeDept}
                        />
                    </EuiFormRow>
                </EuiForm>
            </div>
        )
    }
}

export default AddTest;