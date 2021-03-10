import {createGlobalStyle} from 'styled-components';
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
`

export default GlobalStyle
