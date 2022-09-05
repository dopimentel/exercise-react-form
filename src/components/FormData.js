import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FormData extends Component {
  render() {
    const {
      description,
      email,
      position,
      resume,
      city,
      name,
      type,
      address,
      cpf,
      countryState,
      submitted,
    } = this.props;
    if (submitted) {
      return (
        <fieldset>
          <div>{name}</div>
          <div>{email}</div>
          <div>{cpf}</div>
          <div>{address}</div>
          <div>{city}</div>
          <div>{countryState}</div>
          <div>{type ? 'Casa' : 'Apartamento'}</div>
          <div>{resume}</div>
          <div>{position}</div>
          <div>{description}</div>
        </fieldset>
      );
    } return <p />;
  }
}

FormData.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  cpf: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  resume: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  countryState: PropTypes.string.isRequired,
  submitted: PropTypes.bool.isRequired,
};
export default FormData;
