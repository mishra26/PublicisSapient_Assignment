const FetchAPIData = async (year, isLaunchSuccessful, isLandingSuccessful) =>{
    var qs = "";
    let APIAddress = 'https://api.spaceXdata.com/v3/launches?limit=100'
    if(year !== null){
        APIAddress += '&launch_year='+ year;
        qs += '&launch_year='+ year;
    }
    if(isLaunchSuccessful !== null){
        APIAddress += '&launch_success=' + isLaunchSuccessful;
        qs += '&launch_success=' + isLaunchSuccessful;
    }
    if(isLandingSuccessful !== null){
        APIAddress += '&land_success=' + isLandingSuccessful;
        qs += '&launch_success=' + isLaunchSuccessful;
    }
    console.log(APIAddress);
    console.log(qs);
    const nextTitle = 'My new page title';
    const nextState = { additionalInformation: 'Updated the URL with JS' };
    window.history.replaceState(nextState, nextTitle, qs);
    //document.location.href = qs;
    return fetch(APIAddress)
      .then(res => res.json())
      .catch((error)=> console.log(error));
  }


export {FetchAPIData};