import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import styled from 'styled-components'
import Img from "gatsby-image"
import { StaticQuery, graphql } from 'gatsby'
import Image from '../components/image'

const About = styled.div`
position: absolute;
bottom: 0;
right: 100px;
@media (max-width: 1024px) {
  display: none;
}
  .inner {
    height: 300px;
    padding: 25px;
    width: 500px;

    @media (max-width: 600px) {
      left: 0;
    }

    h3 {
      color: #0a0a0a;
      font-size: 42px;
      font-family: 'Circular Std Black';
      span {
        -webkit-text-fill-color: white;
        -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: 0a0a0a;
      }
    }
    .block {
      display: block;
      height: 4px;
      width: 50px;
      background: #0a0a0a;
    }
    p {
      color: #0a0a0a;
      margin-top: 50px;
      font-weight: 300;
      font-family: 'Circular Std Book';
      font-size: 14px;
    }
  }

`


const AboutPage = ({data}) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <About>
        <div className="inner">
          <h3>Somethings that I am <span>Working</span> on!</h3>
          <span className="block"></span>
          <p>Hello there, My name is Akram Khalid. I help bring new and exciting designs and tech to a wide variety of clients. Currently making things happen at Vitalstorm Marketing</p>
        </div>
      </About>
  </Layout>
);




export default AboutPage;

export const query = graphql`
  query {
    file(relativePath: { eq: "flower.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 125, height: 125) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
