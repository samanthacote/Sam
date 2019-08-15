import React from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

export class NewReview extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            text: '',
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange = (e) => {
        console.log("keystroke");
        console.log('Name: ' + this.state.name);
        console.log("Text: " + this.state.text);
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = (e) => {
        console.log("Button clicked");
        e.preventDefault();
        const {name, text} = this.state;
        console.log(name);
        console.log(text);

        axios.post(`http://localhost:8000/${this.props.product}/${this.props.id}/reviews/add`, 
        { user: name,
          text: text,
          date: '8/15/2019',
          id: 3
        }).then((res) => {
            console.log("Done!");
            console.log(res);
        })
    }

    render() {
        const {name, text} = this.state;
        return(
            <div className="container mgt-2">
                <h2 style={{ textAlign: 'left'}}>Add a Review</h2>
                <form onSubmit={this.onSubmit}>
                    <div style={{margin: '1rem', textAlign: 'left'}}>
                        <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={this.onChange}
                        placeholder="Name"
                        />
                    </div>
                    <div style={{margin: '1rem', textAlign: 'left'}}>
                        <textarea 
                        name="text"
                        value={text}
                        onChange={this.onChange}
                        placeholder="Type your review here."
                        />
                    </div>
                    <div style={{margin: '1rem', textAlign: 'left'}}>
                    <Button type="submit" variant="secondary">Submit</Button>
                    </div>
                </form>
            </div>    
        )
    }

}