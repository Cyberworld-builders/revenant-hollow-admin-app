import React from 'react';

import axios from 'axios';
import LocationCard from "./LocationCard";

export default class LocationList extends React.Component {
  state = {
    locations: []
  }

  componentDidMount() {
    axios.get(`https://cloud-api.cyberworldbuilders.dev/api/location`)
      .then(res => {
        const locations = res.data;
        this.setState({ locations });
      })
  }

  render() {
    return (
      <ul>
        { this.state.locations.map(location => <li>{location['name']}</li>)}
      </ul>
      // <ul>
      //     { this.state.locations.map(location => <LocationCard>{ location }</LocationCard>)}
      // </ul>


    )
  }
}
