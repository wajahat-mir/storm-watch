import React, { useState, useEffect } from 'react';
import ActiveStorm from './ActiveStorm'
import StormService from '../services/StormService'
import { IStorm } from '../interfaces/IStorm'
import { ICurrentComponentState } from '../interfaces/ICurrentComponentState'
import Layout from './layouts/Layout'

function Current() {
  const[currentStorms, setCurrentStorms] = useState([])

  useEffect(() => {
    StormService.getCurrentStorms().then((response) =>{
      setCurrentStorms(response.storms);
    });    
  });

  const generateStormElements = () => {
    let stormElements;
    if(currentStorms == null){
      stormElements = <p>No active storms.</p>
    }
    else{
      stormElements = currentStorms.map((storm: IStorm) =>
      <ActiveStorm storm={storm} key={storm.id}></ActiveStorm>
      );
    }
    return stormElements;
  };

  return(
    <Layout>
      <h1>Current Active Storms</h1>
      {generateStormElements()}
    </Layout>
  )
}

export default Current;
