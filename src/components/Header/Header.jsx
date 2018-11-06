import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'gatsby';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';

import headerStyles from './header.module.scss';

const Header = () => {
  return (
    <header className={`header header-top-transparent ${headerStyles.header}`}>
      <Navbar className="navbar navbar-light navbar-expand-lg navbar-static-top sticky-header">
        <Navbar.Header>
          <Navbar.Brand className="navbar-header">
            <a className="navbar-brand" href="https://www.gatsbyjs.org/">
              <img src="/icons/gatsbyJS.png" alt="logo" className="logo-default" />
            </a>
          </Navbar.Brand>
          <Nav className="navbar-nav ml-auto">
            <Link className="dropdown nav-item nav-link" key="1" to="/">
              <img className="navbar-icon github-icon" src="/icons/github.png" alt="GitHub" />
            </Link>
            <Link className="dropdown nav-item nav-link" key="2" to="/">
              <i className="navbar-icon material-icons">
                email
              </i>
            </Link>
          </Nav>
        </Navbar.Header>
      </Navbar>
    </header>
  );
};

Header.propTypes = {

};
Header.defaultProps = {

};

export default Header;
