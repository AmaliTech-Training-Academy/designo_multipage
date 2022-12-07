import styled from 'styled-components'

export const HomeContainer = styled.div`
    position: relative;
    margin-top: 67px;
    width: 100%;
    height: 640px;
    background: #E7816B;
    border-radius: 15px;
    overflow: hidden;

    @media (max-width: 449px), (min-width: 450px) and (max-width: 850px) {
        height: 843px;
    }

    @media (max-width: 449px) {
        position: absolute;
        left: 0;
        right: 0;
        border-radius: 0;
        margin-top: 46px;
    }
`
export const BackgroundImage = styled.div`
    ${backgroundStyles}
    position: absolute;
    top: 0;
    left: 420px;
    right: 0;
    bottom: 0;
    background-image: url("/assets/home/desktop/bg-pattern-hero-home.svg");

    @media (min-width: 450px) and (max-width: 850px) {
        left: 170px;
        right: -100px;
    }
`
export const Article = styled.div`
    position: absolute;
    top: 25%;
    left: 95px;
    width: 540px;
    height: 350px;

    @media (max-width: 449px), (min-width: 450px) and (max-width: 850px) {
        text-align: center;
        top: 60px;
        left: 0;
        right: 0;
        margin: 0 auto;
    }

    @media (min-width: 450px) and (max-width: 850px)  {
        width: 573px;
    }

    @media (max-width: 449px) {
        width: 327px;
    }
`
export const Title = styled.div`
    font-weight: 500;
    font-size: 48px;
    line-height: 48px;
    margin-bottom: 40px;
    color: #FFFFFF;

    @media (min-width: 450px) and (max-width: 850px) {
        margin-bottom: 20px;
    }

    @media (max-width: 449px) {
        font-size: 32px;
        line-height: 36px;
        margin-bottom: 18px;
    }
`
export const Subtitle = styled.div`
    width: 75%;
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
    margin-bottom: 40px;
    color: #FFFFFF;

    @media (max-width: 449px), (min-width: 450px) and (max-width: 850px) {
        margin: 0 auto 20px;
        text-align: center;
    }

    @media (max-width: 449px) {
        width: 327px;
        font-size: 15px;
        line-height: 20px;
    }
`
export const Button = styled.button`
    width: 152px;
    height: 56px;
    border: none;
    border-radius: 5px;
    font-weight: 700;
    font-size: 15px;
    line-height: 22px;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: #333136;

    &:hover {
        background: #FFAD9B;
        color: white;
    }
`
export const ArticleImage = styled.img`
    position: absolute;
    left: 531px;

    @media (max-width: 449px), (min-width: 450px) and (max-width: 850px) {
        top: 285px;
        left: 0;
        right: 0;
        margin: 0 auto;
    }
`
export const GridContainer = styled.div`
    position: relative;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 24px 30px;
    width: 100%;
    height: 640px;
    margin-top: 164px;
`
export const BlackBackground = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgb(0, 0, 0);
    opacity: 0.4;
    border-radius: 15px;
    cursor: pointer;

    &:hover {
        background: rgb(231, 129, 107);
        opacity: 0.8;
    }
`
export const WebDesign = styled.div`
    ${gridItemStyles};
    position: relative;
    grid-row: 1 / span 2;
    height: 100%;
    background: url('/assets/home/desktop/image-web-design-large.jpg');
`
export const AppDesign = styled.div`
    ${gridItemStyles};
    position: relative;
    background: url('/assets/home/desktop/image-app-design.jpg');
`
export const GraphicDesign = styled.div`
    ${gridItemStyles};
    position: relative;
    background: url('/assets/home/desktop/image-graphic-design.jpg');
`
export const Content = styled.div`
    width: 80%;
    text-align: center;
    text-transform: uppercase;
    position: absolute;
    letter-spacing: 4px;
`
export const GridTitle = styled(Title)`
    font-size: 40px;
    margin-bottom: 20px;
`
export const GridSubtitle = styled(Subtitle)`
    width: 100%;

    b {
        color: #E7816B;
        // padding-left: 15px;
    }
`