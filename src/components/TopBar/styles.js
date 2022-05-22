import styled from 'styled-components'
import {mobile} from '../../responsive'
export const Container=styled.div`
width: 100%;
height: 70px;
${mobile({ height: "50px" })};
display: flex;
background-color: #fff;
justify-content: space-between;
`
export const Perfil=styled.div`
display: flex;
`
export const Logo=styled.div`
margin-left: 10px;
`
export const Photo=styled.img`
width: 40px;
height: 40px;
margin-right: 10px;
margin-top: 10px;

`
export const User=styled.div`
margin-right: 10px;
justify-content: center;
align-items: center;
margin-top: 10px;
`
export const Title2=styled.h2`
font-weight: 100;
`