import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root{
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
  }

  body{ 
    color: #fff;
    background-color: #222;
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  max-width: 800px;

  margin: 0 auto;
  padding: 12px;
`;
