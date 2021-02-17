const FetchAPIData = async (year, isLaunchSuccessful, isLandingSuccessful) =>{

    let APIAddress = 'https://api.spaceXdata.com/v3/launches?limit=100'
    if(year !== null){
        APIAddress += '&launch_year='+ year;
    }
    if(isLaunchSuccessful !== null){
        APIAddress += '&launch_success=' + isLaunchSuccessful;
    }
    if(isLandingSuccessful !== null){
        APIAddress += '&land_success=' + isLandingSuccessful;
    }
    console.log(APIAddress);
    return fetch(APIAddress)
      .then(res => res.json())
      .catch((error)=> console.log(error));
  }


export {FetchAPIData};