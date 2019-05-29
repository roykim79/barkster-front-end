import React, { Component } from 'react';
import { getParkDetails } from '../api/dogParkApi'

class DogPark extends Component {
  state = {
    id: null,
    name: 'Durham Dog Park',
    address: '101 Main St',
    city: 'Durham',
    state: 'NC',
    zipCode: '27703',
    count: 0
  }

  componentDidMount() {
    this.setState(() => ({
      id: this.props.match.params.id
    }))
  }

  handleSubmit = (event) => {
    event.preventDefault()

    // post to server adding checkInCount to count
    console.log(this.refs.dogCount.value)
  }

  render() {
    return (
      <>
        <div className="park-details">
          <h2>{this.state.name} (#{this.state.id})</h2>
          <div>{this.state.address}</div>
          <div>
            <span>{this.state.city}, </span>
            <span>{this.state.state} </span>
            <span>{this.state.zipCode}</span>
          </div>
          <div>{this.state.count} dogs</div>
        </div>
        <div className="park-checkin">
          <h3>Checkin</h3>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="dogCount">Number of dogs</label>
            <input ref="dogCount" type="number" name="dogCount" id="dogCount"/>
            <input type="submit"/>
          </form>
        </div>
      </>
    )
  }
}

export default DogPark;
