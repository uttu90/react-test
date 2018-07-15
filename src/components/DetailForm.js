import React, { Component } from 'react';
import { Form } from 'reactstrap';
import SelectionInput from './SelectionInput';
import ActionBar, { Spacer } from './ActionBar';

const SELECTIONS = {
  language: {
    text: 'Language',
    values: ['Vietnames', 'Dutch', 'English']
  },
  country: {
    text: 'Home country',
    values: ['Vietnam', 'Ha Lan', 'Anh']
  },
  timezone: {
    text: 'Timezone',
    values: ['-1', '0', '+1']
  },
  birth_year: {
    text: 'Birth year',
    values: ['1', '2', '3', '4']
  }
}

function getAttributeTitle(attribute, account_type) {
  if (attribute !== 'language') return SELECTIONS[attribute].text;
  if (account_type === 'Teacher') {
    return `${SELECTIONS[attribute].text} teach`;
  } else {
    return `${SELECTIONS[attribute].text} study`;
  }
}

class DetailForm extends Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event) {
    const { onChange, type } = this.props;
    onChange(type, {[event.target.name]: event.target.value })
  }

  onSubmit() {
    const { onSubmit, type } = this.props;
    onSubmit(type);
  }

  get title() {
    const { account_type, name } = this.props;
    return `Welcome ${account_type.toLowerCase()} ${name}`;
  }

  render() {
    const { data, account_type, errors } = this.props;
    return (
      <div className='form-container'>
        <h1>{this.title}</h1>
        <Form onSubmit={this.onSubmit} className='custom-form'>
          {
            Object.keys(SELECTIONS).map(attr => (
              <SelectionInput 
                key={attr}
                values={SELECTIONS[attr].values}
                value={data[attr]}
                title={`Select ${SELECTIONS[attr].text.toLowerCase()}`} 
                name={attr} 
                text={getAttributeTitle(attr, account_type)}
                onChange={this.onChange}
                error={errors[attr]}
              />    
            ))
          }
        </Form>
        <ActionBar>
          <span onClick={this.props.back} className="action-bar-item">{`< Last step`}</span>
          <Spacer />
          <span onClick={this.onSubmit} className="action-bar-item">Next step ></span>
        </ActionBar>
      </div>
    );
  }
}

export default DetailForm;