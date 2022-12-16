import React from 'react'
import styled from 'styled-components'
import AppDesign from '../../components/Banners/AppDesignComponent'
import GraphicDesignContainer from '../../components/Banners/GraphicDesignComponent'
import Footer from '../../components/Footer/Footer'

import { 
  SvgBackground,
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
      <SvgBackground src='/assets/shared/desktop/bg-pattern-leaf.svg'/>
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
      <Grid>
        <AppDesign />
        <GraphicDesignContainer />
      </Grid>
      <Footer/>
    </>
  )
}

export default WebDesign

const Grid = styled.div`
  margin-top: 160px;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  column-gap: 30px;
  width: 100%;
  height: 308px;

  @media (max-width: 850px) {
    margin-top: 120px;
    height: 424px;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    row-gap: 24px;
  }

  @media (max-width: 449px) {
    width: 327px;
    margin: 96px auto 0;
    height: 524px;
  }
`