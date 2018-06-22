import React, { Component } from 'react';

import { SearchForm } from './SearchForm';
import { DisplayAirQualityData } from './DisplayAirQualityData';

import './App.css';

class App extends Component {
  state = {
    response: [],
    usedSearch: false,
    success: false
  }
  _handleResult = (response) => {
    this.setState({ response, usedSearch: true })
  }

  _renderResult() {
    return this.state.response.length === 0
       ? <h4>Lo sentimos no encontramos esa ciudad 🤯, vuelve intertarlo! 😚</h4>
       : <DisplayAirQualityData airData={this.state.response} success={this.state.success}/>

  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Verifica la calidad de Aire de tu ciudad.</h1>
        </header>
        <main className="flex-container">
          <SearchForm onResult={this._handleResult}/>
          {
            this.state.usedSearch
            ? this._renderResult()
            : <small>Usa el formulario para buscar tu ciudad.</small>
          }

        </main>
      </div>
    );
  }
}

export default App;
