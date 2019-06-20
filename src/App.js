import React, {Component} from 'react';
import './App.css';
import balletSlippers from './images/balletSlippers.jpeg';
import {getBalletStyles} from './ballet';
import {Modal}  from './components/Modal';
import {ButtonBar} from './components/ButtonBar';
import {InfoForm} from './components/InfoForm';
import {RemoveButton} from './components/RemoveButton';
import {LoadScreen} from './components/LoadScreen';
import {HomeButton} from './components/HomeButton';


class App extends Component {
  constructor (props) {
    super(props);
    this.state = { 
      isLoading: false,
      view: '',
      classicalvalue: '',
      neoclassicalvalue: '',
      contemporaryvalue: '',
      classical: 'Classical ballet has training methods which often get their names by their creators.',
      neoclassical: 'Neoclassical ballet has no strict scenery, plot and costumes and minimal set design.',
      contemporary: 'Dance moves are bigger, fast, and so it is characterized by robust athleticism, floor work, turn-in of the legs, dancing barefoot, acting and mime.',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }



  //-----------------------Handlers-------------------------------//

  handleClick(newView) {
    this.setState({isLoading:true});
    getBalletStyles().then((data) => {
      this.setState({isLoading: false,
      view: newView});
    });
  }

  handleRemove(style) {
    this.setState({
      [style]: '',
    });
  }

  handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState( {[name]: value} );
  }

  handleSubmit(e) {
    let name = '';
    switch(e.target.name){
      case 'neoclassicalvalue':
        name = this.state.neoclassicalvalue;
        break;
      case 'contemporaryvalue':
        name = this.state.contemporaryvalue;
        break;
      default:
        name = this.state.classicalvalue;
    }
    alert('Additional info was submitted: ' + name);
    e.preventDefault();
  }
  
  //----------------------------------------------------------------------------//



  //---------------------------------Rendering----------------------------------//
  render() {

    //load screen
    if(this.state.isLoading) {
      return (
        <LoadScreen/>
      )
    }

    //classical
    if(this.state.view === 'classical'){
      return(
        <div className="App">
        <ButtonBar handleClassicalButtonClick={() => this.handleClick('classical')}
                   handleNeoclassicalButtonClick={() => this.handleClick('neoclassical')}
                   handleContemporaryButtonClick={() => this.handleClick('contemporary')} />
        <Modal text={this.state.classical + ' ' + this.state.classicalvalue}/>
        <div className='form'>
        <InfoForm handleSubmit={this.handleSubmit} value={this.state.classicalvalue} name='classicalvalue' handleChange={this.handleChange} />
        <RemoveButton handleRemoveClick={() => this.handleRemove('classicalvalue')} />
        <HomeButton handleClick={() => this.handleClick('')} />
        </div>
        </div>
      )
    }

    //neoclassical
    if(this.state.view === 'neoclassical'){
      return(
        <div className="App">
        <ButtonBar handleClassicalButtonClick={() => this.handleClick('classical')}
                   handleNeoclassicalButtonClick={() => this.handleClick('neoclassical')}
                   handleContemporaryButtonClick={() => this.handleClick('contemporary')} />
        <Modal text={this.state.neoclassical + ' ' + this.state.neoclassicalvalue}/>
        <div className='form'>
        <InfoForm handleSubmit={this.handleSubmit} value={this.state.neoclassicalvalue} name='neoclassicalvalue' handleChange={this.handleChange} />
        <RemoveButton handleRemoveClick={() => this.handleRemove('neoclassicalvalue')} />
        <HomeButton handleClick={() => this.handleClick('')} />
        </div>
        </div>
      )
    }

    //contemporary
    if(this.state.view === 'contemporary'){
      return(
        <div className="App">
        <ButtonBar handleClassicalButtonClick={() => this.handleClick('classical')}
                   handleNeoclassicalButtonClick={() => this.handleClick('neoclassical')}
                   handleContemporaryButtonClick={() => this.handleClick('contemporary')} />
        <Modal text={this.state.contemporary + ' ' + this.state.contemporaryvalue}/>
        <div className='form'>
        <InfoForm handleSubmit={this.handleSubmit} value={this.state.contemporaryvalue} name='contemporaryvalue' handleChange={this.handleChange} />
        <RemoveButton handleRemoveClick={() => this.handleRemove('contemporaryvalue')} />
        <HomeButton handleClick={() => this.handleClick('')} />
        </div>
        </div>
      )
    }

    //default main page
    else return (
      <div className="App">
        <div className="form"> Click a button below for more info about a particular stlye of ballet: </div>
        <ButtonBar handleClassicalButtonClick={() => this.handleClick('classical')}
                   handleNeoclassicalButtonClick={() => this.handleClick('neoclassical')}
                   handleContemporaryButtonClick={() => this.handleClick('contemporary')} />
        <div></div>
        {/* <img src={balletSlippers} alt='logo'/> */}
      </div>
    );
  }
  //---------------------------------End Rendering-----------------------------//
}

export default App;
