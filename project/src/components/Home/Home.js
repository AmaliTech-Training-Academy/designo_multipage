import React from 'react'
import {
  HomeContainer,
  Article,
  ArticleImage,
  BackgroundImage,
  Title,
  Subtitle,
  Button,
  GridContainer,
  BlackBackground,
  WebDesign,
  AppDesign,
  GraphicDesign,
  Content,
  GridTitle,
  GridSubtitle
} from './HomeStyles'

function Home() {
  return (
    <>
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
        <WebDesign>
          <BlackBackground />
          <Content>
            <GridTitle>
              <span>web design</span>
            </GridTitle>
            <GridSubtitle>
              <span>view project <b>></b></span>
            </GridSubtitle>
          </Content>
        </WebDesign>
        <AppDesign>
          <BlackBackground />
          <Content>
            <GridTitle>
              <span>app design</span>
            </GridTitle>
            <GridSubtitle>
              <span>view project <b>></b></span>
            </GridSubtitle>
          </Content>
        </AppDesign>
        <GraphicDesign>
          <BlackBackground />
          <Content>
            <GridTitle>
              <span>graphic design</span>
            </GridTitle>
            <GridSubtitle>
              <span>view project <b>></b></span>
            </GridSubtitle>
          </Content>
        </GraphicDesign>
      </GridContainer>
    </>
  )
}

export default Home
