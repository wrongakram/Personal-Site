import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import styled from 'styled-components'

const About = styled.div`
  display: flex;
  align-items: center;
  .inner {
    padding-left: 100px;
    margin-top: 200px;
    display: flex;
    flex-direction: column;
    position: relative;
    z-index: -1;
    width: 500px;
    @media (max-width: 600px) {
     padding-left: 5%;
     width: 100%;
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
