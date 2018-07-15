import React from 'react';
import { FormGroup, Input, Label, Col, Tooltip } from 'reactstrap';
import './RadioInput.css';

export default function RadioInput(props) {
  return (
    <FormGroup row>
      <Label for={props.name} sm={4}>{props.text}</Label>
      <Col sm={8}>
        <div className="choices-container" id={props.name}>
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
                    invalid={!!props.error}
                  />
                  {value}
                </Label>
                <Tooltip 
                  placement="right" 
                  isOpen={!!props.error} 
                  target={props.name}
                >
                  {`${props.text} ${props.error}`}
                </Tooltip>
              </Col>
            ))
          }
        </div>
      </Col>
    </FormGroup>
  )
}
