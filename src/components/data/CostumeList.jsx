import React from 'react';
import axios from 'axios';
import {Item} from '../Item.jsx';
import whiteTulleImage from '../../images/whiteTulle.png';
// import {costumes} from './data.js';

// export const CostumeList = () => {
//     return(
//         <div>
//             {costumes.map((item, index) => (
//                 <Item key={index} im={item.im} title={item.title} price={item.price}/>
//             ))}
//         </div>    
//     )
// }

export class CostumeList extends React.Component {
    state = {
        costumelist: []
    }

    displayCostumes(costumes) {
        let costumelist = [];
        let i = 0;
        for(i=0; i< costumes.length; i++) {
            const costume = costumes[i];
            costumelist.push(costume);
        }
        return costumelist;
    }

    componentDidMount() {
        axios.get('http://localhost:8000/costumes')
        .then(res => {
            const data = res.data;
            const costumes = data.costumes;
            const newCostumelist = this.displayCostumes(costumes);
            this.setState({ costumelist: newCostumelist });
        })
    }


    render() {
        return(
            <div>
                {this.state.costumelist.map((item, index) => (
                    <Item key={index} im={whiteTulleImage} title={item.title} price={item.price}/>
                ))}
            </div>
        )
    }
}