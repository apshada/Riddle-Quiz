import React, {useState, useEffect} from 'react';
import createPersistedState from 'use-persisted-state';
import {
  IonIcon,
  IonText,
  IonButton,
  IonHeader,
  IonFab,
  IonFabButton,
  IonToast,
  IonToolbar
} from '@ionic/react';
import {riddleData} from './riddles'
import Alphabets from './components/Alphabet'
import HiddenWord from './components/HidenWord'
import { reload, arrowForward, bulb, home} from 'ionicons/icons';
import styled from "styled-components";
import { Link } from 'react-router-dom'


const useCounterState = createPersistedState('count');




const useCounter = () => {

  const [showToast1, setShowToast1] = useState(false);
  const [count, setCount] = useCounterState(0);
  
  const [guessCount, setGuessCount] = useState(6)
  const [secretWord, setSecretWord] = useState(riddleData[count].ANSWERS.toLowerCase())
  const [winGame, setWinGame] = useState(new Set(secretWord.split("")));
  const [endGame, setEndGame] = useState(false);
  const [guesses, setGuesses] = useState([]);
  const [wrongGuesses, setWrongGuesses] = useState([]);
  const [correctGuesses, setCorrectGuesses] = useState([]);

  if(count === 378){
    setCount(1);
  }

  useEffect(() => {
    fetchWord();
  }, []);


  const fetchWord = () => {
    setSecretWord(riddleData[count].ANSWERS.toLowerCase())
    setWinGame(new Set(secretWord.split("")));
  };

  const IncreWord = () => {
    setSecretWord(riddleData[count+1].ANSWERS.toLowerCase())
    setWinGame(new Set(riddleData[count+1].ANSWERS.toLowerCase().split("")));
  };
  
  const restartGame = () => {
    setGuessCount(6);
    setEndGame(false);
    setWrongGuesses([]);
    setCorrectGuesses([]);
    setGuesses([]);
    fetchWord();
  };

  const updateGuesses = char => {
      
    if (secretWord.includes(char)) {
      winGame.delete(char);
      setCorrectGuesses([...correctGuesses, char]);
      if (winGame.size === 0) {setEndGame(true); };
    } else {
      setWrongGuesses([...wrongGuesses, char]);
      (guessCount === 1 && setEndGame(true)) || setGuessCount(guessCount - 1);
    }

    setGuesses([...guesses, char]);
  };
  
  const Incre = () => {
    // setCorrectGuesses([])
    // restartGame()
    setCount(count + 1)
    restartGame()
    // setSecretWord(riddleData[count].ANSWERS.toLowerCase())
    IncreWord()
  }

  console.log({
    secretWord,
    guessCount,
    correctGuesses,
    wrongGuesses,
    guesses,
    winGame,
    endGame
  });

  return (
    <>
    {/* <ImageWrap> */}
    <Link to="/">
    <IonFab vertical="top" horizontal="start" slot="fixed" >
      <IonButton fill="clear" color="light">
        <IonIcon icon={home}/>
      </IonButton>
      </IonFab>
      </Link>

      <IonFab vertical="bottom" horizontal="center" slot="fixed">
      {endGame ? (
            <>
            {guessCount > 0 ? <IonFabButton fill="clear" color="light" onClick={Incre}  ><IonIcon icon={arrowForward} />
            </IonFabButton> : <IonFabButton fill="clear" color="light" onClick={restartGame}> 
            <IonIcon icon={reload} /> </IonFabButton>}
            </>
      ) : null}
      </IonFab>
        <IonHeader>
          <IonToolbar>
          <Level>
          Level {' '}  
          {count+1}
        </Level>
          </IonToolbar>
        </IonHeader>
 
     
      <Block>
            <Question>
                {riddleData[count].QUESTIONS}
            </Question>
      
        <HiddenWord
        endGame={endGame}
        secretWord={secretWord}
        correctGuesses={correctGuesses}
      />

      <Alphabets
      guesses={guesses}
      wrongGuesses={wrongGuesses}
      updateGuesses={updateGuesses}
      endGame={endGame}
      />

        <IonFab vertical="bottom" horizontal="start" slot="fixed">
          <IonFabButton onClick={() => setShowToast1(true)} fill="clear" color="light">
            <IonIcon icon={bulb} />
          </IonFabButton>
        </IonFab>

        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton fill="clear" color="light">
          <IonText>{guessCount}</IonText>
          </IonFabButton>
        </IonFab>

        <IonToast
        isOpen={showToast1}
        onDidDismiss={() => setShowToast1(false)}
        message={secretWord}
        duration={400}
      />
        
    
    </Block>

        </>


  );
};

const Block = styled.div`
  display : flex;
  flex-direction: column ;
  padding : 10px;
  
  
`;

const Level = styled.div`
  display : flex;
  font-size : 40px;
  font-weight: bold;
  box-shadow: 5px 1px yellow;
  justify-content: center;
  font-family: cursive;
  background: #00c3ff;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to left, #ffff1c, #00c3ff);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to left, #ffff1c, #00c3ff); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

`;

const Question = styled.div`
  display : flex;
  flex-direction: column ;
  justify-content : center;
  font-size: 25px;
  font-weight: 500;
  font-family: "Mansalva", cursive;
  @media (max-width: 768px) {
    padding : 25px; 
  }
`;



export default useCounter;