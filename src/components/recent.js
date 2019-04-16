import React, { Component } from 'react'
import styled from 'styled-components'
import { TimelineLite, Expo } from 'gsap'

const RecentWrapper = styled.div`
  margin-left: 100px;
  margin-top: 50px;
  margin-bottom: 50px;
  display: flex;
  @media (max-width: 860px) {
    flex-direction: column;
  }
  @media (max-width: 600px) {
    margin-left: 5%;
  }
  h3 {
    font-family: 'Playfair Display';
    font-weight: 700;
    margin-bottom: 0.4rem;
    font-size: 1.3rem;
    color: #132f3e;
  }
  p {
    font-family: 'Lato';
    font-weight: 300;
    font-size: 14px;
    width: 300px;
    margin: 0;
    color: #132f3e;
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
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 860px) {
    width: 100%;
    margin-top: 100px;
  }
`

const Project = styled.div`
  z-index: -3;
  padding: 0px 15px;
  span {
    z-index: -1 !important;
  }
  video {
    @media (max-width: 860px) {
      width: 100%;
      padding-right: 5%;
    }
  }
`

class RecentWorks extends Component {
  constructor(props) {
    super(props)
    this.recent = null
    this.img = null
    this.Tween = null
  }

  componentDidMount() {
    this.myTween = new TimelineLite()
    this.myTween
      .to(this.recent, 1.2, {
        opacity: 1,
        delay: 1.4,
        ease: Expo.easeOut,
        x: 0,
        y: 30,
      })
      .to(this.img, 1.2, {
        opacity: 1,
        delay: -1,
        ease: Expo.easeOut,
        x: 0,
        y: 30,
      })
  }
  render() {
    return (
      <RecentWrapper>
        <RecentContent ref={div => (this.recent = div)}>
          <h3>Recent Works</h3>
          <p>
            This is only a tiny highlight of things I have available to show.
            More exciting projects coming soon ;).
          </p>
        </RecentContent>
        <ProjectList ref={img => (this.img = img)}>
          <Project>
            <span>
              <video
                width="400"
                height="300"
                autoPlay
                muted
                loop
                playsInline
                poster="https://giphy.com/gifs/58F2bDDdEce4LCjx8t/html5"
              >
                <source
                  src={require('../images/travel.mp4')}
                  type="video/mp4"
                />
                <source
                  src={require('../images/travel.webm')}
                  type="video/webm"
                />
              </video>
            </span>
          </Project>
          <Project>
            <span>
              <video
                width="400"
                height="300"
                autoPlay
                muted
                loop
                playsInline
                poster="https://giphy.com/gifs/LpFM0IFq6aciTfCeL2/html5"
              >
                <source src={require('../images/planr.mp4')} type="video/mp4" />
                <source
                  src={require('../images/planr.webm')}
                  type="video/webm"
                />
              </video>
            </span>
          </Project>
          <Project>
            <span>
              <video
                width="400"
                height="300"
                autoPlay
                muted
                loop
                playsInline
                poster="https://giphy.com/gifs/cICXYU9zQ1eWR18jcb/html5"
              >
                <source
                  src={require('../images/vistra-energy.mp4')}
                  type="video/mp4"
                />
                <source
                  src={require('../images/vistra-energy.webm')}
                  type="video/webm"
                />
              </video>
            </span>
          </Project>
          <Project>
            <span>
              <video
                width="400"
                height="300"
                autoPlay
                muted
                loop
                playsInline
                poster="https://giphy.com/gifs/cAqjS1ZeyO4YjUTTDO/html5"
              >
                <source src={require('../images/audi.mp4')} type="video/mp4" />
                <source
                  src={require('../images/audi.webm')}
                  type="video/webm"
                />
              </video>
            </span>
          </Project>
        </ProjectList>
      </RecentWrapper>
    )
  }
}

export default RecentWorks
