import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Option from './Option';
import countryStates from '../countryStates';

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
            {countryStates.map((countryState) => (
              <Option key={ countryState } countryState={ countryState } />
            ))}
          </select>
        </label>
        <label htmlFor="casa">
          Casa
          <input type="radio" id="casa" checked name="tipo" />
        </label>
        <label htmlFor="apartamento">
          Apartamento
          <input type="radio" id="apartamento" name="tipo" />
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
