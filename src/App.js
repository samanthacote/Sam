import React from 'react';
import './App.css';
import {Shoes} from './components/pages/Shoes';
import {Leotards} from './components/pages/Leotards';
import {Costumes} from './components/pages/Costumes';
import {ButtonBar} from './components/navigation/ButtonBar';
import {BrowserRouter as Router, Route} from 'react-router-dom';

// import {getBalletStyles} from './ballet';
// import {ButtonBar} from './components/ButtonBar';
// import {InfoForm} from './components/InfoForm';
// import {RemoveButton} from './components/RemoveButton';
// import {LoadScreen} from './components/LoadScreen';
// import {HomeButton} from './components/HomeButton';
// import {ShoeList} from './components/ShoeList';
// import {LeotardList} from './components/LeotardList';
// import {CostumeList} from './components/CostumeList';
// import {Review} from './components/Review';



// class App extends Component {
//   constructor (props) {
//     super(props);
//     this.state = { 
//       isLoading: false,
//       view: '',
//       shoeValue: '',
//       leoValue: '',
//       costumeValue: '',
//     };

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);

//   }



//   //-----------------------Handlers-------------------------------//

//   handleClick(newView) {
//     this.setState({isLoading:true});
//     getBalletStyles().then((data) => {
//       this.setState({isLoading: false,
//       view: newView});
//     });
//   }

//   handleRemove(style) {
//     this.setState({
//       [style]: '',
//     });
//   }

//   handleChange(e) {
//     const name = e.target.name;
//     const value = e.target.value;
//     this.setState( {[name]: value} );
//   }

//   handleSubmit(e) {
//     let name = '';
//     console.log(e.target.name);
//     switch(e.target.name){
//       case 'leoValue':
//         name = this.state.leoValue;
//         break;
//       case 'costumeValue':
//         name = this.state.costumeValue;
//         break;
//       default:
//         name = this.state.shoeValue;
//     }
//     alert('A review was submitted: ' + name);
//     e.preventDefault();
//   }
  
//   //----------------------------------------------------------------------------//



//   //---------------------------------Rendering----------------------------------//
//   render() {

//     //load screen
//     if(this.state.isLoading) {
//       return (
//         <LoadScreen/>
//       )
//     }

//     //shoes
//     if(this.state.view === 'shoes'){
//       return(
//         <div className="App">
//         <ButtonBar handleShoesButtonClick={() => this.handleClick('shoes')}
//                    handleLeoButtonClick={() => this.handleClick('leotards')}
//                    handleCostumesButtonClick={() => this.handleClick('costumes')} />
//         <ShoeList/>
//         <Review text={"Please leave your review: " + this.state.shoeValue}/>
//         <InfoForm handleSubmit={this.handleSubmit} value={this.state.shoeValue} name='shoeValue' handleChange={this.handleChange} />
//         <RemoveButton handleRemoveClick={() => this.handleRemove('shoeValue')} /> 
//         <HomeButton handleClick={() => this.handleClick('')} />
//         </div>
//       )
//     }

//     //leotards
//     if(this.state.view === 'leotards'){
//       return(
//         <div className="App">
//         <ButtonBar handleShoesButtonClick={() => this.handleClick('shoes')}
//                    handleLeoButtonClick={() => this.handleClick('leotards')}
//                    handleCostumesButtonClick={() => this.handleClick('costumes')} />
//         <LeotardList/>
//         <Review text={"Please leave your review: " + this.state.leoValue}/>
//         <InfoForm handleSubmit={this.handleSubmit} value={this.state.leoValue} name='leoValue' handleChange={this.handleChange} />
//         <RemoveButton handleRemoveClick={() => this.handleRemove('leoValue')} /> 
//         <HomeButton handleClick={() => this.handleClick('')} />
//         </div>
//       )
//     }

//     //costumes
//     if(this.state.view === 'costumes'){
//       return(
//         <div className="App">
//         {/* <ButtonBar handleShoesButtonClick={() => this.handleClick('shoes')}
//                    handleLeoButtonClick={() => this.handleClick('leotards')}
//                    handleCostumesButtonClick={() => this.handleClick('costumes')} /> */}
//         <CostumeList/>
//         <Review text={"Please leave your review: " + this.state.costumeValue}/>
//         <InfoForm handleSubmit={this.handleSubmit} value={this.state.costumeValue} name='costumeValue' handleChange={this.handleChange} />
//         <RemoveButton handleRemoveClick={() => this.handleRemove('costumeValue')} /> 
//         <HomeButton handleClick={() => this.handleClick('')} />
//         </div>
//       )
//     }

//     //default main page
//     else return (
//       <div className="App">
//         <div className="form"> Click a button below to shop! </div>
//         <ButtonBar handleShoesButtonClick={() => this.handleClick('shoes')}
//                    handleLeoButtonClick={() => this.handleClick('leotards')}
//                    handleCostumesButtonClick={() => this.handleClick('costumes')} />
//       </div>
//     );
//   }
//   //---------------------------------End Rendering-----------------------------//
// }

// export default App;

const App = () => {
  return(
    <Router>
      <div className="App">
        <ButtonBar/>

        <Route path="/shoes/" component={Shoes}/>
        <Route path="/leotards/" component={Leotards}/>
        <Route path="/costumes/" component={Costumes}/>

      </div>
    </Router>
  )
}

export default App;