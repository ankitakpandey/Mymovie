import React from "react";
import img1 from '../../assets/logo.svg';
import SignInOutContainer from "../screens/home/SignInOutContainer";
import './Header.css';

const Header = ({history,isLogged}) =>{
    const handleClick=() =>{
        <SignInOutContainer/>
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
                    <button className='button-header' onClick={handleClick}>Login</button>
                </div>
            </div>
        </nav>
    )
}
export default Header;
