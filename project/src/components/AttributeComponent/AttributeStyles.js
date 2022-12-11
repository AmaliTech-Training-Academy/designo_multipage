import styled from "styled-components";
import {
    smallCircleBackground
} from "../GlobalVariables/GlobalVariables"

export const Container = styled.div`
    height: 412px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 160px;

    @media (max-width: 449px), (min-width: 450px) and (max-width: 850px) {
        flex-direction: column;
        height: 670px;
    }

    @media (max-width: 449px) {
        height: 1396px;
        margin-top: 120px;
    }
`

export const Attribute = styled.div`
    position: relative;
    width: 350px;

    img {
        position: absolute;
        left: 0;
        right: 0;
        margin: 0 auto;
    }

    @media (min-width: 450px) and (max-width: 850px) {
        display: flex;
        width: 100%;
    }
`
export const AttributeImage = styled.div`
    ${smallCircleBackground}
    transform: ${({rotate}) => rotate === 'resourceful' ? 'rotate(-90deg)' : rotate === 'friendly' ? 'rotate(90deg)' : 'unset'};

    img {
        transform: ${({rotate}) => rotate === 'resourceful' ? 'rotate(90deg)' : rotate === 'friendly' ? 'rotate(-90deg)' : 'unset'};
    }
`
export const AttributeDescription = styled.div`
    text-align: center;
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

    @media (min-width: 450px) and (max-width: 850px)  {
        text-align: unset;
    }
`