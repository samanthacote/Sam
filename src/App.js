import React, {Component} from 'react';
import './App.css';
import {getBalletStyles} from './ballet';
import {ButtonBar} from './components/ButtonBar';
import {InfoForm} from './components/InfoForm';
import {RemoveButton} from './components/RemoveButton';
import {LoadScreen} from './components/LoadScreen';
import {HomeButton} from './components/HomeButton';
import {ShoeList} from './components/ShoeList';
import {LeotardList} from './components/LeotardList';
import {CostumeList} from './components/CostumeList';
import {Review} from './components/Review';



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
      shoeValue: '',
      leoValue: '',
      costumeValue: '',
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
    console.log(e.target.name);
    switch(e.target.name){
      case 'leoValue':
        name = this.state.leoValue;
        break;
      case 'costumeValue':
        name = this.state.costumeValue;
        break;
      default:
        name = this.state.shoeValue;
    }
    alert('A review was submitted: ' + name);
    e.preventDefault();
  }

  handleTitleClick() {
    this.setState({isLoading:true});
    getBalletStyles().then((data) => {
      this.setState({isLoading: false,
      view: ''});
    });
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

    //shoes
    if(this.state.view === 'classical'){
      return(
        <div className="App">
        <ButtonBar handleClassicalButtonClick={() => this.handleClick('classical')}
                   handleNeoclassicalButtonClick={() => this.handleClick('neoclassical')}
                   handleContemporaryButtonClick={() => this.handleClick('contemporary')} />
        <ShoeList handleClick={() => this.handleTitleClick()}/>
        <Review text={"Please leave your review: " + this.state.shoeValue}/>
        <InfoForm handleSubmit={this.handleSubmit} value={this.state.shoeValue} name='shoeValue' handleChange={this.handleChange} />
        <RemoveButton handleRemoveClick={() => this.handleRemove('shoeValue')} /> 
        <HomeButton handleClick={() => this.handleClick('')} />
        </div>
      )
    }

    //leotards
    if(this.state.view === 'neoclassical'){
      return(
        <div className="App">
        <ButtonBar handleClassicalButtonClick={() => this.handleClick('classical')}
                   handleNeoclassicalButtonClick={() => this.handleClick('neoclassical')}
                   handleContemporaryButtonClick={() => this.handleClick('contemporary')} />
        <LeotardList/>
        <Review text={"Please leave your review: " + this.state.leoValue}/>
        <InfoForm handleSubmit={this.handleSubmit} value={this.state.leoValue} name='leoValue' handleChange={this.handleChange} />
        <RemoveButton handleRemoveClick={() => this.handleRemove('leoValue')} /> 
        <HomeButton handleClick={() => this.handleClick('')} />
        </div>
      )
    }

    //costumes
    if(this.state.view === 'contemporary'){
      return(
        <div className="App">
        <ButtonBar handleClassicalButtonClick={() => this.handleClick('classical')}
                   handleNeoclassicalButtonClick={() => this.handleClick('neoclassical')}
                   handleContemporaryButtonClick={() => this.handleClick('contemporary')} />
        <CostumeList/>
        <Review text={"Please leave your review: " + this.state.costumeValue}/>
        <InfoForm handleSubmit={this.handleSubmit} value={this.state.costumeValue} name='costumeValue' handleChange={this.handleChange} />
        <RemoveButton handleRemoveClick={() => this.handleRemove('costumeValue')} /> 
        <HomeButton handleClick={() => this.handleClick('')} />
        </div>
      )
    }

    //default main page
    else return (
      <div className="App">
        <div className="form"> Click a button below to shop! </div>
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
