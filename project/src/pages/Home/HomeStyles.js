import styled from 'styled-components'

// BACKGROUND
export const HomeBackgroundOne = styled.img`
    position: absolute;
    top: 475px;
    left: 0;

    @media (max-width: 950px) {
        display: none;
    }
`
export const HomeBackgroundTwo = styled.img`
    position: absolute;
    top: 1879px;
    right: 0;
    transform: rotate(180deg);

    @media (max-width: 950px) {
        display: none;
    }
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

    @media (max-width: 950px) {
        height: 843px;
    }

    @media (max-width: 449px) {
        border-radius: 0;
        margin-top: 46px;
    }
`
export const HeroImage = styled.img`
    width: 740px;
    position: absolute;
    right: 0;

    @media (max-width: 1300px) {
        width: unset;
    }

    @media (min-width: 449px) and (max-width: 950px) {
        width: unset;
        top: 100px;
        right: -100px;
    }

    @media (max-width: 450px) {
        width: unset;
        right: unset;
        top: 90px;
        left: 0;
    }
`
// export const BackgroundImage = styled.div`
//     ${backgroundStyles}
//     background-size: contain;
//     position: absolute;
//     top: 0;
//     left: 420px;
//     right: 0;
//     bottom: 0;
//     background-image: url("/assets/home/desktop/bg-pattern-hero-home.svg");

//     @media (min-width: 450px) and (max-width: 950px) {
//         left: 170px;
//         right: -100px;
//     }

//     @media (max-width: 449px) {
//         top: -30px;
//         left: 0;
//         right: -250px;
//     }
// `
export const Article = styled.div`
    position: absolute;
    top: 25%;
    left: 95px;
    width: 540px;
    height: 350px;

    @media (max-width: 1300px) {
        top: 15%;
        left: 55px;
    }

    @media (max-width: 950px) {
        text-align: center;
        top: 60px;
        left: 0;
        right: 0;
        margin: 0 auto;
    }

    @media (min-width: 450px) and (max-width: 950px)  {
        width: 573px;
    }

    @media (max-width: 449px) {
        width: 327px;
    }

    @media (max-width: 290px) {
        width: 95%;
    }
`
export const Title = styled.div`
    font-weight: 500;
    font-size: 48px;
    line-height: 48px;
    margin-bottom: 40px;
    color: #FFFFFF;

    @media (min-width: 450px) and (max-width: 950px) {
        margin-bottom: 20px;
    }

    @media (max-width: 449px) {
        font-size: 32px;
        line-height: 36px;
        margin-bottom: 18px;
    }
    @media (max-width: 290px) {
        font-size: 27px;
    }
`
export const Subtitle = styled.div`
    width: 445px;
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
    margin-bottom: 40px;
    color: #FFFFFF;

    @media (max-width: 950px) {
        margin: 0 auto 20px;
        text-align: center;
    }

    @media (max-width: 449px) {
        width: 327px;
        font-size: 15px;
        line-height: 20px;
    }
    @media (max-width: 290px) {
        width: 95%;
        font-size: 12px;
    }
`
export const Button = styled.button`
    background: #FFFFFF;
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
    @media (max-width: 290px) {
        width: 132px;
        height: 46px;
        font-size: 12px;
    }
`
export const ArticleImage = styled.img`
    position: absolute;
    right: -5%;

    @media (max-width: 1300px) {
        right: -150px;
    }

    @media (max-width: 950px) {
        top: 285px;
        left: 0;
        right: 0;
        margin: 0 auto;
    }

    @media (max-width: 449px) {
        left: -120px;
    }

    @media (max-width: 290px) {
            width: 523px;
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

    @media (max-width: 950px) {
        grid-template-columns: repeat(1, minmax(0, 1fr));
    }

    @media (min-width: 450px) and (max-width: 950px) {
        margin-top: 120px;
        height: 649px;
    }

    @media (max-width: 449px) {
        height: 798px;
        width: 327px;
        margin: 120px auto 0;
    }

    @media (max-width: 290px) {
        width: 90%;
    }
`