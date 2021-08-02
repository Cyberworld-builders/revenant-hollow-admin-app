import React from 'react';

import axios from 'axios';
// import LocationCard from "./LocationCard";
import {IonButton, IonCard, IonCardContent, IonIcon, IonItem, IonLabel} from "@ionic/react";
import {skull} from "ionicons/icons";

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
          { this.state.locations.map(location =>
              <IonCard>
                <IonItem>
                  <IonIcon icon={skull} slot="start" />
                  <IonLabel>{location['name']}</IonLabel>
                  <IonLabel>{location['ip']}</IonLabel>
                  <IonLabel>Lat/Long: {location['latitude']}, {location['longitude']}</IonLabel>

                  <IonButton routerLink={'/Location/' + location['id']}  fill="outline" slot="end">View</IonButton>
                </IonItem>

                <IonCardContent>
                  {location['description']}
                </IonCardContent>
              </IonCard>
          )}
      </ul>

    )
  }
}
