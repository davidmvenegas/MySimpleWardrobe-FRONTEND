import { css } from "styled-components";

export const medium = (i) => {
    return css`
        @media (max-width: 1050px) {
            ${i}
        }
    `
}
export const small = (i) => {
    return css`
        @media (max-width: 850px) {
            ${i}
        }
    `
}
export const mobile = (i) => {
    return css`
        @media only screen and (max-width: 480px) {
            ${i}
        }
    `
}

// @media (max-width: 1050px) {
// }
// @media (max-width: 850px) {
// }
// @media (max-width: 480px) {
// }