import React from 'react';
import PersonalForm from './components/PersonalForm';
import AddressForm from './components/AddressForm';
import ProfessionalForm from './components/ProfessionalForm';
import Button from './components/Button';

class App extends React.Component {
  state = {
    name: '',
    address: '',
    city: '',
    type: true,
    resume: '',
    position: '',
    description: '',
  };

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'radio' ? target.checked : target.value;

    if (name === 'name') {
      const result = value.toUpperCase();
      return this.setState({ [name]: result });
    }
    if (name === 'address') {
      const result = this.validateAddress(value);
      return this.setState({ [name]: result });
    }
    if (name === 'type') {
      return this.setState((state) => ({
        [name]: !state[name],
      }));
    }
    return this.setState({ [name]: value });
  };

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
    const { description, position, resume, city, name, type, address } = this.state;
    return (
      <>
        <h1>React Form</h1>
        <PersonalForm name={ name } handleChange={ this.handleChange } />
        <AddressForm
          address={ address }
          city={ city }
          handleChange={ this.handleChange }
          handleBlur={ this.handleBlur }
          type={ type }
        />
        <ProfessionalForm
          handleChange={ this.handleChange }
          resume={ resume }
          position={ position }
          description={ description }
        />
        <Button />
      </>
    );
  }
}

export default App;
