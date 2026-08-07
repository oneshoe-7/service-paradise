import{Routes,Route,Link} from'react-router-dom'
import CustomerService from './CustomerService.jsx'
import JobsAvailable from './JobsAvailable.jsx'
import Navbar from './Navbar.jsx'
import bgImage from './assets/ser.jpg'
import Submit from'./Submit.jsx'
import Cart from './Cart.jsx'
import './App.css'

function Page(){
  return(
    <div id="bar" style={{ backgroundImage: `url(${bgImage})` }}>
   <Navbar />
   <div id="div3">
    <div id="div1">
      <h1>Service Paradise</h1>
      <div id="div2">
        <Link to="/customer-service">
        <button className="btn">Customer Service</button>
        </Link>
        <Link to="/Jobs-Available">
        <button className="btn">Jobs Available</button>
        </Link>
        </div>
      
      </div>
    </div>
    </div>
  )

}
function App(){
  return(
    <Routes>
      <Route path="/" element={<Page />} />
      <Route path="/customer-service" element={<CustomerService />} />
      <Route path="/Jobs-Available" element={<JobsAvailable />} />
      <Route path="/Submit" element={<Submit/>} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  )
}
export default App;

