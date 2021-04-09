import styled, {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Source Sans Pro', sans-serif;
}
`;

export const Container = styled.div`
    z-index: 1;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding-right: 50px;
    padding-left: 50px;

    @media screen and (max-width: 991px) {
        padding-right: 30px;
        padding-left: 30px;
    }
`;

export const Button = styled.button`
    border-radius: 4px;
    background: ${({orange}) => (orange ? '#F2994A' : '#2a6973')};
    white-space: nowrap;
    padding: ${({big}) => (big ? '12px 64px' : '10px 20px')};
    color: #fff;
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: none;
    cursor: pointer;

    &:hover {
        transition: all 0.3s ease-out;        
        background: ${({orange}) => (orange ? '#2a6973' : '#F2994A')};
        border-bottom: 2px solid black;
    }

    @media screen and (max-width: 960px) {
        width: 100%;
    }
`;

export default GlobalStyle;