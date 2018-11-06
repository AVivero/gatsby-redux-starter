import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'gatsby';

import testComponent from './testComponent.module.scss';

const TestComponent = () => (
  <div className="mainContainer">
    <div className="row">
      <div className="col-lg-12 col-md-12 text-center">
        <div className="gatsby-square">
          <h1>Gatsby Starter</h1>
          <h5>Gatsby - Redux - Sass - Bootstrap - Css Modules - Material Icons</h5>
        </div>
      </div>
    </div>
  </div>
);

TestComponent.propTypes = {

};
TestComponent.defaultProps = {

};

export default TestComponent;
