import React, { Component } from 'react';
import { getParkDetails } from '../api/dogParkApi'
import { checkInDogs } from '../api/dogParkApi'

class DogPark extends Component {
  state = {}

  componentDidMount() {
    getParkDetails(this.props.match.params.id)
    .then(({parkName, address, city, state, zipCode, currentDogCount}) => {
      this.setState(() => ({
        parkName,
        address,
        city,
        state,
        zipCode,
        currentDogCount
      }))
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    const { dogCount, duration } = event.target

    // post to server adding checkInCount to count
    checkInDogs(duration.value, dogCount.value, this.props.match.params.id)
    .then(response => {
      console.log(response)
    })
  }

  render() {
    return (
      <>
        <div className="park-details">
          <h2>{this.state.parkName}</h2>
          <div>{this.state.address}</div>
          <div>
            <span>{this.state.city}, </span>
            <span>{this.state.state} </span>
            <span>{this.state.zipCode}</span>
          </div>
          <div>{this.state.currentDogCount} dogs</div>
        </div>
        <div className="park-checkin">
          <h3>Checkin</h3>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="dogCount">Number of dogs</label>
            <input type="number" name="dogCount" id="dogCount"/>
            <label htmlFor="duration">Duration</label>
            <input type="radio" name="duration" value='1800000'/>30 min <br/>
            <input type="radio" name="duration" value='3600000'/>60 min <br/>
            <input type="radio" name="duration" value='5400000'/>90 min <br/>
            <input type="radio" name="duration" value='7200000'/>120 min <br/>
            <input type="submit"/>
          </form>
        </div>
      </>
    )
  }
}

export default DogPark;
