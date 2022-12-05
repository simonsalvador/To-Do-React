import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Space Mono", monospace;
}
    body {
        user-select: none;
        background: rgba(156,131,249,1) ;
        font-family: "Space Mono", monospace;
        -webkit-tap-highlight-color: transparent;
        color:#FFFFFF;
    }
    img{
        max-width: 100%;
        height: auto;
    }
    h1{
      margin-block: 40px;
      display: flex;
      justify-content: center;
      align-items:center;
      color: #050505;
    }
`;

export default GlobalStyle;
