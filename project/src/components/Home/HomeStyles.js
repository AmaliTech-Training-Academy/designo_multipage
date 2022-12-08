import styled from 'styled-components'

const backgroundStyles = `
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
`
const gridItemStyles = `
    ${backgroundStyles};
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    border-radius: 15px;
`
// TOP CONTENT

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
    background-size: contain;
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

    @media (max-width: 449px) {
        top: -30px;
        left: 0;
        right: -250px;
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
    cursor: pointer;

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

    @media (max-width: 449px) {
        left: -120px;
    }
`
// MIDDLE CONTENT

export const GridContainer = styled.div`
    position: relative;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 24px 30px;
    width: 100%;
    height: 640px;
    margin-top: 164px;

    @media (max-width: 449px), (min-width: 450px) and (max-width: 850px) {
        grid-template-columns: repeat(1, minmax(0, 1fr));
    }

    @media (min-width: 450px) and (max-width: 850px) {
        margin-top: 120px;
        height: 649px;
    }

    @media (max-width: 449px) {
        margin-top: 963px;
        height: 798px;
    }
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
    background-image: url('/assets/home/desktop/image-web-design-large.jpg');

    @media (min-width: 450px) and (max-width: 850px) {
        background-image: url('/assets/home/tablet/image-web-design.jpg');
        grid-row: unset;
    }

    @media (max-width: 449px) {
        background-image: url('/assets/home/mobile/image-web-design.jpg');
        grid-row: unset; 
    }
`
export const AppDesign = styled.div`
    ${gridItemStyles};
    position: relative;
    background-image: url('/assets/home/desktop/image-app-design.jpg');

    @media (min-width: 450px) and (max-width: 850px) {
        background-image: url('/assets/home/tablet/image-app-design.jpg');
    }

    @media (max-width: 449px) {
        background-image: url('/assets/home/mobile/image-app-design.jpg');
    }
`
export const GraphicDesign = styled.div`
    ${gridItemStyles};
    position: relative;
    background-image: url('/assets/home/desktop/image-graphic-design.jpg');

    @media (min-width: 450px) and (max-width: 850px) {
        background-image: url('/assets/home/tablet/image-graphic-design.jpg');
    }

    @media (max-width: 449px) {
        background-image: url('/assets/home/mobile/image-graphic-design.jpg');
    }
`
export const Content = styled.div`
    width: 80%;
    text-align: center;
    text-transform: uppercase;
    position: absolute;
    letter-spacing: 4px;
    cursor: pointer;
`
export const GridTitle = styled(Title)`
    font-size: 40px;
    margin-bottom: 20px;

    @media (max-width: 449px) {
        font-size: 28px;
        line-height: 36px;
        letter-spacing: 1.6px;
    }
`
export const GridSubtitle = styled(Subtitle)`
    width: 100%;

    b {
        color: #E7816B;
        // padding-left: 15px;
    }

    @media (max-width: 449px) {
        font-size: 15px;
        line-height: 22px;
        letter-spacing: 5px;
    }
`
//BOTTOM CONTENT

export const AttributeContainer = styled.div`
    height: 412px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 160px;
`
export const Passionate = styled.div`
    width: 350px;
`
export const PassionateImage = styled.img`
`
export const Description = styled.div`
`
export const Resourceful = styled.div`
    width: 350px;
    
`
export const ResourcefulImage = styled.img`
    object-fit: contain;
`
export const Friendly = styled.div`
    width: 350px;
    background: blue;
    margin: 0 auto;
`
export const FriendlyImage = styled.img`
`
