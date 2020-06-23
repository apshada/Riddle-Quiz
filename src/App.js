import React, { Component } from 'react';
import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';
import {
  IonApp,
  IonContent,
  IonPage
} from '@ionic/react';

import Routes from './routes'

class App extends Component {
  render() {
    return (
      <IonApp>
        <IonPage>
          <IonContent>
         
          <Routes />
          {/* <UseCounter /> */}
          {/* <CardDone /> */}
          </IonContent>
         
          </IonPage>
      </IonApp>
    );
  }
}

export default App;