import styled from "styled-components";
import {
    HomeContainer,
    BackgroundImage ,
    Subtitle,
    Title,
  } from '../Home/HomeStyles'

export const TitleContainer = styled(HomeContainer)`
    height: 256px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const WebBackgroundImage = styled(BackgroundImage)`
  background-image: url('/assets/web-design/desktop/bg-pattern-intro-web.svg');
  background-size: cover;
  left: 250px;
  
  @media (min-width: 449px) and (max-width: 850px) {
    left: 40px;
  }
`
export const WebTitle = styled(Title)`
`
export const WebSubtitle = styled(Subtitle)`
  width: 55%;
  margin: 0 auto;

  @media (max-width: 449px), (min-width: 450px) and (max-width: 850px) {
    width: 95%;
  }
`
export const Content = styled.div`
  width: 60%;
`
export const CardContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  column-gap: 30px;
  row-gap: 32px;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  margin-top: 160px;

  @media (min-width: 450px) and (max-width: 850px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
    margin-top: 120px;
  }

  @media (max-width: 449px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
    margin-top: 412px;
  }
`
export const Card = styled.div`
  width: 100%;
  height: 478px;
  border-radius: 15px;

  @media (min-width: 450px) and (max-width: 850px) {
    width: 100%;
    height: 310px;
    border-radius: unset;
    display: flex;
  }

  @media (max-width: 449px) {
    width: 100%;
  }
`
export const CardImage = styled.div`
  width: 100%;
  height: 320px;

   img {
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    width: 100%;
    height: 100%;
    object-fit: fill;

    @media (min-width: 450px) and (max-width: 850px) {
      border-top-left-radius: 15px;
      border-top-right-radius: unset;
      border-bottom-left-radius: 15px;
    }
  }

  @media (min-width: 450px) and (max-width: 850px) {
    height: 100%;
  }
`
export const CardArticle =styled.div`
  background: #FDF3F0;
  width: 100%;
  height: 158px;
  text-align: center;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  cursor: pointer;

  span {
    display: block;
    font-weight: 600;
    font-size: 20px;
    line-height: 26px;
    letter-spacing: 5px;
    color: #E7816B;
    padding-top: 32px;
    padding-bottom: 16px;

    @media (min-width: 450px) and (max-width: 850px) {
      padding-top: 0;
    }
  }
  
  p {
    margin: 0 auto;
    width: 80%;
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;
    color: #333136;
  }

  &:hover {
    background: #E7816B;

    span, p{
      color: white;
    }
  }

  @media (min-width: 450px) and (max-width: 850px)  {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    border-bottom-left-radius: unset;
    border-bottom-right-radius: 15px;
    border-top-right-radius: 15px;
  }
`