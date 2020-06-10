import React from "react"
import Logo from "../images/Logos/Pal_Blue/Banner_Pal_Blue.png"

class TopNav extends React.Component {
    render(){
        return (
            <div>
                <div id='topnav'>
                    <a href='/'><img id='logo_img' src={Logo}></img></a>
                    <i class='material-icons'>menu</i>    
                </div>

                <div id='nav_items'>
                    <ul>
                        <a href='/'><li>Home</li></a>
                        <a href='/'><li>News</li></a>
                        <a href='/'><li>Developers</li></a>
                    </ul>
                </div>
            </div>
        )
    }
}

export default TopNav;