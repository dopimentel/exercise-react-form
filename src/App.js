import React from 'react';
import PersonalForm from './components/PersonalForm';
import AddressForm from './components/AddressForm';
import ProfessionalForm from './components/ProfessionalForm';
import Button from './components/Button';
import FormData from './components/FormData';

class App extends React.Component {
  state = {
    name: '',
    email: '',
    address: '',
    countryState: '',
    cpf: '',
    city: '',
    type: true,
    resume: '',
    position: '',
    description: '',
    submitted: false,
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

  handleSubmit = (event) => {
    const { target: { name } } = event;
    event.preventDefault();
    this.setState((state) => ({ submitted: !state[name] }));
  };

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
    } = this.state;
    return (
      <>
        <h1>React Form</h1>
        <form onSubmit={ this.handleSubmit }>
          <PersonalForm
            name={ name }
            email={ email }
            cpf={ cpf }
            handleChange={ this.handleChange }
          />
          <AddressForm
            address={ address }
            city={ city }
            handleChange={ this.handleChange }
            handleBlur={ this.handleBlur }
            type={ type }
            countryState={ countryState }
          />
          <ProfessionalForm
            handleChange={ this.handleChange }
            resume={ resume }
            position={ position }
            description={ description }
          />
          <FormData
            submitted={ submitted }
            name={ name }
            email={ email }
            cpf={ cpf }
            address={ address }
            type={ type }
            city={ city }
            resume={ resume }
            position={ position }
            description={ description }
            countryState={ countryState }
          />
          <Button />
        </form>
      </>
    );
  }
}

export default App;
