import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [isRunning, setisRunning] = useState(false)
  const [time, settime] = useState(0)

  const hours = Math.floor(time / 360000);

  const minutes = Math.floor((time % 360000) / 6000);

  const seconds = Math.floor((time % 6000) / 100);

  const milliseconds = time % 100;

  useEffect(()=>{
    let interval
    if(isRunning)
    {
      interval = setInterval(() => {
        settime(time+1)
      }, 10);
    }
    return () => clearInterval(interval)
    
  },[isRunning,time])

  const startAndstop = () => {
    setisRunning(!isRunning);
  }

  const reset = () => {
    settime(0);
    if (isRunning === true) {
      setisRunning(false)
    }
  }
  return (
    <>
      <h1 className='text-5xl mb-5'>StopWatch</h1>
      <div className='text-5xl mb-5'>
        <p>
          {hours}:{minutes.toString().padStart(2, "0")}:
          {seconds.toString().padStart(2, "0")}:
          {milliseconds.toString().padStart(2, "0")}
        </p>
      </div>
      <div>
        <button className='mr-2' onClick={startAndstop}>{isRunning ? "Stop" : "Start"}</button>
        <button onClick={reset}>reset</button>
      </div>
    </>
  )
}

export default App
