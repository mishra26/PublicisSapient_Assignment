import React, { Component } from 'react'
import './filters.css';

class Filters extends Component {

    constructor(props) {
      super(props);
      this.state = {
        yearSelected : 2006,
        isSuccessfulLaunch : null,
        isSuccessfulLanding : null
      };
      this.launchYears = ["2006","2007","2008","2009","2010","2011","2012",
                        "2013","2014","2015","2016","2017", "2018","2019",
                        "2020"];
    }
  
    render() {
    
        let yearComponents = []
        let key =  0;
        for(var i=0;i<this.launchYears.length;i=i+2){
            let leftYear = this.launchYears[i];
            let rightYear = i+1 < this.launchYears.length ? this.launchYears[i+1] : null;

            yearComponents.push(
                <div className="horizontal-div"key={key++}>
                    <div className="child-div" onClick={()=>this.props.filterByYearHandler(leftYear)}> {leftYear} </div>
                    {rightYear !== null ? <div className="child-div" onClick={()=>this.props.filterByYearHandler(rightYear)}> {rightYear} </div> : null}
                </div>
            );
        }

      return (
        <div className="filter-body" style={{background: "white"}}>
            <b>Filters</b>
            <p><ins>Lauch Year</ins></p>
            {yearComponents}

            <p><ins>Successful Launch</ins></p>
            <div className="child-div" onClick={()=>this.props.filterByIsSuccessfulLaunch(true)}> True </div>
            <div className="child-div" onClick={()=>this.props.filterByIsSuccessfulLaunch(false)}> False </div>

            <p><ins>Successful Landing</ins></p>
            <div className="child-div" onClick={()=>this.props.filterByIsSuccessfulLanding(true)}> True </div>
            <div className="child-div" onClick={()=>this.props.filterByIsSuccessfulLanding(false)}> False </div>

        </div>
      );
    }
  }
  
  export default Filters;