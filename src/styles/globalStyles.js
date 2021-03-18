import { createGlobalStyle } from 'styled-components';
import windsorWoff from '../fonts/windsor.woff'
import windsorWoff2 from '../fonts/windsor.woff2'

const GlobalStyle = createGlobalStyle`
//fonts

@font-face{
  font-family: windsor;
  src: url(${windsorWoff});
  src: url(${windsorWoff2});
  font-weight: normal;
}

html {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  outline-offset: -1px;
}
*, *:before, *:after {
  -webkit-box-sizing: inherit;
  -moz-box-sizing: inherit;
  box-sizing: inherit;
  outline-offset: -1px;
  }

a{
  text-decoration: none;
  color: inherit;
}

body{
  margin: 0;
}

:root{
  --Margin: 30px;

  @media(max-width: 900px){
    --Margin: 20px;
  }
}

html, body, ul{
  margin: 0;
  padding: 0;
}

ul, li{
  text-decoration: none;
  list-style: none;
}

.fixed{
  position: fixed;
  width: calc(100% - var(--Margin) * 2);
  z-index: 13;
}

.noOutline{
  outline: none;
  div{
    outline: none;
  }
}
`

export default GlobalStyle
