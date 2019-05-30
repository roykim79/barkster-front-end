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

    checkInDogs(duration.value, dogCount.value, this.props.match.params.id)
    .then(({currentDogCount}) => {
      this.setState(() => ({currentDogCount}))
    })
  }

  render() {
    if (!this.state.parkName) {
      return <div></div>
    } else {
      return (
        <>
        <div className="park-details section">
          <div className="park-map"></div>
          <div className="park-summary">
            <h2 className="section-heading">Park Details</h2>
            <div>{this.state.parkName}</div>
            <div>{this.state.address}</div>
            <div>
              <span>{this.state.city}, </span>
              <span>{this.state.state} </span>
              <span>{this.state.zipCode}</span>
            </div>
            <div className="dog-count">Current dog count: {this.state.currentDogCount}</div>
          </div>
        </div>
        <div className="park-checkin section">
          <h2 className="section-heading">Checkin</h2>
          <form onSubmit={this.handleSubmit}>
            <div className="input-label-group">
              <label htmlFor="dogCount">Number of dogs</label>
              <input type="number" name="dogCount" id="dogCount" defaultValue="1"/><br/>
            </div>
            <div className="input-label-group">
              <label htmlFor="duration">Duration</label><br/>
              <input type="radio" name="duration" value='1800000'/>30 min <br/>
              <input type="radio" name="duration" value='3600000' defaultChecked/>60 min <br/>
              <input type="radio" name="duration" value='5400000'/>90 min <br/>
              <input type="radio" name="duration" value='7200000'/>120 min <br/>
            </div>
            <input type="submit"/>
          </form>
        </div>
      </>
      )
    }
  }
}

export default DogPark;
