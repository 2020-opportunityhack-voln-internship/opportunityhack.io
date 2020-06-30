import React from "react"
import Logo from "../../banner_w.png"
import BannerImage from "../images/banner_img.jpg"
import { Helmet } from "react-helmet"

sessionStorage.username = "Not Logged In";

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
<Helmet>
    <script src="https://apis.google.com/js/platform.js" async defer></script>
    <meta name="google-signin-client_id" content="275198785754-2qtchf3m7l14iper2iorstghppp4rv8l.apps.googleusercontent.com"></meta>

    <meta name="google-signin-scope" content="profile email" />

    <script>
      {
        `
        function onSignIn(){
          alert('SUCCESS');
        }
        `
      }
    </script>
    
  </Helmet>
<div class="g-signin2 my-signin2 gbtn" data-onsuccess='onSignIn' data-theme="light"></div>
                <div class='topnav'>
                    <a href='/'><img id='logo_img' src={Logo}></img></a>
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