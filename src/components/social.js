import React, {Component} from 'react'
import styled, {css} from 'styled-components'
import Link from 'gatsby-link'
import {TimelineLite, Expo,} from "gsap";
import { faDribbble, faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(faDribbble, faGithub, faLinkedin, faInstagram);



const SocialLinks = styled.div`
margin-top: 80px;
position: absolute;
left: 100px;
bottom: 100px;
z-index: 10;
@media (max-width: 600px) {
 left: 5%;
}
  ul {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    li {
      list-style: none;
      margin: 5px 0px;
      a {
        text-decoration: none;
        font-weight: 300;
        color: #000;
        text-transform: capitalize;
        svg {
          font-size: 16px;
        }
      }
    }
  }
`


const MobileDelete = styled.span`
  @media (max-width: 600px) {
   display: none;
  }
`




const socialsArray = [
  {url: "https://dribbble.com/",  icon: "dribbble"},
  {url: "https://github.com/", icon: "github"},
  {url: "https://www.linkedin.com/", icon: "linkedin"},
  {url: "https://www.instagram.com/",  icon: "instagram"},
]

class SocialIcons extends Component {
  constructor(props) {
    super(props);
    this.socials = [];
// reference to the animation
    this.myTween = null;
  }
  componentDidMount(){
    this.myTween = new TimelineLite();
    this.myTween
    .staggerFrom(this.socials, .2, { delay: 1,scale: 0, autoAlpha: 0 }, 0.1) //animate
  }
  render() {
    return (
      <SocialLinks>
        <ul>
          {socialsArray.map( (social, index) => {
            return (
              <li
                key={`social-${index}`}
                ref={ li => this.socials[index] = li }
                >
                <Link to={social.url}><FontAwesomeIcon icon={['fab', `${social.icon}`]} /></Link>
              </li>
            )
          } )

          }
        </ul>
      </SocialLinks>
    )
  }
}

export default SocialIcons
