import styled from 'styled-components'

import {mobile} from '../../responsive'
export const Container=styled.div`
width: 917px;
height: 308px;
${mobile({ height: "90px" },{width:"150px"})};


justify-content: space-between;
margin-top: 120px;
display: flex;
flex-direction: column;
background-color: #FFFFFF;
`
export const Total=styled.div`
display: flex;
flex-direction: column;

`
export const Wrapper=styled.div`
  display: flex;
  background-color: beige;
  width: 90%;
  height: 180px;

justify-content: space-between;
text-align: center;
justify-content: space-between;
margin: 0 auto;
`
export const USER=styled.div`
display: flex;
`
export const Group=styled.img`
width: 110px;
height: 110px;
  margin: 0 20px;
`
export const Group2=styled.img`
width: 20px;
height: 20px;
  margin: 0 10px;
  margin-top: 5px;
`
export const Subtitle=styled.h3`
`
export const Title3=styled.h3`
  font-size: 40px;
  margin-right: 10px;
`
export const Title4=styled.h3`
  display: flex;
`
export const Title =styled.h1`
  font-weight: 100;
  font-size: 60px;
  margin-top: 20px;
`
export const Title2 =styled.h1`
  margin-right: 20px;
  margin-top: 20px;
`
export const Button=styled.button`
width: 130px;
height: 40px;
color: white;
background-color: #056B8D;
border: none;
cursor: pointer;
border-radius: 20px;
text-align: center;
justify-content: end;
float: right;

`
export const Local=styled.div`
float: right;
margin-right: 20px;
margin-bottom: 10px;
`