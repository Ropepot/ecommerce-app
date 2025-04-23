import React, { useState } from 'react' 
import './Navbar.css'

import logo from '../assets/Assets/Frontend_Assets/logo.png'
import cart_icon from '../assets/Assets/Frontend_Assets/cart_icon.png'
import { Link } from 'react-router-dom'
const Navbar = () => {

    const [menu,setMenu] = useState("shop","men", "women", "kids");

    return(
        <div className='navbar'>
            <div className='nav-logo'>
                <img src={logo} alt="" />
                <p>PINALTAK SHOPPER</p>
            </div>
            <ul className='nav-menu'>
                <li onClick={()=>setMenu("shop")}><Link style={{textDecoration:'none', color: '#626262'}} to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
                <li onClick={()=>setMenu("men")}><Link style={{textDecoration:'none', color: '#626262'}} to='/men'>Men</Link>{menu==="men"?<hr/>:<></>}</li>
                <li onClick={()=>setMenu("women")}><Link style={{textDecoration:'none', color: '#626262'}} to='/women'>Women</Link>{menu==="women"?<hr/>:<></>}</li>
                <li onClick={()=>setMenu("kids")}><Link style={{textDecoration:'none', color: '#626262'}} to='/kids'>Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
            </ul>
            <div className='nav-login-cart'>
                <Link to='/login'><button>Login</button></Link>
                <Link to='/cart'><img src={cart_icon} alt="" /></Link>
                <div className='nav-cart-count'>0</div>
            </div>
        </div>  
    )
}

export default Navbar