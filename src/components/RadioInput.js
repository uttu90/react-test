import React from 'react';
import { FormGroup, Input, Label, Col } from 'reactstrap';
import './RadioInput.css';

export default function RadioInput(props) {
  return (
    <FormGroup row>
      <Label for={props.name} sm={4}>{props.text}</Label>
      <Col sm={8}>
        <div className="choices-container">
          {
            props.values.map(value => (
              <Col key={value}>
                <Label className="custom-label">
                  <Input
                    required
                    type="radio"
                    name={props.name}
                    value={value}
                    checked={value === props.value}
                    onChange={props.onChange}
                    invalid={props.invalid}
                  />
                  {value}
                </Label>
              </Col>
            ))
          }
        </div>
      </Col>
    </FormGroup>
  )
}
