import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton } from '@ionic/react';
import { skull, wifi, wine, warning, walk } from 'ionicons/icons';

export default class LocationCard extends React.Component {
    render() {
        const location = {
            'name': ""
        }
        return (
            <IonCard>
                <IonItem>
                    <IonIcon icon={skull} slot="start" />
                    <IonLabel>{location['name']}</IonLabel>
                    <IonButton fill="outline" slot="end">View</IonButton>
                </IonItem>

                <IonCardContent>
                    This is content, without any paragraph or header tags,
                    within an ion-cardContent element.
                </IonCardContent>
            </IonCard>

        )
    }
}
