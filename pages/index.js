import Layout from '../components/MyLayout.js'
import ApiCall from '../components/ApiCall'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import {geolocated} from 'react-geolocated';
import {geoPropTypes} from 'react-geolocated';
import Data from '../components/Data.js'


function getPosts () {
  return [
    { id: 'hello-nextjs', title: 'Hello Next.js'},
    { id: 'learn-nextjs', title: 'Learn Next.js is awesome'},
    { id: 'deploy-nextjs', title: 'Deploy apps with ZEIT'},
  ]
}


  const Index = (props) => (
   
    <div>
     <h1>Batman TV Shows</h1>
     <ul>
       {console.log(props)}
       {console.log("tests")}
      
     </ul>
     </div>
 
     
   )

  /* {props.shows.map(({show}) => (
    <li key={show.id}>
      <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
        <a>{show.name}</a>
      </Link>
    </li>
  ))} */
   
Index.getInitialProps = async function() {
    //const res = await fetch('https://api.darksky.net/forecast/01b26ee6d0c3282a322bd29fbe30564f/37.334789,-121.888138')
    const latty =  "38.334789"
    const longgy =  "-121.888138"
    const res = await fetch('https://api.darksky.net/forecast/01b26ee6d0c3282a322bd29fbe30564f/'+latty+','+longgy)
  //  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
    const data = await res.json()
  
    console.log(`Show data fetched. Count: ${data.length}`)
  
    return {
      shows: data
    }
  }

function getGeoLoc(){
  // return !this.props.isGeolocationAvailable
  // ? <div>Your browser does not support Geolocation</div>
  // : !this.props.isGeolocationEnabled
  //   ? <div>Geolocation is not enabled</div>
  //   : this.props.coords
  //     ? 
  //     (<table>
  //       <tbody>
  //         <tr><td>latitude</td><td>{this.props.coords.latitude}</td></tr>
  //         <tr><td>longitude</td><td>{this.props.coords.longitude}</td></tr>
  //         <tr><td>altitude</td><td>{this.props.coords.altitude}</td></tr>
  //         <tr><td>heading</td><td>{this.props.coords.heading}</td></tr>
  //         <tr><td>speed</td><td>{this.props.coords.speed}</td></tr>
  //       </tbody>
  //     </table>, console.log("the latty is " + props.coords.latitude))
  //     : <div>Getting the location data&hellip; </div>
  if (!this.props.isGeolocationAvailable) {
    console.log("not available")
  } else {
    console.log("available")
  }
}
getGeoLoc.propTypes = Object.assign({}, getGeoLoc.propTypes, geoPropTypes);

/* if ("geolocation" in navigator) {
  // check if geolocation is supported/enabled on current browser
  navigator.geolocation.getCurrentPosition(
   function success(position) {
     // for when getting location is a success
     console.log('latitude', position.coords.latitude, 
                 'longitude', position.coords.longitude);
   },
  function error(error_message) {
    // for when getting location results in an error
    console.error('An error has occured while retrieving location', error_message)
  }  
  );
} else {
  // geolocation is not supported
  // get your location some other way
  console.log('geolocation is not enabled on this browser')
} */

/*
const PostLink = ({ post }) => (
  <li>
    <Link as={`/p/${post.id}`} href={`/post?title=${post.title}`}>
      <a>{post.title}</a>
    </Link>
  </li>
)

export default () => (
  <Layout>
    <h1>My Blog</h1>
    <ul>
      {getPosts().map((post) => (<PostLink key={post.id} post={post}/>))}
    </ul>
  </Layout>
)
*/


class Demo extends React.Component {


  getInitialProps = async function() {
    //const res = await fetch('https://api.darksky.net/forecast/01b26ee6d0c3282a322bd29fbe30564f/37.334789,-121.888138')
    const latty =  "38.334789"
    const longgy =  "-121.888138"
    const res = await fetch('https://api.darksky.net/forecast/01b26ee6d0c3282a322bd29fbe30564f/'+latty+','+longgy)
  //  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
    const data = await res.json()
  
    console.log(`Show data fetched. Count: ${data.length}`)
  
    return {
      shows: data
    }
  }
  
  render() {
    return (

     
    !this.props.isGeolocationAvailable
      ? <div>Your browser does not support Geolocation</div>
      : !this.props.isGeolocationEnabled
        ? <div>Geolocation is not enabled</div>
        : this.props.coords
          ? 
          <table>
            <tbody>
              <tr><td>latitude</td><td>{this.props.coords.latitude}</td></tr>
              <tr><td>longitude</td><td>{this.props.coords.longitude}</td></tr>
              <tr><td>altitude</td><td>{this.props.coords.altitude}</td></tr>
              <tr><td>heading</td><td>{this.props.coords.heading}</td></tr>
              <tr><td>speed</td><td>{this.props.coords.speed}</td></tr>
            </tbody>
          </table>
          : <div>Getting the location data&hellip; </div>
          
    );
  }
}

// Demo.propTypes = Object.assign({}, Demo.propTypes, geoPropTypes);

 
// export default geolocated()(Demo)
// ;

// export default () => (
//   <div>
//     <p>Hello Next.js</p>
//     <Index />
//   </div>
// )
export default Index

