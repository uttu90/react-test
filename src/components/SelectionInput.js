import React, { Component } from 'react';
import {
  Col, 
  Dropdown, 
  DropdownItem, 
  DropdownToggle, 
  DropdownMenu, 
  FormGroup, 
  Label, 
  Tooltip 
} from 'reactstrap';
import './SelectionInput.css';

class SelectionInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    }

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(({ open }) => ({
      open: !open
    }))
  }

  render() {
    const { name, text, values, title, value, onChange, error } = this.props;
    const { open } = this.state;
    return (
      <FormGroup row>
        <Label for={name} sm={4}>{text}</Label>
        <Col sm={8}>
          <Dropdown isOpen={open} toggle={this.toggle} id={name}>
            <DropdownToggle caret className="custom-dropdown-toggle">
              {
                value || title
              }
            </DropdownToggle>
            <DropdownMenu className="custom-dropdown-menu">
              {
                values.map(itemValue => (
                  <DropdownItem 
                    key={itemValue} 
                    onClick={onChange} 
                    name={name} 
                    value={itemValue}
                  >
                    {itemValue}
                  </DropdownItem>
                ))
              }
            </DropdownMenu>
          </Dropdown>
        </Col>
        <Tooltip placement="right" isOpen={!!error} target={name}>
          {`${text} ${error}`}
        </Tooltip>
      </FormGroup>
    );
  }
}

export default SelectionInput;