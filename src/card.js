import React, { Component } from 'react'
import './card.css';

class Card extends Component {

    constructor(props) {
      super(props);

      //extract required data from json object
      this.missionName = this.props.launchData.mission_name;
      this.flightNumber = this.props.launchData.flight_number;
      this.imgSrc = this.props.launchData.links.mission_patch_small;//this.props.launchData.links.mission_patch;
      this.missionIDs = this.props.launchData.mission_id;
      this.launchYear = this.props.launchData.launch_year;
      this.successfulLaunch = this.props.launchData.launch_success ? "Yes" : "No";
      this.successfulLanding = this.props.launchData.rocket.first_stage.cores[0].land_success ? "Yes" : "No";
    }
  
    render() {
      return (
        <div className="Card col-0">
        
        <img src={this.imgSrc} className="image" alt="Image Unavailable"/>
        <p><b className="Mission-Name">{this.missionName}#{this.flightNumber}</b></p>
        <p><b className="Mission-Name">Mission Ids: {this.missionIDs}</b></p>
        <p><b className="Mission-Name">Launch Year: {this.launchYear}</b></p>
        <p><b className="Mission-Name">Successful Launch: {this.successfulLaunch}</b></p>
        <p><b className="Mission-Name">Successful Landing: {this.successfulLanding}</b></p>
        
        </div>
      );
    }
  }
  
  export default Card;