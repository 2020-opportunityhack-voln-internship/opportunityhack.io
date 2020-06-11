import React from "react"
import Logo from "../images/Logos/Pal_Blue/Banner_Pal_Blue.png"

class TopNav extends React.Component {
    toggleMenu(){
        var nav = document.getElementById('nav_items');
        if(nav.classList.contains('hidden')){
            nav.classList.remove('hidden');
            nav.classList.add('shown');
        }
        else {
            nav.classList.remove('shown');
            nav.classList.add('hidden');
        }
    }
    render(){
        return (
            <div>
                <div id='topnav'>
                    <a href='/'><img id='logo_img' src={Logo}></img></a>
                    <i class='material-icons' onClick={this.toggleMenu}>menu</i>    
                </div>

                <div id='nav_items' class='hidden animate__animated animate__slideInDown'>
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