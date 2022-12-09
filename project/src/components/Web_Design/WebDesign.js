import React from 'react'

import { 
  TitleContainer,
  WebBackgroundImage,
  Content,
  WebTitle,
  WebSubtitle,
  CardContainer,
  Card,
  CardImage,
  CardArticle,
} from './WebDesignStyles'

const cards = [
  {
    image: 'express',
    subtitle: 'A multi-carrier shipping website for ecommerce businesses',
  },
  {
    image: 'transfer',
    subtitle: 'Site for low-cost money transfers and sending money within seconds',
  },
  {
    image: 'photon',
    subtitle: 'A state-of-the-art music player with high-resolution audio and DSP effects',
  },
  {
    image: 'builder',
    subtitle: 'Connects users with local contractors based on their location',
  },
  {
    image: 'blogr',
    subtitle: 'Blogr is a platform for creating an online blog or publication',
  },
  {
    image: 'camp',
    subtitle: 'Get expert training in coding, data, design, and digital marketing',
  },
]

function WebDesign() {
  return (
    <>
      <TitleContainer>
        <WebBackgroundImage />
        <Content>
          <WebTitle>
            <span>Web Design</span>
          </WebTitle>
          <WebSubtitle>
            <span>We build websites that serve as powerful marketing tools and bring memorable brand experiences.</span>
          </WebSubtitle>
        </Content>
      </TitleContainer>
      <CardContainer>
      {
        cards.map((card, i) => {
          return(
            <Card>
              <CardImage>
                <img src={`/assets/web-design/desktop/image-${card.image}.jpg`} alt='' />
              </CardImage>
              <CardArticle>
                <span>{card.image.toUpperCase()}</span>
                <p>{card.subtitle}</p>        
              </CardArticle>
            </Card>
          )
        })
      }
      </CardContainer>
    </>
  )
}

export default WebDesign