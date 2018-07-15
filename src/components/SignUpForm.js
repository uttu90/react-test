import React, { Component } from 'react';
import { Form } from 'reactstrap';
import TextInput from './TextInput';
import RadioInput from './RadioInput';
import ActionBar, { Spacer } from './ActionBar';
import { LABELS } from '../contstants';

class SignUpForm extends Component {
  constructor(props) {
    super(props);

    this.workingField = 'credentials';

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  render() {
    const { data, errors } = this.props;
    return (
      <div className='form-container'>
        <h1>Get started now!</h1>
        <Form onSubmit={this.onSubmit} className='custom-form'>
          {
            Object.keys(LABELS).map(attr => (
              <TextInput 
                key={attr}
                name={attr}
                type={LABELS[attr].type}
                text={LABELS[attr].text}
                value={data[attr] || ''}
                onChange={this.onChange}
                error={errors[attr]}
              />
            ))
          }
          <RadioInput
            name="account_type"
            values={["Teacher", "Student"]}
            value={data.account_type || ''}
            onChange={this.onChange}
            text="Account type"
            error={errors.account_type}
          />
        </Form>
        <ActionBar>
          <Spacer />
          <span 
            onClick={this.onSubmit} 
            className="action-bar-item"
          >
            Next step >
          </span>
        </ActionBar>
      </div>
    );
  }

  onChange(event) {
    const { onChange } = this.props;
    onChange(
      this.workingField, 
      {
        [event.target.name]: event.target.value 
      }
    );
  }

  onSubmit(event) {
    const { onSubmit } = this.props;
    onSubmit(this.workingField);
    event.preventDefault();
  }
}

export default SignUpForm;