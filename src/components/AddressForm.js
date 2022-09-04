import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Option from './Option';

class AddressForm extends Component {
  render() {
    const { city, address, handleChange, handleBlur } = this.props;
    return (
      <fieldset>
        <label htmlFor="address">
          Endereço
          <input
            name="address"
            type="text"
            maxLength={ 200 }
            value={ address }
            onChange={ handleChange }
            id="address"
          />
        </label>
        <label htmlFor="city">
          Cidade
          <input
            name="city"
            type="text"
            maxLength={ 28 }
            value={ city }
            onChange={ handleChange }
            onBlur={ handleBlur }
            id="city"
          />
        </label>
        <label htmlFor="countryState">
          Estado
          <select id="countryState">
            <Option countryState="Amazonas" />
          </select>
        </label>
      </fieldset>
    );
  }
}

AddressForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
  address: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  handleBlur: PropTypes.func.isRequired,
};

export default AddressForm;
