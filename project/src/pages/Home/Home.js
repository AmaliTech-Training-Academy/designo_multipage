import React from 'react'
import {
  HomeBackgroundOne,
  HomeBackgroundTwo,
  HomeContainer,
  Article,
  ArticleImage,
  HeroImage,
  // BackgroundImage,
  Title,
  Subtitle,
  Button,
  GridContainer
} from './HomeStyles'

import AppDesign from '../../components/Banners/AppDesignComponent'
import GraphicDesign from '../../components/Banners/GraphicDesignComponent'
import WebDesign from '../../components/Banners/WebDesignComponent'
import AttributeComponent from '../../components/AttributeComponent/Attribute'
import Footer from '../../components/Footer/Footer'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <div className='body'>
        <HomeBackgroundOne src='/assets/shared/desktop/bg-pattern-leaf.svg'/>
        <HomeBackgroundTwo src='/assets/shared/desktop/bg-pattern-leaf.svg'/>
        <HomeContainer>
          <HeroImage src='/assets/home/desktop/bg-pattern-hero-home.svg' alt='' />
          {/* <BackgroundImage /> */}
            <Article>
              <Title>
                <span>Award-winning custom designs and digital branding solutions</span>
              </Title>
              <Subtitle>
                <span>With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services.</span>
              </Subtitle>
              <Link to={'/about'}>
                <Button>learn more</Button>
              </Link>
            </Article>
            <ArticleImage src='/assets/home/desktop/image-hero-phone.png'/>
        </HomeContainer>
        <GridContainer>
          <WebDesign variant='home'/>
          <AppDesign />
          <GraphicDesign />
        </GridContainer>
        <AttributeComponent />
      </div>
      <Footer/>
    </>
  )
}

export default Home
