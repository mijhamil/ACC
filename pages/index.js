import Day from '../components/Day'
import API_KEY from '../config.js'


class Conditions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      dataObject: [],
      latitude: null,
      longitude: null
    };
    this.setPosition = this.setPosition.bind(this)
  }


  /**
   * getApi fetches weather data from Dark Sky Api based on the latitude and
   * longitude given from built in geo location called in setLocation()
   */  
  getApi(lat, long) {
    fetch(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/`
    + API_KEY + `/${lat},${long}`)
    .then(res => res.json())
    .then((result) => {
        this.setState({
          isLoaded: true,
          dataObject: result
        });
      },
      // Note: it's important to handle errors here
      // instead of a catch() block so that we don't swallow
      // exceptions from actual bugs in components.
      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    )
  }

  /**
   * setPosition takes in a position parameter from navigator and
   * updates Conditions state.
   * getApi is then called with the latitude/longitude passed in
   */
  setPosition(position){
    var lat = position.coords.latitude;
    var long = position.coords.longitude;
    this.setState({longitude: long, latitude: lat});
    this.getApi(lat, long)
  }

  componentDidMount() {
    
    if (!navigator.geolocation){
      this.setState({statusText: 'Your browser does not support geolocation...'});
    }
    else{
        // Passes position and calls setPosition function
        navigator.geolocation.getCurrentPosition(this.setPosition, this.errorPosition);
    }
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return (<div>
        <h1>Loading...</h1>
      </div>);
    } else {
      return (
       <div>
       <p>The Latitude is {JSON.stringify(this.state.dataObject.latitude, null, 2)}.</p>
       <p>The Longitude is {JSON.stringify(this.state.dataObject.longitude, null, 2)}.</p>
       <p>The Current Temperature is {JSON.stringify(this.state.dataObject.currently.temperature, null, 2)}.</p>
       <h2>5 day forcast data </h2>
       <Day data={this.state.dataObject.daily.data[0]} day={'1'}/>
       <Day data={this.state.dataObject.daily.data[1]} day={'2'}/>
       <Day data={this.state.dataObject.daily.data[2]} day={'3'}/>
       <Day data={this.state.dataObject.daily.data[3]} day={'4'}/>
       <Day data={this.state.dataObject.daily.data[4]} day={'5'}/>
       </div>
      );
    }
  }
}
export default Conditions;