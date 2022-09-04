import React from 'react';
import PersonalForm from './components/PersonalForm';
import AddressForm from './components/AddressForm';

class App extends React.Component {
  state = {
    name: '',
    address: '',
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

  render() {
    const { name, address } = this.state;
    return (
      <>
        <h1>React Form</h1>
        <PersonalForm name={ name } handleChange={ this.handleChange } />
        <AddressForm address={ address } handleChange={ this.handleChange } />
      </>
    );
  }
}

export default App;
