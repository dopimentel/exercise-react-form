import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PersonalForm extends Component {
  render() {
    const { name, email, cpf, handleChange } = this.props;
    return (
      <fieldset>
        <label htmlFor="name">
          Nome
          <input
            name="name"
            type="text"
            maxLength={ 40 }
            value={ name }
            onChange={ handleChange }
            id="name"
          />
        </label>
        <label htmlFor="email">
          Email
          <input
            name="email"
            type="email"
            maxLength={ 50 }
            id="email"
            value={ email }
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="cpf">
          CPF
          <input
            name="cpf"
            type="text"
            maxLength={ 11 }
            id="cpf"
            value={ cpf }
            onChange={ handleChange }
          />
        </label>
      </fieldset>
    );
  }
}

PersonalForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  cpf: PropTypes.string.isRequired,
};

export default PersonalForm;
