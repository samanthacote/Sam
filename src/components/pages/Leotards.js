import React, {Component} from 'react';
import {LeotardList} from '../data/LeotardList';
import {AddReview} from '../reviews/AddReview';
import {RemoveButton} from '../reviews/RemoveButton';
import {InfoForm} from '../reviews/InfoForm';



export class Leotards extends Component {
    constructor(props){
        super(props);
        this.state = {
            value: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        const newValue = e.target.value;
        this.setState( {value: newValue} );
    }

    render() {
        return(
            <div className="App">
                <LeotardList/>
                <AddReview text={"Please leave your review: " + this.state.value}/>
                <InfoForm handleSubmit={() => {alert("A review was submitted: " + this.state.value)}} value={this.state.value} handleChange={this.handleChange} />
                <RemoveButton handleRemoveClick={() => this.setState({value: ''})} /> 
            </div> 
        )
    }
}
