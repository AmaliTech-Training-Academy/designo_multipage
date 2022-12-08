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
  BlackBackground,
  WebDesign,
  AppDesign,
  GraphicDesign,
  Content,
  GridTitle,
  GridSubtitle,
  AttributeContainer,
  Passionate,
  PassionateImage,
  Description,
  Resourceful,
  ResourcefulImage,
  Friendly,
  FriendlyImage,
} from './HomeStyles'



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
      <AttributeContainer>
        <Passionate>
          <PassionateImage>
            <img src="/assets/home/desktop/illustration-passionate.svg" alt=''/>
          </PassionateImage>
          <Description>
            <span>PASSIONATE</span>
            <p>Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.</p>
          </Description>
        </Passionate>
        <Resourceful>
          <ResourcefulImage>
            <img src="/assets/home/desktop/illustration-resourceful.svg" alt=''/>
          </ResourcefulImage>
          <Description>
            <span>RESOURCEFUL</span>
            <p>Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs.</p>
          </Description>
        </Resourceful>
        <Friendly>
          <FriendlyImage>
            <img src="/assets/home/desktop/illustration-friendly.svg" alt=''/>
          </FriendlyImage>
          <Description>
            <span>FRIENDLY</span>
            <p> We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.</p>
          </Description>
        </Friendly>
      </AttributeContainer>
    </>
  )
}

export default Home
