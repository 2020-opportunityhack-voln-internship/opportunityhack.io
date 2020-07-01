import React from "react"
import BannerImage from "../images/banner_img.jpg"
import LogoImageOver from "../images/Logos/White/square_w.png"
import "./layout.css"

class Banner extends React.Component {
    scrollToTools(){
        var topOfTools = document.querySelector('#tool_section').offsetTop - 50;
        window.scroll({top: topOfTools});
    }
    render(){
        return (
            <div id='homepage_banner'>
                <img id='banner_img_under' src={BannerImage} alt='LOGO'></img>
                <div id='inner_banner'>
                    <div class='blur_banner'></div>
                    <img id='banner_img_over' src={LogoImageOver} alt='LOGO OVER'></img>
                    <p id='banner_scroll_btn' onClick={this.scrollToTools}>See our tools</p>
                </div>
            </div>
        )
    }
}

export default Banner;