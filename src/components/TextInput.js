import React from 'react';
import { FormGroup, Input, Label, Col, Tooltip } from 'reactstrap';

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
          invalid={!!props.error}
        />
        <Tooltip placement="right" isOpen={!!props.error} target={props.name}>
          {`${props.text} ${props.error}`}
        </Tooltip>
      </Col>
    </FormGroup>
  )
}
