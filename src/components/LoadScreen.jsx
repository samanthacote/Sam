import React from 'react';
import '../App.css';
import balletSlippers from '../images/balletSlippers.jpeg';

export const LoadScreen = () => {
    return(
        <div className="App">
          <div className="App-header">
            <img src={balletSlippers} className="App-logo" alt="logo"/>
          </div>
          <div className="form"> Loading... </div>
        </div>
    )
}