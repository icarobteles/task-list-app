import { keyframes } from "styled-components";

export const Show = keyframes`
    to {
        opacity: 100%;
    }

    from {
        opacity: 0%;
    }
`;

export const Move = keyframes`
    to {
        opacity: 100%;
        transform: scaleX(1);
    }

    from {
        opacity: 0%;
        transform: scaleX(-1);
    }
`;
