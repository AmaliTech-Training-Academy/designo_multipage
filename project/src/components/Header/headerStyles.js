import styled from 'styled-components'

export const Nav = styled.nav`
    width: 100%;
    height: 30px;
    margin-top: ${(props) => props.footer === 'footer' ? '0' : '64px'};
    margin-bottom: ${(props) => props.footer === 'footer' ? '40px' : '0'};
    display: flex;
    justify-content: space-between;

    @media (max-width: 449px) {
        width: 327px;
        margin: 64px auto 0;
        flex-direction: ${(props) => props.footer === 'footer' ? 'column' : 'unset'};
        gap: ${(props) => props.footer === 'footer' ? '32px' : 'unset'};
    }

    a {
        @media (max-width: 450px) {
            display: flex;
            justify-content: ${(props) => props.footer === 'footer' ? 'center' : 'unset'};
        }
    }
`
export const Logo = styled.img`
    width: 196px;
    cursor: pointer;
    content: url(${(props) => props.footer === 'footer' ? "/assets/shared/desktop/logo-light.png" : "/assets/shared/desktop/logo-dark.png"});
`
export const Line = styled.div`
    height: 2px;
    width: 100%;
    background: #ffffff;
    opacity: 0.1;
    display: none;
    @media (max-width: 449px) {
        display: ${(props) => props.footer === 'footer' ? 'block' : 'none'};
    }
`
export const NavLinks = styled.div`
    text-transform: uppercase;
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    a{
        position: relative;
        color: ${(props) => props.footer === 'footer' ? '#ffffff' : '#333136'};
        text-decoration: none;
        cursor: pointer;

        &:after {
            content: "";
            height: 1px;
            width: 100%;
            background: ${(props) => props.footer === 'footer' ? '#ffffff' : '#333136'};
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
        @media (max-width: 449px) {
            display: ${(props) => props.footer === 'footer' ? 'block' : 'none'};
        }
    }

    @media (min-width: 451px) and (max-width: 990px) {
        width: 60%;
    }

    @media (max-width: 449px) {
        flex-direction: ${(props) => props.footer === 'footer' ? 'column' : 'unset'};
        width: ${(props) => props.footer === 'footer' ? '100%' : '40%'};
        gap: ${(props) => props.footer === 'footer' ? '30px' : 'unset'};
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
        display: ${(props) => props.footer === 'footer' ? 'none' : 'block'};
    }
`
export const Close = styled(Bars)`
    @media (max-width: 450px) {
        display: ${(props) => props.footer === 'footer' ? 'none' : 'block'};
    }
`