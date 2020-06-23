import React from 'react';
import {
  IonIcon,
  IonFabButton,
  IonImg,
} from '@ionic/react';
import { play} from 'ionicons/icons';
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import logo from './riddle.png'


const Block = styled.div`
display : flex;
flex-direction : column;
justify-content : center;
align-items : center;
  @media (max-width: 768px) {
   
    display : flex;
    justify-content : center;
    align-items : center;
   
  }
`;

const MainBlock = styled.div`
  display : flex;
  justify-content : center;
  align-items : center;
`;

const HomeScreen = () => {
  return(
    <>
   
    <Block>
    <IonImg  src={logo} />
  
    <MainBlock>
    <Link to="/counter">   
          <IonFabButton > 
              <IonIcon icon={play} />
          </IonFabButton>
     
      </Link>

      </MainBlock>
      </Block>
      </>

  );
};

export default HomeScreen;