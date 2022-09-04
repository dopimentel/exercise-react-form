import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Option extends Component {
  render() {
    const { countryState } = this.props;
    return (
      <option>{countryState}</option>
    );
  }
}

Option.propTypes = {
  countryState: PropTypes.string.isRequired,
};

export default Option;
