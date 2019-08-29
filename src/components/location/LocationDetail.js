import React, { Component } from 'react';
import LocationManager from '../../modules/LocationManager';
// import './AnimalDetail.css'

class LocationDetail extends Component {

  state = {
    name: "",
    breed: "",
    loadingStatus: true,
  }

  componentDidMount() {
    console.log("LocationDetail: ComponentDidMount");
    //get(id) from LocationManager and hang on to that data; put it into state
    LocationManager.getLocation(this.props.locationId)
      .then((location) => {
        this.setState({
          name: location.name,
          loadingStatus: false
        });
      });
  }

  handleDelete = () => {
    //invoke the delete function in AnimalManger and re-direct to the animal list.
    this.setState({ loadingStatus: true })
    LocationManager.deleteLocation(this.props.locationId)
      .then(() => this.props.history.push("/locations"))
  }

  render() {
    return (
      <div className="card">
        <div className="card-content">
          <h3>Name: <span style={{ color: 'darkslategrey' }}>{this.state.name}</span></h3>
          <button type="button" disabled={this.state.loadingStatus} onClick={this.handleDelete}>Discharge</button>
        </div>
      </div>
    );
  }
}

export default LocationDetail;