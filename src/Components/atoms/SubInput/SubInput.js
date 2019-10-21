import React, { Component } from "react";
import styles from './SubInput.module.scss';
import PropTypes from 'prop-types';

class SubInput extends Component {
  render() {
    // const placeholder = this.props.placeholder && this.props.placeholder;
    return (
      <input type="text" className={styles.vimInpUsername} placeholder={this.props.placeholder} />
    );
  }
}

SubInput.propTypes = {
  placeholder: PropTypes.string.isRequired,
}

export default SubInput;
