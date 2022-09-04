import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PersonalForm extends Component {
  render() {
    const { name, handleChange } = this.props;
    return (
      <fieldset>
        <label htmlFor="name">
          Nome
          <input
            name="name"
            type="text"
            maxLength={ 40 }
            value={ name.toUpperCase() }
            onChange={ handleChange }
            id="name"
          />
        </label>
        <label htmlFor="email">
          Email
          <input name="email" type="email" maxLength={ 50 } id="email" />
        </label>
        <label htmlFor="cpf">
          CPF
          <input type="text" maxLength={ 11 } id="cpf" />
        </label>
      </fieldset>
    );
  }
}

PersonalForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export default PersonalForm;
