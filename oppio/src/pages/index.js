import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import TopNav from "../components/topnav"
import { Helmet } from "react-helmet"

const HomePage = () => (
  <div>
    <Helmet>
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
  </Helmet>
  <TopNav />
  </div>
  
)

export default HomePage
