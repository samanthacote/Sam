import React from 'react';
import '../App.css';

export const InfoForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
          <label>
            Add Info: 
            <input type="text" value={props.value} onChange={props.handleChange} name={props.name}/>
          </label>
          <input type="submit" value="Submit"/>
        </form>
    )
}