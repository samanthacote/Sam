import React from 'react';
import axios from 'axios';
import {Item} from '../Item.jsx';
// import {Review} from '../reviews/Review';

export class CostumeList extends React.Component {
    state = {
        costumelist: [],
    }

    componentDidMount() {
        axios.get('http://localhost:8000/costumes')
        .then(res => {
            console.log(res);
            console.log(res.data);
            this.setState({ costumelist: res.data });
        })
    }

    render() {
        return(
            <div>
                {this.state.costumelist.map((item, index) => (
                    <Item product={'costumes'} key={index} im={item.imgsrc} title={item.title} price={item.price} id={item.id}/>
                ))}
            </div>
        )
    }
}