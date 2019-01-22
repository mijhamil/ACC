import { get } from "https";

class Conditions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      dats: [],
      latitude: null,
      longitude: null
    };
    this.setPosition = this.setPosition.bind(this)
    
  }

  getApi(lat, long) {
    console.log("getApi Called")
    console.log(lat, long)
    fetch(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/01b26ee6d0c3282a322bd29fbe30564f/${lat},${long}`, { headers: {
      'Access-Control-Allow-Origin':'*'
    }})
    .then(res => res.json())
    .then((result) => {
        this.setState({
          isLoaded: true,
          dats: result
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
        navigator.geolocation.getCurrentPosition(this.setPosition, this.errorPosition);

    }
    //this.getApi();
  }

  componentWillUnmount() {
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
       <p>The Latitude is {JSON.stringify(this.state.dats.latitude, null, 2)}.</p>
       <p>The Longitude is {JSON.stringify(this.state.dats.longitude, null, 2)}.</p>
       <p>The Time Zone is is {JSON.stringify(this.state.dats.timezone, null, 2)}.</p>
       <p>The Current Temperature is {JSON.stringify(this.state.dats.currently.temperature, null, 2)}.</p>
       
       </div>
      );
    }
  }
}
export default Conditions;


