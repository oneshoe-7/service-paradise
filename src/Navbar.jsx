import {Link} from 'react-router-dom'
function Navbar(){
    return(
        <nav className="navbar">
            <div className="navbar-logo">Service Paradise</div>
            <div className="navbar-links">
                <Link to="/">Home</Link>
                <Link to="/customer-service">Customer Service</Link>
                     <Link to="/Jobs-Available">Jobs Available</Link>
            </div>
        </nav>
    )
}
export default Navbar