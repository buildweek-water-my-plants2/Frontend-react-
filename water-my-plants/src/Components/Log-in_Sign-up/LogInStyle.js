import styled from "styled-components";
import { noPea } from "../../Styles/colors";
import { bone } from "../../Styles/colors";
import { trout } from "../../Styles/colors";
import { athensGray } from "../../Styles/colors";
import { amazon } from "../../Styles/colors";


export const LogInStyle = styled.form`
    width: 30%;
    margin: 5% auto;
    background-color: ${noPea}
    
    
`

export const LogInHeader = styled.div`
    border-bottom: 3px solid ${bone};   
    background-color: ${athensGray};
    display: flex;
    justify-content: space-around;
    color: ${trout}
`

export const H3one = styled.h3`
    padding: 1%;
    width: 70px;
    text-align: center;
    border-bottom: 2px solid ${amazon}
`
export const H3two = styled.h3`
    padding: 1%;
    width: 70px;
    text-align: center;
    :hover{
        color: ${amazon};
        border-bottom: 2px solid ${amazon}
    }
`

export const Container = styled.div`
    width: 80%;
    margin: 0 auto;
    height: 55vh;
`

export const Containerh3 = styled.h3`
text-align: center;
font-family: poppins;
font-size: 1.8rem;
`
export const Containerp = styled.p`
text-align: center;
font-family: poppins;
font-size: 1.2rem;
`
export const InputField = styled.div`
// border: 1px solid red;
display: flex;
flex-direction: column;
justify-content: space-around;
width: 90%;
height: 30vh;
margin:0 auto;
padding: 0 0 5% 0;
`

export const Label = styled.label`
display: flex;
flex-direction: column;
justify-content: space-evenly;
font-family: poppins;
`

export const Input = styled.input`
border: 1px solid ${amazon};
height: 3vh;
padding: 2%;
border-radius: 5px;
`

export const Button = styled.button`
height: 48px;
border: none;
background-color: ${amazon};
font-size: 1.2rem;
color: ${noPea};
display: flex;
justify-content: center;
align-items: center;
border-radius: 5px;
`

export const Error = styled.p`
font-size: .8rem;
color: red;
`
// Sign up style
export const Container2 = styled.div`
    width: 80%;
    margin: 0 auto;
    height: 65vh;
`
export const InputField2 = styled.div`
// border: 1px solid red;
display: flex;
flex-direction: column;
justify-content: space-around;
width: 90%;
height: 40vh;
margin:0 auto;
padding: 0 0 5% 0;
`
export const H3one2 = styled.h3`
    padding: 1%;
    width: 70px;
    text-align: center;
    :hover{
        color: ${amazon};
        border-bottom: 2px solid ${amazon}
    }
`
export const H3two2 = styled.h3`
    padding: 1%;
    width: 70px;
    text-align: center;
    border-bottom: 2px solid ${amazon}
`