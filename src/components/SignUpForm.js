import React, { Component } from 'react';
import { Form } from 'reactstrap';
import TextInput from './TextInput';
import RadioInput from './RadioInput';
import ActionBar, { Spacer } from './ActionBar';

const LABELS = {
  first_name: {
    text: 'First name',
    type: 'text'
  },
  last_name: {
    text: 'Last name',
    type: 'text'
  },
  email: {
    text: 'Email',
    type: 'email'
  },
  password: {
    text: 'Password',
    type: 'password'
  }
}

class SignUpForm extends Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  render() {
    const { data, errors } = this.props;
    return (
      <div className='form-container'>
        <h1>Get started</h1>
        <Form onSubmit={this.onSubmit} className='custom-form'>
          {
            Object.keys(LABELS).map(label => (
              <TextInput 
                key={label}
                name={label}
                type={LABELS[label].type}
                text={LABELS[label].text}
                value={data[label] || ''}
                onChange={this.onChange}
                error={errors[label]}
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
          <span onClick={this.onSubmit} className="action-bar-item">Next step ></span>
        </ActionBar>
      </div>
    );
  }

  onChange(event) {
    const { onChange, type } = this.props;
    onChange(type, {[event.target.name]: event.target.value });
  }

  onSubmit(event) {
    const { onSubmit, type } = this.props;
    onSubmit(type);
    event.preventDefault();
  }
}

export default SignUpForm;