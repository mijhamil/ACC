import Layout from '../components/MyLayout.js'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import React, {Component} from 'react';

// const Index = (props) => (
   
//    <div>
//     <h1>Batman TV Shows</h1>
//     <ul>
//       {props.shows.map(({show}) => (
//         <li key={show.id}>
//           <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
//             <a>{show.name}</a>
//           </Link>
//         </li>
//       ))}
//     </ul>
//     </div>

    
//   )

// Index.getInitialProps = async function() {
//     const res = await fetch('https://api.darksky.net/forecast/01b26ee6d0c3282a322bd29fbe30564f/37.334789,-121.888138')
//   //  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
//     const data = await res.json()
  
//     console.log(`Show data fetched. Count: ${data.length}`)
  
//     return {
//       shows: data
//     }
//   }
  
//   export default Index

  class ApiCall extends React.Component {
    constructor() {
        super();
        this.state= {
            dats: [],
        };
    }
    componentDidMount() {
      
        fetch('https://api.darksky.net/forecast/01b26ee6d0c3282a322bd29fbe30564f/37.334789,-121.888138').then(
            results => {
                return results.json();
            }
        ).then(data => {
            let pictures = data.results
        })
        console.log(data)
    }

    render() {
        return (
            <h1>hi2</h1>
        )
            
        
    }

  }

  