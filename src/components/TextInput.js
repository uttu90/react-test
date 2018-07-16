import React from 'react';
import { FormGroup, FormText,Input, Label, Col, Tooltip } from 'reactstrap';

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
        {props.name === 'password' && (
          <FormText>
            {`Password must contain at least 1 lower case char, 
              1 upper case, 1 number, 1 special char (!@#$%) and at least 8 characters long.`
            }
          </FormText>
        )}
      </Col>
    </FormGroup>
  )
}
