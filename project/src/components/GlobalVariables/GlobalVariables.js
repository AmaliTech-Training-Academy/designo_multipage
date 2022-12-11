export const center = `
    position: relative;

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
    width: 100%;
    height: 50%;
    ${backgroundStyles}
    background-size: contain;

    @media (max-width: 449px), (min-width: 450px) and (max-width: 850px)  {
        position: relative;
        height: 110%;
    }
`