import { createGlobalStyle } from 'styled-components';
import '@fontsource/jura';

const globalStyles = createGlobalStyle`
    * {
        font-family: "Jura", sans-serif;
    }
    body {
        max-width: 393px;
        margin: 0 auto;
        background-color: #000000;
    }
    .container {
        display: flex;
        flex-direction: column;
        gap: 24px;
        padding: 24px;
        min-height: 100vh;
        align-items: center;
        background-color: #ffffff;
    }
`;
export default globalStyles

