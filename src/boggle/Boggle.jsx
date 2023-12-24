import {
  StrictMode,
  useState,
  useEffect
} from "react";
import { createRoot } from 'react-dom/client';

import Button from 'react-bootstrap/Button';

import './Boggle.scss';

import PageContent from '../components/PageContent';

import { BoggleController } from './Controller';

function msUntil(date) {
  return Math.max(date - Date.now(), 0);
}

function Board() {
  const controller = BoggleController.getInstance();

  const [letters, setLetters] = useState(controller.getLetters());
  const [endTime, setEndTime] = useState(new Date());
  const [msLeft, setMsLeft] = useState(msUntil(endTime));
  const [alarm, setAlarm] = useState(null);

  useEffect(() => {
    const handler = (event) => {
      setLetters(event.detail.letters);
      setEndTime(event.detail.endTime);
      setMsLeft(msUntil(event.detail.endTime));
    }
    controller.addEventListener('gameStart', handler);
    controller.addEventListener('gameOver', handler);

    return () => {
      controller.removeEventListener('gameStart', handler);
      controller.removeEventListener('gameOver', handler);
    }
  }, [setLetters, setEndTime]);


  useEffect(() => {
    if (msLeft > 0) {
      setTimeout(() => {
        const nextMs = msUntil(endTime);

        setMsLeft(nextMs);

        if (nextMs <= 0) {
          const alarm = new Audio(new URL('./alarm.wav', import.meta.url));
          alarm.play();
        }
      }, 950);
    }
  }, [setMsLeft, msLeft]);

  const lettersPerRow = 4;
  let rows = [];
  let currentRow = [];

  for (let i = 0; i < letters.length; i++ ) {
    currentRow.push(<Letter key={ i }>{ letters[i] }</Letter>)

    if ((i + 1) % lettersPerRow === 0) {
      rows.push(<BoardRow key={ "row " + (i / lettersPerRow) }>
                    { currentRow }
                  </BoardRow>);
      currentRow = [];
    }
  }

  return <div>
           <CountDown miliseconds={ msLeft }/>

           { rows }

           <div className="d-flex flex-row justify-content-center pt-4">
             <Button onClick={ () => controller.startNewGame() } size="lg">
                Start
             </Button>
             <Button onClick={ () => controller.endGame() }
                     size="lg"
                     variant="danger"
                     className="ms-4">
                Stop
             </Button>
           </div>
         </div>
}

function CountDown({ miliseconds }) {
  const seconds = Math.floor(miliseconds / 1000) % 60;
  const minutes = Math.floor((miliseconds / 1000) / 60);

  return <div className="text-center">
           <h4 className="display-4">
             { minutes.toString().padStart(2, "0") }:{ seconds.toString().padStart(2, "0") }
           </h4>
         </div>
}

function BoardRow({ children }) {
  return <div className="d-flex flex-row justify-content-center">
           { children }
         </div>
}

function Letter({ children }) {
  const size = "15vmin";
  const maxSize = "125px"
  return <div className="d-flex flex-column border rounded"
              style={{ height: size,
                       width: size,
                       maxHeight: maxSize,
                       maxWidth: maxSize}}>
           <h2 className="display-2 text-center my-auto">
             { children }
           </h2>
         </div>
}

export default function Home() {
  return <StrictMode>
           <PageContent>
             <h1 className="display-1 text-center mb-2">
               Boggle
             </h1>

             <Board />

             <div className="text-end mt-4 mb-4 fst-italic fs-6 w-75">
               - Love Kyle
             </div>
           </PageContent>
         </StrictMode>;
}

createRoot(document.getElementById('app')).render(<Home />);