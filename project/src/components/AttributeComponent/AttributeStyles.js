import styled from "styled-components";
import {
    smallCircleBackground
} from "../GlobalVariables/GlobalVariables"

export const Container = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 160px;

    @media (max-width: 950px) {
        flex-direction: column;
        height: 670px;
    }

    @media (max-width: 449px) {
        height: 1396px;
        width: 90%;
        margin: 120px auto 0;
    }
`

export const Attribute = styled.div`
    /* background: yellow; */
    position: relative;
    width: 350px;
    height: 412px;

    img {
        position: absolute;
        left: 0;
        right: 0;
        margin: 0 auto;
    }

    @media (min-width: 450px) and (max-width: 950px) {
        display: flex;
        width: 100%;
    }
    @media (max-width: 449px) {
        width: 100%;
    }
`
export const AttributeImage = styled.div`
    /* background: green; */
    ${smallCircleBackground}
    transform: ${({rotate}) => rotate === 'resourceful' ? 'rotate(-90deg)' : rotate === 'friendly' ? 'rotate(90deg)' : 'unset'};

    img {
        transform: ${({rotate}) => rotate === 'resourceful' ? 'rotate(90deg)' : rotate === 'friendly' ? 'rotate(-90deg)' : 'unset'};
    }
`
export const AttributeDescription = styled.div`
    position: absolute;
    bottom: 0;
    text-align: center;
    /* background: red; */
    color: #333136;
    margin-top: 48px;

    span {
        font-weight: 700;
        font-size: 20px;
        line-height: 26px;
        letter-spacing: 5px;
    }

    p {
        font-weight: 550;
        font-size: 16px;
        line-height: 26px;
        margin-top: 32px;
    }

    @media (min-width: 450px) and (max-width: 950px)  {
        text-align: unset;
        bottom: unset;
        right: 0;
        width: 439px;
    }

    /* @media (max-width: 449px) {
        width: 327px;
    } */
`