import React from 'react';
import axios from 'axios';
import {Item} from '../Item.jsx';
import meshBackImage from '../../images/meshBack.png';
// import {leotards} from './data.js';

// export const LeotardList = () => {
//     return(
//         <div>
//             {leotards.map((item, index) => (
//                 <Item key={index} im={item.im} title={item.title} price={item.price}/>
//             ))}
//         </div>    
//     )
// }

export class LeotardList extends React.Component {
    state = {
        leolist: []
    }

    displayLeotards(leos) {
        let leolist = [];
        let i = 0;
        for(i=0; i< leos.length; i++) {
            const leo = leos[i];
            leolist.push(leo);
        }
        return leolist;
    }

    componentDidMount() {
        axios.get('http://localhost:8000/leotards')
        .then(res => {
            const data = res.data;
            const leos = data.leotards;
            const newLeolist = this.displayLeotards(leos);
            this.setState({ leolist: newLeolist });
        })
    }


    render() {
        return(
            <div>
                {this.state.leolist.map((item, index) => (
                    <Item key={index} im={meshBackImage} title={item.title} price={item.price}/>
                ))}
            </div>
        )
    }
}