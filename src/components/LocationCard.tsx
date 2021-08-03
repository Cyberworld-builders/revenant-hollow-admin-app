import React from 'react';
import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonCard,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonCardContent,
    IonItem,
    IonIcon,
    IonLabel,
    IonButton,
    IonList, IonInput, IonSelect, IonSelectOption, IonToggle, IonTextarea
} from '@ionic/react';
import { skull, wifi, wine, warning, walk } from 'ionicons/icons';
import axios from "axios";
// import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";

interface LocationCardProps {
    LocationId: string,
    LocationName: string
}

class LocationCard extends React.Component<LocationCardProps> {
    // params  = useParams()
    state = {
        LocationId: "",
        LocationName: "",
        location: {
            name: "",
            description: "",
            status: "",
            ip: "",
            latitude: "",
            longitude: "",
            idle: "1"
        }
    }

    // const [location.idle, setIdle] = useState<Number>();

    componentDidMount() {
        console.log(this.props)
        axios.get(`https://cloud-api.cyberworldbuilders.dev/api/location/${this.props.LocationId}`)
            .then(res => {
                const location = res.data;
                this.setState({location: location})
            })
    }
    render() {
        return (
            <IonCard>
                <IonItem>
                    <IonIcon icon={skull} slot="start" />
                    <IonLabel>{this.state.location.name}</IonLabel>
                    <IonItem>
                        <IonLabel>Idle / Active</IonLabel>
                        <IonToggle
                            slot="start"
                            name="idle"
                            color="secondary"
                            checked={this.state.location.idle == "0"?true:false}
                        ></IonToggle>
                    </IonItem>
                </IonItem>



                <IonCardContent>
                    <IonList lines="full" className="ion-no-margin">
                        <IonItem>
                            <IonLabel position="stacked">Location Name</IonLabel>
                            <IonInput value={this.state.location.name} type="text"></IonInput>
                        </IonItem>
                        <IonItem>
                            <IonLabel position="stacked">Description</IonLabel>
                            <IonTextarea value={this.state.location.description}></IonTextarea>
                        </IonItem>
                        <IonItem>
                            <IonLabel position="stacked">IP Address</IonLabel>
                            <IonInput value={this.state.location.ip} type="text"></IonInput>
                        </IonItem>
                        <IonItem>
                            <IonLabel>Latitude</IonLabel>
                            <IonInput value={this.state.location.latitude} type="text"></IonInput>
                            <IonLabel>Longitude</IonLabel>
                            <IonInput value={this.state.location.longitude} type="text"></IonInput>

                        </IonItem>
                        <IonItem>
                            <IonButton fill="outline" slot="end">Get Coordinates</IonButton>
                        </IonItem>

                    </IonList>
                </IonCardContent>

                <IonItem>
                    <IonButton routerLink={'/Locations'} fill="outline" slot="end">Cancel</IonButton>
                    <IonButton fill="outline" slot="end">Save</IonButton>
                </IonItem>

            </IonCard>

        )
    }
}

export default LocationCard