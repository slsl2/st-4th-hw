import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset}
    body {
        line-height: 1.5;
        font-size: 20px;
    }
`;

export default GlobalStyle;
