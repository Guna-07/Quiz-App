
import styled, { createGlobalStyle } from 'styled-components';
import BGImage from './images/image1.jpg';

export const GlobalStyle = createGlobalStyle`
   html {
    height: 100%;
   }

   body{
    background-image: url(${BGImage});
    background-size: cover;
    margin: 0;
    padding: 0 20px;
    dispaly: flex;
    justify-content: center;
   }

   *
   {
    box-sizing: border-box;
    font-family: 'Catamaran', sans-serif;
   }

`