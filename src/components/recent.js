import React, {Component} from 'react'
import styled from 'styled-components'
import {TimelineLite, Expo, TweenMax} from "gsap";




const RecentWrapper = styled.div`
  margin-left: 100px;
  margin-top: 100px;
  display: flex;
  @media (max-width: 860px) {
    flex-direction: column;
  }
  @media (max-width: 600px) {
    margin-left: 5%;
  }
  h3 {
    font-family: 'Circular Std Black';
    margin-bottom: .4rem;
    font-size: 1.5rem;

  }
  p {
    font-family: 'Circular Std Book';
    font-weight: 300;
    font-size: 12px;
    width: 300px;
    margin: 0;
  }
`


const RecentContent = styled.div`
  width: 30%;
  opacity: 0;
`

const ProjectList = styled.div`
  z-index: -1;
  width: 70%;
  opacity: 0;
  @media (max-width: 860px) {
    width: 100%;
    margin-top: 100px;
  }
`

const Project = styled.div`
  margin: 0 0 100px 0;
  z-index: -3;
  span {
    display: block;
    z-index: -1 !important;
    display: flex;
    align-items: center;
  }
  img {
    width: 75%;
    margin: 0 auto !important;
    @media (max-width: 860px) {
      width: 100%;
      padding-right: 5%;
    }
  }
`


class RecentWorks extends Component {
  constructor(props) {
    super(props);
    this.recent = null;
    this.img = null;
    this.Tween = null
  }

  componentDidMount() {
    this.myTween = new TimelineLite();
    this.myTween
    .to(this.recent, 1.2, {opacity: 1, delay: 2.4 ,ease: Expo.easeOut, x: 0, y: 30})
    .to(this.img, 1.2, {opacity: 1, delay: -1 ,ease: Expo.easeOut, x: 0, y: 30})
  }



  render() {
    return (
      <RecentWrapper>
      <RecentContent ref={div => this.recent = div}>
      <h3>Recent Works</h3>
      <p>This is only a tiny higlight of things I have available to show. More exciting projects coming soon ;).</p>
      </RecentContent>
        <ProjectList ref={img => this.img = img}>
        <Project>
          <span alt="project1">
            <img src={require('../images/dribble_travel.gif')} alt="loading..." />
          </span>
        </Project>
        <Project>
          <span >
            <img src={require('../images/planr2.gif')} alt="loading..." />
          </span>
        </Project>
        <Project>
          <span >
            <img src={require('../images/Vistra.gif')} alt="loading..." />
          </span>
        </Project>
        <Project>
          <span >
            <img src={require('../images/audi.gif')} alt="loading..." />
          </span>
        </Project>
        </ProjectList>
      </RecentWrapper>
    )
  }
}

export default RecentWorks
