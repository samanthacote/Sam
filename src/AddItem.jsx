import React from 'react';
import axios from 'axios';

export default class AddItem extends React.Component {
    state = {
        id: '',
        title: '',
        price: '',
    }
  
    handleIDChange = event => {
        this.setState({ id: event.target.value });
      }

    handleTitleChange = event => {
      this.setState({ title: event.target.value });
    }

    handlePriceChange = event => {
        this.setState({ price: event.target.value });
      }
  
    handleSubmit = event => {
      event.preventDefault();
  
      const shoe = {
        id: this.state.id,
        title: this.state.title,
        price: this.state.price,
      };
  
      axios.post(`http://localhost:8000/shoes/`, { shoe })
        .then(res => {
          console.log(res);
          console.log(res.data);
        })
    }
  
    render() {
      return (
        <div>
          {/* <form onSubmit={this.handleSubmit}>
            <label>
              New ID:
              <input type="text" name="name" onChange={this.handleIDChange} />
            </label>
            <label>
              New Title:
              <input type="text" name="name" onChange={this.handleTitleChange} />
            </label>
            <label>
              New Price:
              <input type="text" name="name" onChange={this.handlePriceChange} />
            </label>
            <button type="submit">Add</button>
          </form> */}
        </div>
      )
    }
  }