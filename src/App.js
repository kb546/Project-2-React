import React from 'react';
import './App.css';
import getData from './Utils/getData.js';
import PeopleTab from './Components/PeopleTab.js';

class App extends React.Component{

  //mounting order of calls 1.constructor, 2.render, 3.componentDidMount
  //order updating: 1.render, 2.componentDidMout
  constructor(props){
    //by invoking super, I am defining 'this'
    super(props);
    //in this main area, I am going to load the about information
    this.state={
      about:{},
      aboutLoaded:false
    };
  }

  componentDidMount(){
    //first, hard coded...
    /*
    this.setState({
      aboutLoaded:true,
      about:{title:"Hello there good looking", description:"this is fun"}
    });*/
    //now with our cool getData function!
    getData('about/')
    .then((json)=>{
      this.setState({
        about:json,
        aboutLoaded:true
      });
    });
  }

  render(){
    //bring in the vars
    const {about, aboutLoaded} = this.state;

    if(!aboutLoaded) return (
      <div className="App">
        <h1>Loading...</h1>
      </div>
    );

    return (
      <div className="App">
        <h1>{about.title}</h1>
        <div>
          <h3>{about.description}</h3>
          <div className="quoteBubble">
            <p>{about.quote}</p>
            <p>--{about.quoteAuthor}</p>
          </div>
         </div>
         {/* here is space for our other components! */}
        <hr/>
        <PeopleTab/>
      </div>
      


    );
  }
}

export default App;
