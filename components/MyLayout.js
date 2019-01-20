import Header from './Header'
import Data from './Data'
import ApiCall from './ApiCall'

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
}

const Layout = (props) => (
  <div style={layoutStyle}>
    <Header />
    <Data />
    
    {props.children}
  </div>
)

export default Layout