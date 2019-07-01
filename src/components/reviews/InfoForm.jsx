import React from 'react';

export const InfoForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit} name={props.name}>
          <label>
            Add A Review: 
            <input className="submit" type="text" value={props.value} onChange={props.handleChange} name={props.name}/>
          </label>
          <input className="submit" type="submit" value="Submit Review"/>
        </form>
    )
}