import styled from "styled-components";


export const WeatherBox = styled.div`
width:100%;
height:100vh;
display:flex;
flex-direction:column;
gap:50px;
justify-content:center;
align-items:center;
`

export const WeatherDiv = styled.div`
 display:flex;
 flex-direction:column;
 justify-content:center;
 align-items:center;
 gap:48px;
 padding-top:51px;
 padding-bottom:52px;
 padding-left:54px;
 padding-right:52px;
 border-radius: 20px;
background:${({bg})=>bg};
box-shadow: 0px 34px 101px 0px rgba(9, 0, 63, 0.38);
`

export const WeatherGradusBox = styled.div`
 display:flex;
 justidy-content:center;
 align-items:center;
 gap:38px;
`
export const WeatherImg = styled.img`
 width:82px;
 height:82px;
 transform: translateY(${({transform})=>transform?"0" :"-70%"});
 transition:0.5s linear;
`
export const WeatherGradusDesc = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:start;
`

export const WeatherGradusNumber = styled.span`
display:flex;
gap:5px;
font-family: Plus Jakarta Sans;
font-size: 64px;
font-style: normal;
color:${({hours})=>hours? "#8497C9" :"#296399"};
font-weight: 700;
line-height: normal;
text-transform: capitalize;
`
export const WeatherGradusText = styled.span`
color: #658CAF;
font-family: Plus Jakarta Sans;
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: normal;
text-transform: capitalize;
`


export const WeatherDescBox = styled.div`
 display:flex;
 justify-contetn:center;
 align-items:center;
 gap:58px;
`
export const WeatherDescBoxItems = styled.div`
 display:flex;
 flex-direction:column;
 justify-content:center;
 align-items:center;
 gap:14px;
`

export const WeatherDescBoxItemsImg = styled.img`
 width:17px;
 height:18px;
`

export const WeatherDescBoxItemsText = styled.span`
color: #668CAF;
font-family: DM Sans;
font-size: 12px;
font-style: normal;
font-weight: 500;
line-height: normal;
`



export const WeatherRoll = styled.span`
 display:inline-block;
 margin-top:10px;
 width:25px;
 height:25px;
 border-radius:50%;
 border:6px solid #91B3D2 ;
 background-color:transparent;
`


export const WeatherForm = styled.form`
 display:flex;
 flex-direction:column;
 justify-contetn:center;
 align-items:center;
 gap:30px;
`


export const WeatherFormInput = styled.input`
 width:300px;
 height:50px;
 border:none;
 border-bottom:1px solid black;
 background-color:transparent;
 font-size:15px;
 padding-top:20px;

 &:focus{
    outline:none;
 }
`

export const WeatherFormSubmit = styled.button`
 width:300px;
 height:50px;
 border:none;
 background-color:black;
 color:white;
 font-size:20px;
 border-radius:10px;
`


export const WeatherTitle = styled.h1``