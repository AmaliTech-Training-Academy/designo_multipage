export const center = `
    position: relative;

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
`
export const backgroundStyles = `
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
`
export const gridItemStyles = `
    ${backgroundStyles};
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    border-radius: 15px;
`
export const smallCircleBackground = `
    background-image: url("assets/shared/desktop/bg-pattern-small-circle.svg");
    width: 202px;
    height: 202px;
    ${backgroundStyles}
    background-size: contain;
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;

    @media (min-width: 450px) and (max-width: 950px)  {
        margin: unset;
        height: 100%
    }
`