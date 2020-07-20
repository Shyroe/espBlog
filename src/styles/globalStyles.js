import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    *,::after,::before {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    ::-webkit-scrollbar {     
               
        /* background-color: '#f4f4f4'; */
        background-color: green;        
    }

    ::-webkit-scrollbar-track {
        background: #dad7d7;
        /* background: goldenrod; */
    }

    ::-webkit-scrollbar-thumb {        
        background-color: rgba(0,0,0, 0.19);
        width: .8rem;
        height: 2rem;
        border-radius: 10rem;
    }    

    html {
        /* font-size: 62.5%; */
    }    

`

export default GlobalStyle
