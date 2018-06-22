import React, { Component } from 'react';


const ID= 'sgewwKQPOadfYAwwEMJLW';
const SECRET = 'KscU07mSKcLvbqCxigrfSbo86S9xUcegN64z3EXR';
export class  SearchForm extends Component {
  state = {
    inputCity: ''
  }

  _getCity = (e) => {
    this.setState({ inputCity: e.target.value }) //Get the value of the event on the form
  }

  _handleSubmit = (e) => {
     e.preventDefault()
     const { inputCity } = this.state
     let apiRequest = `https://api.aerisapi.com/airquality/${inputCity},mx?client_id=${ID}&client_secret=${SECRET}`;
     fetch(apiRequest)
       .then(res => res.json())
       .then(airqualityData => {
         const { response = [], success = false } = airqualityData
         console.log(airqualityData);
         this.props.onResult(response, success)
       })
   }

  render() {
    return(
      <form className="form" onSubmit={this._handleSubmit}>
        <input className="form__input"
          type="text"
          placeholder="Ingresa tu ciudad"
          onChange={this._getCity}></input>
        <button className="form__button"><ion-icon name="search"></ion-icon></button>
      </form>
    )
  }
}
