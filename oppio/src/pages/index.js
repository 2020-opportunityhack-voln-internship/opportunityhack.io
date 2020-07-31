import React from "react"
import GithubLogo from "../images/GitHub-Mark-Light-120px-plus.png"
import PaypalLogo from "../images/paypal-Logo.png"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import Footer from "../components/footer"
import "../components/layout.css"
import B1 from "../../static/banner_1.jpg";
import B2 from "../../static/banner_2.jpg";
import B3 from "../../static/banner_3.jpg";
// import Img from "gatsby-image"
// import { GoogleLogin } from 'react-google-login';
import TopNav from "../components/topnav"
// import netlifyIdentity from 'netlify-identity-widget'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function App({data}) {
  const renderSlides = () =>
    [B1,B2,B3].map(num => (
      <div>
    <img class='slides' src={num} alt='home page banner'></img>
      </div>
    ));
  
return (
  <React.Fragment>
      <body>
    <div className="App">
    <Slider dots={true} autoplay={true} slidesToShow={1} speed={5000} autoplaySpeed= {500}>{renderSlides()}</Slider>
    </div>

    {/* HELMET. This is where elements are injected into the head tag */}
    <Helmet>
      <title>OpportunityHack</title>
      <script src="https://apis.google.com/js/platform.js" async defer></script>
      <meta name="google-signin-client_id" content="275198785754-2qtchf3m7l14iper2iorstghppp4rv8l.apps.googleusercontent.com"/>
    
    </Helmet>
    <TopNav />

    {/* <div id='homepage_banner'> */}
    {/* <img class='banner_img_under' src='./banner_2.jpg' alt='home page banner'></img> */}
    {/* <div id='inner_banner'>
      <div class='blur_banner'></div>
        <img class='banner_img_over' src='./square_w.png'></img>
        <p id='banner_scroll_btn' onClick={() =>
          window.scroll({top: document.querySelector('#tool_section').offsetTop - 50})}>See our tools</p>
      </div> */}
  {/* </div> */}

  {/* BANNER 1. About OppHack */}
  <div id='banner_1' class='info_banner'>
    <h1 class='banner_heading'>What is Opportunity Hack?</h1>
    <div class='small_border white'></div>
    <p>At Opportunity Hack, our mission is quite simple<br></br><br></br>
    <ul>
      <li>To help nonprofits and social enterprises access human capital that they haven't been able to tap into.</li>
      <li>To help skilled professionals enable impact through their skills. </li>
    </ul>
    <br></br>
    We achieve these visions by providing opportunities to talened and passionate developers who are inspired to change the world of software and business.
    <br></br>
    <br></br>
    <a class='banner_link' target='_blank' href='https://www.facebook.com/OpportunityHack/'>Facebook Page</a><a class='banner_link' target='_blank' href='https://www.ohack.org/'>Opportunity Hack Website</a><br></br><br></br>
    <img class='logoimg' src='./banner_w.png'></img>
    </p>
  </div>
  {/* END BANNER 1 */}

  {/* BANNER 2. Heroku banner.*/}
  <div id='banner_2' class='info_banner'>
    <h1 class='banner_heading'>We use Heroku to deploy our solutions.</h1>
    <div class='small_border white'></div>
    <h1 class='banner_heading' id='heroku_quote'>"Developers, teams, and businesses of all sizes use Heroku to deploy, manage, and scale apps." - Heroku.com</h1>
    <p>The solutions developed by our teams are deployed on Heroku! Here are the steps you take get started:
    <br></br>
    <br></br>
    <ul>
      <li>Create an account on opportunityhack.io</li>
      <li>Use our <a href='/dashboard/' class='inline_banner_link'>dashboard</a> to find the right solutions for you or your company</li>
      <li>Click 'Deploy' and create an instance of the software.</li>
      <li>Stand back and watch your company grow!</li>
    </ul>
    <br></br>
    Once our developers have finished and deployed a piece of software, we make it easy for your company to find and use it. It's our job!
    <br></br><br></br>
    <a class='banner_link' target='_blank' href='https://www.heroku.com/'>Learn more</a><br></br><br></br>
    <img id='heroku_logo' src='https://signup.heroku.com/assets/logo-horizontal@2x-1dc719093957394192e73258c3ed79718b3e88b1d6353e90803a044effe9f91c.png'>
    </img>
   </p>
  </div>
  {/* END BANNER 2 */}

  {/* BANNER 3. Github banner. */}
  <div id='banner_3' class='info_banner'>
    <h1 class='banner_heading'>We believe in open-source projects.</h1>
    <div class='small_border white'></div>
    <p>
    Our developers use code repositories on Github to store our available software solutions. As a client or a developer, you can see the work being done and progress being made every step of the way. If you see a Github button with that iconic cat on it, feel free to take a peek at whats happening with that software!
    <br></br>
    <br></br>
    <span class='italic'>Every solution. Every commit. Every time.</span>
    <br></br><br></br>
    <a class='banner_link' target='_blank' href='https://github.com/'>What is Github?</a><br></br><br></br>
    <img id='github_logo' src={GithubLogo}></img>
   </p>
  </div>
  {/* END BANNER 3 */}

  {/* BANNER 4. Opp Hack Org banner. */}
  <div id='banner_4' class='info_banner'>
    <h1 class='banner_heading'>What's happening with Opportunity Hack?</h1>
    <div class='small_border white'></div>
    <p>
    Opportunity Hack supports developers at all levels of expertise. We host hackathons, competitions, and events highlighting the work and dedication of experienced developers and budding programmers alike! 
    <br></br>
    <br></br>
    <center>
    <img src='https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/91805903_2652169571677733_1586857546763730944_o.jpg?_nc_cat=106&_nc_sid=730e14&_nc_ohc=XnaTVMIf5gMAX_vhbps&_nc_oc=AQnr_6lXS9xRUzAZj_HV14y2rd6VuKSf5ZNm3FqyJKQq-ZHxBDDg6BaJDEm98QNbje8nc6XtHxCYgrlR2U2nC96p&_nc_ht=scontent-sea1-1.xx&oh=7a01d1a1ef40b51039709771ec6524d0&oe=5F43CA89'></img>
    <img src='https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/91505403_2652166611678029_2355812793334104064_o.jpg?_nc_cat=101&_nc_sid=730e14&_nc_ohc=bcQyRo8W9IYAX-8t5uJ&_nc_ht=scontent-sea1-1.xx&oh=2d3cf6a0c00d5c16bba94af6b13be3d9&oe=5F468459'></img>
    </center>
    <br></br><br></br>
    <a class='banner_link' id='org_link' target='_blank' href='https://sites.google.com/opportunityhack.io/opportunity-hack/home?authuser=0'>Opportunity Hack Website</a><br></br>
    <br></br>
    </p>
  </div>
  {/* END BANNER 4 */}

  {/* SOFTWARE SOLUTIONS SECTION */}
  <div id='tool_section'>

  <h1 id='tool_heading'>Software Solutions</h1>

  <div class='small_border gray'></div>

  <div id='soln_wrap'>
  
  {/* Iterate through all markdown files and generate solution thumbnails. */}
  {data.allMarkdownRemark.edges.map(({ node }) => (
    <div class='solution'>

      <p class='soln_title'>{node.frontmatter.title}</p>

      <div class='soln_inner_wrap'>
      <p class='soln_desc'>{node.frontmatter.mini_description}</p>

      <a class='learn_more_link' target='_blank' href={node.fields.slug}>Learn more</a>
      <br></br><br></br>

      {/* Generate feature for every element in the markdown array 'features' */}
      {
        (node.frontmatter.features) != null ?  
          (node.frontmatter.features).map((data) =>
            <div class='feature'>
              <i class='material-icons'>add</i>    
              <p>{data}</p>
            </div>
          )
          :
          <div></div>
      }
      {/* End of feature iteration. */}

      <br></br>
      
      {/* Generate Github Link if the string is not empty. */}
      <a  target='_blank' href={node.frontmatter.github_link} class={node.frontmatter.github_link === "" ? 'hidden' : 'shown'}>
      <div class='github_link_element'>
          <img src={GithubLogo} alt='logo'></img>
          <p>View GitHub</p>
      </div>
      </a>
      {/* End of Github link generation. */}

      {/* Generate Heroku link if the string is not empty. */}
      {/*}
      <a href={node.frontmatter.heroku_link} class={node.frontmatter.heroku_link === "" ? 'hidden' : 'shown'}>
      <div class='heroku_link_element'>
          <img src='https://brand.heroku.com/static/media/heroku-logotype-vertical.f7e1193f.svg'></img>
          <p>View Heroku</p>
      </div>
      </a>
    */}
      {/* End of Heroku link generation. */}

      </div>
      {/* END OF SOLUTION GENERATION */}

    </div>

  ))}

  </div>

  <br></br>

  </div>

    {/* BANNER 5. Research lab banner. */}
    <div id='banner_5' class='info_banner'>
    <h1 class='banner_heading'>Research Labs</h1>
    <div class='small_border white'></div>
    <p>
    Opportunity Hack doesn't just make software solutions for non-profits, we participate in software research as well! Our volunteer developers work on research projects in various aspects of the tech world such as social media and analysis of data. Want to learn more? 
    <br></br>
    <br></br>
    <span class='italic'>
    Click the button below to see what we are working on!
    </span>
    <br></br>
    <br></br>
    <a class='banner_link' target='_blank' id='lab_link' href='/research'>Research Lab</a><br></br>
    </p>
  </div>
  {/* END OF BANNER 5 */}

  {/* BANNER 6. Donation banner. */}
  <div id='banner_6' class='info_banner'>
    <h1 class='banner_heading'>Donations are your opportunity to contribute!</h1>
    <div class='small_border white'></div>
    <p>
    Want to invest in the development of free and open-source software for small businesses and non-profits? Use our secure PayPal tool to donate! Everyone at Opportunity Hack sends their appreciation to all donors!
    <br></br>
    <br></br><br></br>
    <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
    <input type="hidden" name="cmd" value="_donations" />
    <input type="hidden" name="business" value="GM5N6JF4VFYWL" />
    <input type="hidden" name="currency_code" value="USD" />
    <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
    <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
    <br></br><br></br>
    <img id='paypal_logo' src={PaypalLogo}></img>
</form>

    </p>
  </div>
  {/* END OF BANNER 6 */}
  
  {/* FOOTER. Already has a react component. */}
  <div class='footer'>
    <Footer />
  </div>
  {/* End of Footer. */}

  </body>
  </React.Fragment>
)
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark (
      filter: {
        fields: { collection: { eq: "solutions" } }
      }
    ) {
      totalCount
      edges {
        node {
          id
          html
          frontmatter {
            title
            mini_description
            features
            github_link
            youtube_link
            heroku_link
          }
          fields{
            slug
          }
          excerpt
        }
      }
    }
  }
`
