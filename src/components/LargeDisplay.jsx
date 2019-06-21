import React, {Component} from 'react';

export class LargeDisplay extends Component {
    constructor(props){
        super(props);
        this.state = {reviews: []};
    }

    render() {
        <div>
            <img src={props.im} alt="logo"/>
            <div>{props.title}</div>
            <strong>{props.price}</strong>
            <button> Add To Bag </button>
            <button> Checkout </button>
            <button> Write A Review </button>
        </div>
    }
}
