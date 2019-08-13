import React from 'react';
import axios from 'axios';
import {Item} from '../Item.jsx';
// import {Review} from '../reviews/Review';

export class LeotardList extends React.Component {
    state = {
        leolist: [],
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

    displayReviews(leolist) {
        let reviewlist = [];
        let i = 0;
        let j = 0;
        for(i=0; i<leolist.length; i++){
            for(j=0; j<leolist[i].reviews.length; j++){
                reviewlist.push(leolist[i].reviews[j]);
            }
        }
        return reviewlist;
    }

    componentDidMount() {
        axios.get('http://localhost:8000/leotards')
        .then(res => {
            console.log(res);
            console.log(res.data);
            this.setState({ leolist: res.data });
        })
    }


    render() {
        return(
            <div>
                {this.state.leolist.map((item, index) => (
                    <Item product={'leotards'} key={index} im={item.imgsrc} title={item.title} price={item.price} id={item.id}/>
                ))}
            </div>
        )
    }
}