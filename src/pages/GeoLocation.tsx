import {
  IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar,
  IonGrid, IonCol,IonRow
} from '@ionic/react';
import { useParams } from 'react-router';
import ExploreContainer from '../components/ExploreContainer';
import './Page.css';

import GeolocationButton from "../components/GeolocationButton";

const GeoLocation: React.FC = () => {

  const { name } = useParams<{ name: string; }>();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>GeoLocation</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">GeoLocation</IonTitle>
          </IonToolbar>
        </IonHeader>

        <div className="container">
            <GeolocationButton />
        </div>

      </IonContent>
    </IonPage>
  );
};

export default GeoLocation;


// import React from "react";
// import ExploreContainer from "../components/ExploreContainer";
// import "./Home.css";
