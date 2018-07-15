import React from 'react';
import { FormGroup, Input, Label, Col } from 'reactstrap';

export default function TextInput(props) {
  return (
    <FormGroup row>
      <Label for={props.name} sm={4}>{props.text}</Label>
      <Col sm={8}>
        <Input
          type={props.type}
          name={props.name}
          id={props.name}
          value={props.value}
          onChange={props.onChange}
          invalid={props.invalid}
        />
      </Col>
    </FormGroup>
  )
}
