import React from "react"
import BannerImage from "../images/banner_img.jpg"
import LogoImageOver from "../images/Logos/White/square_w.png"

class Banner extends React.Component {
    render(){
        return (
            <div id='homepage_banner'>
                <img id='banner_img_under' src={BannerImage}></img>
                <img id='banner_img_over' src={LogoImageOver}></img>
            </div>
        )
    }
}

export default Banner;