import Styled from 'styled-components'

export const Nav = Styled.nav`
    width: 100%;
    height: 30px;
    margin-top: 64px;
    display: flex;
    justify-content: space-between;
`
export const Logo = Styled.img`
    width: 196px;
    cursor: pointer;
`
export const NavLinks = Styled.div`
    text-transform: uppercase;
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    span {
        position: relative;
        cursor: pointer;

        &:after {
            content: "";
            height: 1px;
            width: 100%;
            background: rgb(51, 49, 54);
            position: absolute;
            left: 0;
            right: 0;
            bottom: 3px;
            display: none;
            transform: scaleX(0);
            transform-origin: left center;
            transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        }

        &:hover {
            :after {
                transform: scaleX(1);
                display: block;
            }
        }

        // @media (min-width: 451px) and (max-width: 769px) {
        //     font-size: 20px;
        // }

        @media (max-width: 450px) {
            display: none;
        }
    }

    @media (min-width: 451px) and (max-width: 950px) {
        width: 370px;
    }
`
export const Bars = Styled.img`
    width: 40px;
    height: 70%;
    display: none;

    @media (max-width: 450px) {
        display: block;
    }
`