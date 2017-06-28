import React from 'react'
import {Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import {parseQuery} from '../../services/Router/util.js'
import LocaleButton from '../../containers/MainNavbar/LocaleButton.js'

/**
 * Main navbar for the app
 */
export default class MainNavbar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false,
      localeIsOpen: false
    }
    this.toggleCollapse = this.toggleCollapse.bind(this)
    this.toggleLocale = this.toggleLocale.bind(this)
  }
  /**
   * Toggles the collapsable element
   */
  toggleCollapse() {
    this.setState({ isOpen: !this.state.isOpen })
  }

  /**
   * Toggles the locale drop down
   */
  toggleLocale() {
    this.setState({ localeIsOpen: !this.state.localeIsOpen })
  }

  render() {
    const {location} = this.props
    const lang = parseQuery(location.search).lang
    return (
      <Navbar className="z-index-5" toggleable light>
        <div className="container">
          <NavbarBrand>
            <span className="text-uppercase">Hamu Web Manager</span>
          </NavbarBrand>
          <NavbarToggler right onClick={this.toggleCollapse} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Dropdown isOpen={this.state.localeIsOpen} toggle={this.toggleLocale}>
                  <DropdownToggle nav>
                    <span className={"flag-icon flag-icon-" + ((lang == 'en') ? 'us' : 'vn') }></span>
                  </DropdownToggle>
                  <DropdownMenu className="dropdown-menu-right">
                    <DropdownItem><NavLink tag={LocaleButton} to={'en'}><span className="flag-icon flag-icon-us"></span></NavLink></DropdownItem>
                    <DropdownItem><NavLink tag={LocaleButton} to={'vi'}><span className="flag-icon flag-icon-vn"></span></NavLink></DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </NavItem>
            </Nav>
          </Collapse>
        </div>
      </Navbar>
    )
  }
}
