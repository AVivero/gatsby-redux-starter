import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'gatsby';

import footerStyles from './footer.module.scss';

const Footer = () => (
  <footer className={`footer ${footerStyles.footer}`}>
    <div className="container">
      <div className="row">
        <div className="col-lg-12 col-md-12">
          <p>Copyright © Your Website 2018</p>
          <p className="footer-gatsby">Proudly published with Gatsby</p>
        </div>
      </div>
    </div>
  </footer>
);

Footer.propTypes = {

};
Footer.defaultProps = {

};

export default Footer;
