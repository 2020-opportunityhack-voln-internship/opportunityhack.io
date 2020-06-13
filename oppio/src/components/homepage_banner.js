import React from "react"
import BannerImage from "../images/banner_img.jpg"
import LogoImageOver from "../images/Logos/White/square_w.png"

class Banner extends React.Component {
    scrollToTools(){
        document.querySelector('#banner_1').scrollIntoView({ block: 'start',  behaviour: 'smooth' });
    }
    render(){
        return (
            <div id='homepage_banner'>
                <img id='banner_img_under' src={BannerImage}></img>
                <div id='inner_banner'>
                    <img id='banner_img_over' src={LogoImageOver}></img>
                    <p id='banner_scroll_btn' onClick={this.scrollToTools}>See our tools</p>
                </div>
            </div>
        )
    }
}

export default Banner;