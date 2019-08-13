import React from 'react';
import axios from 'axios';
import {Item} from '../Item.jsx';


export class ShoeList extends React.Component {
    state = {
        shoelist: [],
    }

    componentDidMount() {
        axios.get('http://localhost:8000/shoes')
        .then(res => {
            this.setState({ shoelist: res.data });
        })
    }

    render() {
        return(
            <div>
                {this.state.shoelist.map((item, index) => (
                    <Item product={'shoes'} key={index} im={item.imgsrc} title={item.title} price={item.price} id={item.id}/>
                ))}
            </div>
        )
    }
}