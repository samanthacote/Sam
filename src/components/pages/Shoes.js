import React, {Component} from 'react';
import axios from 'axios';
import {ShoeList} from '../data/ShoeList';
import {AddReview} from '../reviews/AddReview';
import {RemoveButton} from '../reviews/RemoveButton';
import {InfoForm} from '../reviews/InfoForm';


export class Shoes extends Component {
    constructor(props){
        super(props);
        this.state ={
            value: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleChange.bind(this);
    }

    handleChange(e) {
        const newValue = e.target.value;
        this.setState( {value: newValue} );
    }

    handleSubmit = event => {
        event.preventDefault();
    
        const review = {
          user: "NEW user",
          text: this.state.value,
          date: "7/27/19",
        };
    
        axios.post(`http://localhost:8000/shoes/flatSlippers/reviews/`, { review })
          .then(res => {
            console.log(res);
            console.log(res.data);
          })
    }

    render() {
        return(
            <div className="App">
                <ShoeList/>
                <AddReview text={"Please leave your review: " + this.state.value}/>
                <InfoForm handleSubmit={this.handleSubmit} value={this.state.value} handleChange={this.handleChange} />
                <RemoveButton handleRemoveClick={() => this.setState({value: ''})} /> 
            </div>
        )
    }
}