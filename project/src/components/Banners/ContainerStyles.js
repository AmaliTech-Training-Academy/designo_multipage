import styled from "styled-components"
import { gridItemStyles } from '../GlobalVariables/GlobalVariables'

export const AppContainer = styled.div`
${gridItemStyles};
position: relative;
width: 100%;
height: 100%;
background-image: url('/assets/home/desktop/image-app-design.jpg');
background-size: cover;

    a {
        text-decoration: none;
        border-radius: inherit;
    }

@media (min-width: 450px) and (max-width: 850px) {
    background-image: url('/assets/home/tablet/image-app-design.jpg');
}

@media (max-width: 449px) {
    width: 327px;
    /* margin: 120px auto 0; */
    background-image: url('/assets/home/mobile/image-app-design.jpg');
}
`
export const GraphicContainer = styled(AppContainer)`
    background-image: url('/assets/home/desktop/image-graphic-design.jpg');

    @media (min-width: 450px) and (max-width: 850px) {
        background-image: url('/assets/home/tablet/image-graphic-design.jpg');
    }

    @media (max-width: 449px) {
        background-image: url('/assets/home/mobile/image-graphic-design.jpg');
    }
`
export const WebContainer = styled(AppContainer)`
    background-image: url('/assets/home/desktop/image-Web-design-large.jpg');
    grid-row: ${({variant}) => (variant === 'home' ? '1 / span 2' : 'unset')};

    @media (max-width: 449px), (min-width: 450px) and (max-width: 850px) {
        grid-row: unset;
    }

    @media (min-width: 450px) and (max-width: 850px) {
        background-image: url('/assets/home/tablet/image-Web-design.jpg');
    }

    @media (max-width: 449px) {
        background-image: url('/assets/home/mobile/image-Web-design.jpg');
    }
`
export const Content = styled.div`
    background: rgba(0, 0, 0, 0.4);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    color: #FFFFFF;
    border-radius: inherit;
    // opacity: 0.4;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    cursor: pointer;

    span {
        font-size: 40px;
        margin-bottom: 24px;
        line-height: 48px;

        @media (max-width: 449px) {
            font-size: 28px;
            line-height: 36px;
            letter-spacing: 1.6px;
    }
    }

    p {
        font-weight: 400;
        font-size: 16px;
        line-height: 26px;
        letter-spacing: 5px;

        b {
            color: #E7816B;
        }
    }

    &:hover {
        background:  rgba(231, 129, 107, 0.75)
    }
`