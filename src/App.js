import React from 'react';

class App extends React.Component {
  state = {
    name: "",
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
        <fieldset>
          <label htmlFor="name">
            Nome
            <input
              name="name"
              type="text"
              maxLength={ 40 }
              value={ name.toUpperCase() }
              onChange={ this.handleChange }
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
      </>
    );
  }
}

export default App;
