import styled from 'styled-components'
import {mobile} from '../../responsive'
export const Container=styled.div`
width: 817px;
height: 200px;
${mobile({ height: "50px" })};
display: flex;
padding: 10px;
margin: 0 auto;
flex-direction: column;
-webkit-box-shadow: 0px 9px 16px -1px #000000; 
box-shadow: 0px 9px 16px -1px #000000;
position: relative;
`
export const Local=styled.div`
display: flex;
`
export const Icon=styled.img`
margin: 0 10px;
`

export const Title=styled.h3 `

`
export const Table =styled.table`

`
export const Button=styled.button`
cursor: pointer;
`
export const Button2=styled.button`
cursor: pointer;
`
export const TR=styled.tr`
border-bottom: 1px solid #000;
width: 10%;
position: relative;
`
export const TH=styled.th`
border-bottom: 1px solid #000;
padding:5px;
`
export const LI=styled.li`
text-decoration: none;
list-style: none;
`