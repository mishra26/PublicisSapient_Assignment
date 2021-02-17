import React, { Component } from 'react'
import {FetchAPIData} from './service.js' 
import Card from './card.js'
import Filters from './filters.js'
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      launchDetails : [],
      lauchYear : 2016,
      isSuccessfulLaunch : null,
      isSuccessfulLanding : null
    }

    this.lauchYear = 2016;
    this.isSuccessfulLaunch = null;
    this.isSuccessfulLanding = null;

    this.filterByYearHandler = this.filterByYearHandler.bind(this);
    this.filterByIsSuccessfulLaunch = this.filterByIsSuccessfulLaunch.bind(this);
    this.filterByIsSuccessfulLanding = this.filterByIsSuccessfulLanding.bind(this);
  }



  componentDidMount() {
    this.updateDataOnScreen();
    //FetchAPIData(this.state.lauchYear,this.state.isSuccessfulLaunch,this.state.isSuccessfulLanding)
    //  .then((data)=>{
    //    this.setState({ launchDetails: data });
    //  });
      
  }

  filterByYearHandler = (year) =>{
    console.log(year);
    this.lauchYear = year;
    this.updateDataOnScreen();
  }

  filterByIsSuccessfulLaunch = (isSuccessfulLaunch) =>{
    this.isSuccessfulLaunch = isSuccessfulLaunch
    this.updateDataOnScreen();
  }

  filterByIsSuccessfulLanding = (isSuccessfulLanding) =>{
    this.isSuccessfulLanding = isSuccessfulLanding;
    this.updateDataOnScreen();
  }

  updateDataOnScreen = () =>{
    FetchAPIData(this.lauchYear,this.isSuccessfulLaunch,this.isSuccessfulLanding)
    .then((data)=>{
      // console.log('done' + data.length);
      if(data!=undefined || data != null)
        this.setState({ launchDetails: data });
    });
  }


  render() {

    let cardComponets = [];
    let key = 0;
    for(var i=0;i<this.state.launchDetails.length; i++){
      cardComponets.push(
        <Card className="col-1" launchData={this.state.launchDetails[i]} key={this.state.launchDetails[i].flight_number}/>
      );
    }

    return (
    <div className="App row">
      <div style={{width: "100%"}}>
        <b>SpaceX Launch Programs</b>
      </div>
      <div className="col-1">
        <Filters filterByYearHandler={this.filterByYearHandler} filterByIsSuccessfulLaunch={this.filterByIsSuccessfulLaunch} filterByIsSuccessfulLanding = {this.filterByIsSuccessfulLanding}/>
      </div>
      <div className="col-2">  
        {cardComponets}
      </div>

    </div>
    );
  }
}

export default App;
