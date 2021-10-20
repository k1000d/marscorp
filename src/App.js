
import React, { useEffect, useRef, useState } from 'react';

import './App.css';
//import Inicio from './inicio';
import Mars from './video/mars.mp4';
import  Login from "./pages/login";
import Menu from './pages/menu';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

function App() {
  function Dirección(){
    return(
<a id="center" href="https://www.spacemcorp.com/">
        www.spacemcorp.com
      </a>
    )
  }
  
  
function Video() {
  return(
<div className="planet">
  <video
   autoPlay
   loop
   muted style= {{
     
     position: "absolute",
     width: "400px",
     height: "400px",
     left: "50%",
     top: "50%",
     
     
     objectFit: "cover",
     transform: "translate(-50%,-50%)",
     zIndex:"-1",
     
   }}>


  <source src={Mars} type="video/mp4"/>
</video>
</div>
  )
  
}
  


  
  

  function Time(){
  const [timerDays, setTimerDays] = useState('00');
  const [timerHours, setTimerHours] = useState('00');
  const [timerMinutes, setTimerMinutes] = useState('00');
  const [timerSeconds, setTimerSeconds] = useState('00');

  let interval = useRef();

  const startTimer = () => {
    const countdownDate = new Date('Oct 29, 2021 00:00:00').getTime();
    interval = setInterval(()=> {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const days = Math.floor( distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(( distance % (1000 * 60 * 60 * 24) / (1000*60*60)));
      const minutes = Math.floor(( distance % (1000 * 60 * 60 ))/(1000 *60));
      const seconds = Math.floor(( distance % (1000 * 60 ))/ 1000);


      if(distance<0){
        //para el tiempo
        clearInterval(interval.current);
      }else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }

    }, 1000);
  };


  //component
  useEffect(()=> {
    startTimer();
    return()=>{
      clearInterval(interval.current);
    };
  })
    return(
     
      <section className= "timer">
      <section>
        <div>
          <span className= "mdi mdi-calendar-clock timer-icon"></span>
        </div>
        <div>
          <section>
            <p>{timerDays}</p>
            <p><small>Days</small></p>

          </section>
          <span>:</span>
          <section>
          <p>{timerHours}</p>
            <p><small>Hours</small></p>
          </section>
          <span>:</span>
          <section>
          <p>{timerMinutes}</p>
            <p><small>minutes</small></p>
          </section>
          <span>:</span>
          <section>
          <p>{timerSeconds}</p>
            <p><small>seconds</small></p>
          </section>
        </div>
      </section>

      </section>
    
    )

    }

    return (
      <BrowserRouter>
      <Time/>
      <Switch>
      <Dirección/>
     
      <Route exact path= "/menu" component= {Menu}/>
      
      </Switch>
      <Video/>
      </BrowserRouter>
    )
    }

 
    



export default App;
