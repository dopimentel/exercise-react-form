import React from 'react';
import PersonalForm from './components/PersonalForm';

class App extends React.Component {
  state = {
    name: '',
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  render() {
    const { name } = this.state;
    return (
      <>
        <h1>React Form</h1>
        <PersonalForm name={ name } handleChange={ this.handleChange } />
      </>
    );
  }
}

export default App;
