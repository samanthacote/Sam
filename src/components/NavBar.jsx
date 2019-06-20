import React, {Component} from 'react';

export class Dropdown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isExpanded: false,
        }
    }

    handleClick() {
        this.setState({
            isExpanded: !this.state.isExpanded,
        })
    }

    render() {
        if(this.state.isExpanded){
        }
    }
}
