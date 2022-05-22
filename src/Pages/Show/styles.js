import styled from 'styled-components'

import {mobile} from '../../responsive'
export const Container=styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin: 0 auto;
`

export const Container2=styled.div`
border: 1px solid  #5555;
padding: 10px;
margin: 20px 0;
display: flex;
${mobile({ height: "90px" },{width:"80px"})};
width: 817px;
height: 200px;
-webkit-box-shadow: 0px 9px 16px -1px #000000; 
box-shadow: 0px 9px 16px -1px #000000;
flex-direction: column;
`
export const Tittle=styled.h3`

`
export const Text=styled.p`
color: #9D9D9D;
`
export const FORM=styled.form`
width: 100%;
  display: flex;
  flex-direction: column;

`
export const INPUT=styled.input`
width: 90%;
padding: 5px;
color: #9D9D9D;
`
export const Desk=styled.div`
width: 80%;

`
export const Local=styled.div`
display: flex;
justify-content: space-between;
`
export const INPUT2=styled.input`
width: 80%;
padding: 5px;
color: #9D9D9D;
`
export const SELECT=styled.select`
width: 80%;
padding: 5px;
`
export const SELECT2=styled.select`
width: 90%;
padding: 5px;
`
export const Button2=styled.button`
  margin: 0 10px;
  border: none;
  background-color: #CCCCCC;
  cursor: pointer;
`
export const Button=styled.button`
  margin: 0 10px;
  border: none;
  background-color: #056B8D;
  color: #FFF;
  width: 100px;
  cursor: pointer;
`
export const Local2=styled.div`
display: flex;
justify-content: flex-end;
margin-top: 10px;
align-items: center;
`