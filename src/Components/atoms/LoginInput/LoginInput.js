import React, { Component } from "react";
import styles from './LoginInput.module.scss';
import PropTypes from 'prop-types';

class LoginInput extends Component {
  render() {
    // const placeholder = this.props.placeholder && this.props.placeholder;
    return (
      <input 
        type="text" 
        className={styles.vimInpUsername} 
        placeholder={this.props.placeholder}
        name={this.props.name}
        value={this.props.value}
        />
    );
  }
}

// PROPTYPES
LoginInput.propTypes = {
  placeholder: PropTypes.string.isRequired,
}

export default LoginInput;
