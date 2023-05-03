import styled, { css } from "styled-components";
/* #FDFC47
#24FE41 */
const gradient = degs => css`
    background:
        linear-gradient(
            ${degs || 130}deg,
            #fdfc47 0%,
            green 100%
         );
`;

export const Card = styled.div`
    overflow: hidden;
    width: 300px;
    padding: 1rem;
    border-radius: 0.5rem;
    ${gradient()};
    box-shadow: 0 2.4px 3.8px .3px rgba(0, 0, 0, 0.25),
                0 0.9px 4.6px 0.8px rgba(0, 0, 0, 0.25),
                0 1.1px 1.5px -0.7px rgba(0, 0, 0, 0.25);
    img {
        width: 100%;
        border-radius: 0.5rem
    }
`;

