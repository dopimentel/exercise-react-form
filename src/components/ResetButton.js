import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ResetButton extends Component {
  render() {
    const { handleClick } = this.props;
    return <button type="reset" onClick={ handleClick }>Limpar</button>;
  }
}

ResetButton.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default ResetButton;
