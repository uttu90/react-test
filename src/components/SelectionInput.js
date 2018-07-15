import React, { Component } from 'react';
import classNames from 'classnames';
import { FormGroup, Dropdown, DropdownItem, Col, Label, DropdownToggle, DropdownMenu, Tooltip } from 'reactstrap';
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
    const { name, text, values, title, value, onChange, invalid, error } = this.props;
    const { open } = this.state;
    const validCheckClassName = classNames(
      "custom-dropdown-toggle", {
        "custom-dropdown-toggle--invalid": invalid
      }
    );
    return (
      <FormGroup row>
        <Label for={name} sm={4}>{text}</Label>
        <Col sm={8}>
          <Dropdown isOpen={open} toggle={this.toggle} id={name}>
            <DropdownToggle caret className={validCheckClassName}>
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