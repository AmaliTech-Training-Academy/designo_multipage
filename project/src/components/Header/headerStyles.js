import styled from 'styled-components'

export const Nav = styled.nav`
    width: 100%;
    height: 30px;
    margin-top: 64px;
    display: flex;
    justify-content: space-between;
`
export const Logo = styled.img`
    width: 196px;
    cursor: pointer;
`
export const NavLinks = styled.div`
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

        @media (max-width: 450px) {
            display: none;
        }
    }

    @media (min-width: 451px) and (max-width: 950px) {
        width: 370px;
    }
`
export const Bars = styled.div`
    width: 24px;
    height: 20px;
    display: none;
    z-index: 2;

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }

    @media (max-width: 450px) {
        display: block;
    }
`
export const Close = styled(Bars)`
`