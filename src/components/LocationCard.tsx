import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton } from '@ionic/react';
import { skull, wifi, wine, warning, walk } from 'ionicons/icons';
import axios from "axios";
// import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";



export default class LocationCard extends React.Component {
    // params  = useParams()
    state = {
        location: {}
    }

    componentDidMount() {
        axios.get(`https://cloud-api.cyberworldbuilders.dev/api/location/`)
            .then(res => {
                const location = res.data;
                this.setState({ location });
            })
    }
    render() {
        return (
            <IonCard>
                <IonItem>
                    <IonIcon icon={skull} slot="start" />
                    <IonLabel>Name of Haunt Location</IonLabel>
                    <IonButton fill="outline" slot="end">Save</IonButton>
                </IonItem>

                <IonCardContent>
                    This needs to be a form where we can edit the haunt location fields like name, IP and
                    Geocoordinates
                </IonCardContent>
            </IonCard>

        )
    }
}

// type AppProps = {}
// type AppState = {}
// class LocationCard extends React.Component<AppProps, AppState> {
//     constructor(props: AppProps) {
//         super(props);
//         //this.props will already be of type AppProps.
//         //Only the constructor props are any
//     }
//
//     public render() {
//         return (
//             <div className="App">
//                 <h1>{this.props.title}</h1>
//             </div>
//         );
//     }
// }
//
// export default LocationCard