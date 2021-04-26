import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

const Navigation = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
      <>
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">MS</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/about">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/symptoms">Symptoms</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/medication">Medication</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Other Resources
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem tag={Link} to="/shift">
                  Shift.MS
                </DropdownItem>
                <DropdownItem tag={Link} to="/mssociety">
                  National MS Society
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem tag={Link} to="/mstrust">
                  MS Trust
                </DropdownItem>
                <DropdownItem tag={Link} to="/nhswebsite">
                  NHS Website
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
    </>
  );
}

export default Navigation;