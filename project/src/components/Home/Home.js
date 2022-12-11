import React from 'react'
import {
  HomeBackgroundOne,
  HomeBackgroundTwo,
  HomeContainer,
  Article,
  ArticleImage,
  BackgroundImage,
  Title,
  Subtitle,
  Button,
  GridContainer,
} from './HomeStyles'

import AppDesign from '../Banners/AppDesignComponent'
import GraphicDesign from '../Banners/GraphicDesignComponent'
import WebDesign from '../Banners/WebDesignComponent'
// import AttributeComponent from '../AttributeComponent/Attribute'

function Home() {
  return (
    <>
      <HomeBackgroundOne src='/assets/shared/desktop/bg-pattern-leaf.svg'/>
      <HomeBackgroundTwo src='/assets/shared/desktop/bg-pattern-leaf.svg'/>
      <HomeContainer>
        <BackgroundImage />
          <Article>
            <Title>
              <span>Award-winning custom designs and digital branding solutions</span>
            </Title>
            <Subtitle>
              <span>With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services.</span>
            </Subtitle>
            <Button>learn more</Button>
          </Article>
          <ArticleImage src='/assets/home/desktop/image-hero-phone.png'/>
      </HomeContainer>
      <GridContainer>
        <WebDesign variant='home'/>
        <AppDesign />
        <GraphicDesign />
      </GridContainer>
      {/* <AttributeComponent /> */}
    </>
  )
}

export default Home
