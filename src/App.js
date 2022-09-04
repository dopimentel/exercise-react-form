import React from 'react';
import PersonalForm from './components/PersonalForm';
import AddressForm from './components/AddressForm';
import { number } from 'prop-types';

class App extends React.Component {
  state = {
    name: '',
    address: '',
    city: '',
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    if (name === 'name') {
      const result = value.toUpperCase();
      return this.setState({ [name]: result });
    }
    if (name === 'address') {
      const result = this.validateAddress(value);
      return this.setState({ [name]: result });
    }
    return this.setState({ [name]: value });
  };

  // https://pt.stackoverflow.com/questions/91477/como-bloquear-caracteres-especiais-em-campo
  // https://stackoverflow.com/questions/4374822/remove-all-special-characters-with-regexp

  validateAddress = (address) => address.replace(/[^\w\s]/gi, '');

  handleBlur = ({ target }) => {
    const { name, value } = target;
    if (name === 'city') {
      const result = this.validateCity(value);
      this.setState({ [name]: result });
    }
  }

  validateCity = (city) => {
    if (!Number.isNaN(Number(city[0]))) {
      return '';
    }
    return city;
  };

  render() {
    const { city, name, address } = this.state;
    return (
      <>
        <h1>React Form</h1>
        <PersonalForm name={ name } handleChange={ this.handleChange } />
        <AddressForm
          address={ address }
          city={ city }
          handleChange={ this.handleChange }
          handleBlur={ this.handleBlur }

        />
      </>
    );
  }
}

export default App;
