import React, { Component } from 'react';
import styles from './LoginLabel.module.scss';
import PropTypes from 'prop-types';

class LoginLabel extends Component {
  render() {
    return (
      <div className={"no-select " + styles.vimLbLogin}>{this.props.label}</div>
    );
  }
}

// PROPTYPES
LoginLabel.propTypes = {
  label: PropTypes.string.isRequired,
}

export default LoginLabel;