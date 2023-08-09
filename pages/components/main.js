import React, {useState, useEffect} from 'react';
import useTimer from 'easytimer-react-hook';

const Main = () => {
  const [timer, isTargetAchieved] = useTimer();
  const [cross, setCross] = useState([])
  const [activeBlock, setActiveBlock] = useState(0)
  const [repsCount, setRepsCount] = useState(0)
  
  const INITIAL_COUNTDOWN = { seconds: 5 }

  const treino = [
    {
      name: 'first block',
      repeat: 2,
      times: {
        total: {
          minutes: 2,
        },
        forRepeat: {
          minutes: 2
        },
        rest: {
          seconds: 20
        }
      },
      exe: [{
        qnt: 10,
        name: 'burp'
      },
      {
        qnt: 5,
        name: 'cal de erg'
      }]
    },
    {
      name: 'second block',
      repeat: 7,
      time: {
        minutes: 12,
      },
      exe: [{
        qnt: 20,
        name: 'burps'
      },
      {
        qnt: 5,
        name: 'cal de erg'
      }]
    }
  ]

  useEffect(() => {
    setCross(treino)
  }, [])

  const startExe = (block) => {
    setActiveBlock(block)
    startTimer(INITIAL_COUNTDOWN)
    console.log(isTargetAchieved)
    setRepsCount(block.repeat)
  }

  const startTimer = (startValues) => {
    timer.start({ countdown: true, startValues: startValues });
  };

  const pauseTimer = () => {
    timer.pause();
  };

  const stopTimer = () => {
    timer.stop();
  };

  const resetTimer = () => {
    timer.reset();
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 12,
      }}
    >
      <h1><small>{repsCount}</small> {timer.getTimeValues().toString(['minutes', 'seconds'])}</h1>

      <div style={{ display: 'flex', gap: 12 }}>
        <button onClick={startTimer}>Start</button>
        <button onClick={pauseTimer}>Pause</button>
        <button onClick={stopTimer}>Stop</button>
        <button onClick={resetTimer}>Reset</button>
      </div>

      {cross.map((block, index) => (
        <div style={{ border: `1px solid ${activeBlock === index ? 'green' : 'black'}`, borderRadius: 6, padding: 12, display: 'flex', flexDirection: 'column' }} onClick={() => startExe(index)}>
          {activeBlock === index && <small>ATIVO</small>}
          <b>{block.name}</b>
          <p style={{margin: 0}}>repeticoes: {block.repeat}</p>
          <ul style={{margin: 20, padding: 0}}>
            {block.exe.map(exercice => (
              <li>{exercice.qnt} reps de {exercice.name}</li>
            ))}
          </ul>
          
        </div>
      ))}
    </div>
  );
};

export default Main;
