import {Link} from 'react-router-dom'
function Header() {
    return (
        <div>
           <Link style={{padding:'10px'}} to="/" >langingPage</Link>
           <Link style={{padding:'10px'}} to="/home" >Home</Link>
           <Link style={{padding:'10px'}} to="/Profile" >Profile</Link>
           <Link style={{padding:'10px'}} to="/signup" >Sign Up</Link>
           <Link style={{padding:'10px'}} to="/login" >Login</Link>
           {/* <Link to="/" >langingPage</Link> */}
        </div>
    )
}

export default Header