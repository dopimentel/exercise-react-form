import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProfessionalForm extends Component {
  state = {
    alert: false,
  }

  handleMouseEnter = () => {
    this.setState((state) => {
      if (state.alert === false) {
        global.alert('Preencha com cuidado esta informação.');
        return { alert: !state.alert };
      }
    });
  };

  render() {
    const { description, position, resume, handleChange } = this.props;

    return (
      <fieldset>
        <label htmlFor="resume">
          Resumo do currículo
          <textarea
            name="resume"
            maxLength={ 1000 }
            id="resume"
            value={ resume }
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="position">
          Cargo
          <input
            name="position"
            type="text"
            maxLength={ 40 }
            value={ position }
            onChange={ handleChange }
            id="position"
            onMouseEnter={ this.handleMouseEnter }
          />
        </label>
        <label htmlFor="description">
          Descrição do cargo
          <textarea
            name="description"
            maxLength={ 500 }
            id="description"
            value={ description }
            onChange={ handleChange }
          />
        </label>
      </fieldset>
    );
  }
}

ProfessionalForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
  resume: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
export default ProfessionalForm;
