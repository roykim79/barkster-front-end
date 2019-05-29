import React, { Component } from 'react';
import { createDogPark } from '../api/dogParkApi'

class NewDogPark extends Component {
  handleSubmit = event => {
    event.preventDefault()

    createDogPark(event.target)
    .then(response => {
      this.props.history.push(`/parks/${response._id}`)
    })
  }

  render() {
    return (
      <>
        <h2>New Dog Park</h2>
        <form action="" onSubmit={this.handleSubmit}>
          <label htmlFor="parkName">Name</label>
          <input type="text" name="parkName"/>
          <label htmlFor="address">Address</label>
          <input type="text" name="address"/>
          <label htmlFor="city">City</label>
          <input type="text" name="city"/>
          <label htmlFor="state">State</label>
          <input type="text" name="state"/>
          <label htmlFor="zipCode">Zip</label>
          <input type="text" name="zipCode"/>
          <input type="submit"/>
        </form>
      </>
    );
  }
}

export default NewDogPark;
