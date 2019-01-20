import Link from 'next/link'
import {geolocated} from 'react-geolocated';
import {geoPropTypes} from 'react-geolocated';

const linkStyle = {
  marginRight: 15
}



class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          lat: null,
          long: null,
        };
      }
  
    render() {
      return (
  
       
    //   !this.props.isGeolocationAvailable
    //     ? <div>Your browser does not support Geolocation</div>
    //     : !this.props.isGeolocationEnabled
    //       ? <div>Geolocation is not enabled</div>
    //       : this.props.coords
    //         ? (
    //             console.log("hello"),
    //             !this.state.lat
    //                 ? this.setState({lat: this.props.coords.latitude, long: this.props.coords.longitude })
    //                 : console.log("already found location, \n here is lat: " + this.state.lat + "\n here is long: " + this.state.long),
    //             (<table>
    //                 <tbody>
    //                 <tr><td>latitude</td><td>{this.props.coords.latitude}</td></tr>
    //                 <tr><td>longitude</td><td>{this.props.coords.longitude}</td></tr>
    //                 </tbody>
    //             </table>)
    //             )
    //         : <div>Getting the location data&hellip; </div>
            
         <h1>HI</h1>   
      );
    }
  }
  
  Demo.propTypes = Object.assign({}, Demo.propTypes, geoPropTypes);
  
   
  export default geolocated()(Demo)
  ;
  