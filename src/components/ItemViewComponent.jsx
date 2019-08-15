import React from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {Review} from './reviews/Review';
import {NewReview} from './reviews/NewReview';


export class ItemViewComponent extends React.Component {
    state = {
        reviewlist: [],
    }

    componentDidMount() {
        axios.get(`http://localhost:8000/${this.props.match.params.product}/${this.props.match.params.id}/reviews/`)
        .then(res => {
            const data = res.data;
            this.setState({ reviewlist: data });
        });

        // axios.post(`http://localhost:8000/${this.props.match.params.product}/${this.props.match.params.id}/reviews/add/`, {
        //     user: 'NewUser', 
        //     text: "Here is a new review",
        //     date: "8/8/2019",
        //     id: 4
        // }).then(res => {
        //     console.log("Done!");   
        // });
    }

    render() {
        const title = this.props.location.state.title;
        const price = this.props.location.state.price;
        const im = this.props.location.state.im;
        console.log(this.props.match.params.product);
        console.log(this.props.match.params.id);
        return(
            <div>
                <Card style={{ width: '50%', margin: 'auto', marginTop: "20px" }}>
                    <Card.Body>
                        <img className="itemImage" src={im} alt={title} />
                        <div className="title">{title}</div>
                        <b>{price}</b>
                    </Card.Body>
                    <Button variant="dark">Add To Cart</Button>
                </Card>
                <div className="container">
                    <h2 style={{ textAlign: 'left'}}> Reviews </h2>
                    {this.state.reviewlist.map((item, index) => (
                        <Review key={index} text={item.text} user={item.user} date={item.date} product={this.props.match.params.product} id={this.props.match.params.id}/>
                    ))}
                </div>
                <NewReview product={this.props.match.params.product} id={this.props.match.params.id}/>
            </div>
        )
    }
}
