import React, {useState, useEffect} from 'react';
import useTimer from 'easytimer-react-hook';

const Main = () => {
  const [timer, isTargetAchieved] = useTimer();
  const [cross, setCross] = useState([])

  useEffect(() => {
    console.log(' abrindo aqui o treino ')
    const treino = [
      {
        name: 'first block',
        repeat: 2,
        time: {
          minutes: 2,
        },
        exe: [{
          repeat: 10,
          name: 'burp'
        },
        {
          repeat: 5,
          name: 'cal de erg'
        }]
      }
    ]
    setCross(treino)
  }, [])

  const startTimer = () => {
    let srtartValues = {}
    cross.map(block => {
      srtartValues = block.time
    })
    
    timer.start({ countdown: true, startValues: srtartValues });
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
      <h1>{timer.getTimeValues().toString(['minutes', 'seconds'])}</h1>

      <div style={{ display: 'flex', gap: 12 }}>
        <button onClick={startTimer}>Start</button>
        <button onClick={pauseTimer}>Pause</button>
        <button onClick={stopTimer}>Stop</button>
        <button onClick={resetTimer}>Reset</button>
      </div>

      {cross.map(block => (
        <div>
          <h3>nome: {block.name}</h3>
          <h4>repeticoes: {block.repeat}</h4>
          {block.exe.map(exercice => (
            <p>{exercice.repeat} reps de {exercice.name}</p>
          ))}
          
        </div>
      ))}
    </div>
  );
};

export default Main;
