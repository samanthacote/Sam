import React from 'react';
import axios from 'axios';
import {Item} from '../Item.jsx';
import flatSlippersImage from '../../images/blochFlat.png';
// import {shoes} from './data.js';

// export const ShoeList = () => {
//     return(
//         <div>
//             {shoes.map((item, index) => (
//                 <Item key={index} im={item.im} title={item.title} price={item.price}/>
//             ))}
//         </div>    
//     )
// }

export class ShoeList extends React.Component {
    state = {
        shoelist: []
    }

    displayShoes(shoes) {
        let shoelist = [];
        let i = 0;
        for(i=0; i< shoes.length; i++) {
            const shoe = shoes[i];
            shoelist.push(shoe);
        }
        return shoelist;
    }

    componentDidMount() {
        axios.get('http://localhost:8000/shoes')
        .then(res => {
            const data = res.data;
            const shoes = data.shoes;
            const newShoelist = this.displayShoes(shoes);
            this.setState({ shoelist: newShoelist });
        })
    }


    render() {
        return(
            <div>
                {this.state.shoelist.map((item, index) => (
                    <Item key={index} im={flatSlippersImage} title={item.title} price={item.price}/>
                ))}
            </div>
        )
    }
}