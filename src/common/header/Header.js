import React from "react";
import img1 from '../../assets/logo.svg';
import './Header.css';

const Header = ({history,isLogged}) =>{
    const handleClick=() =>{
        history.push('/')
        isLogged(false)
    }
    return(
        <nav>
            <div className='div-header'>
                <div className='div-svg'>
                    <img className="navbar-logo" src={img1} alt=" "/>  
                </div>
                <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                  {/*   <NavLink exact to='/' activeClassName='active'><Home className='div-svg'/></NavLink>
                    <NavLink exact to='/explore' activeClassName='active'><Explore className='div-svg'/></NavLink> */}
                    <button className='button-header' onClick={handleClick}>Login</button>
                </div>
            </div>
        </nav>
    )
}
export default Header;
/* export default withRouter(Header); */
