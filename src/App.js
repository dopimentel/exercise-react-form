import React from 'react';
import PersonalForm from './components/PersonalForm';
import AddressForm from './components/AddressForm';

class App extends React.Component {
  state = {
    name: '',
    endereco: '',
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    if (name === 'name') {
      const result = value.toUpperCase();
      this.setState({ [name]: result });
    } else this.setState({ [name]: value });
  };

  render() {
    const { name, endereco } = this.state;
    return (
      <>
        <h1>React Form</h1>
        <PersonalForm name={ name } handleChange={ this.handleChange } />
        <AddressForm endereco={ endereco } handleChange={ this.handleChange } />
      </>
    );
  }
}

export default App;
