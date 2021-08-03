import {
  IonButtons,
  IonContent,
  IonHeader, IonInput, IonItem, IonLabel,
  IonList,
  IonListHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar
} from '@ionic/react';
import { useParams } from 'react-router';
import axios from 'axios';
import ExploreContainer from '../components/ExploreContainer';
import LocationCard from '../components/LocationCard';
import './Page.css';

const LocationPage: React.FC = () => {

  const { id } = useParams<{ id: string; }>();
  const { name } = useParams<{ name: string; }>();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Location</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{name}jkjkjkjkjkjk</IonTitle>
          </IonToolbar>
        </IonHeader>

        <LocationCard LocationId={id} LocationName={name}/>





      </IonContent>
    </IonPage>
  );
};

export default LocationPage;
