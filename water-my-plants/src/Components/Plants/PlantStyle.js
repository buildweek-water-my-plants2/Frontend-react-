import styled from 'styled-components'
import { athensGray, shark, noPea, amazon, trout } from '../../Styles/colors'

export const DashDiv = styled.div`
    // border: 1px solid red;
    margin-top: 1%;
    height: 86.8vh;
    background-color: ${athensGray}
`
export const DashHeader = styled.div`
    // border: 1px solid red;
    // margin-top: 1%;
    // background-color: white;
`
export const H3 = styled.h3`
    // border: 1px solid red;
    padding: 1% 3.5% 0;
    font-size: 1.8rem;
    color: ${trout}
    // background-color: white;
`
export const Plant = styled.div`
    // border: 1px solid green;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;


`
export const AddContainer = styled.div`
    // border: 1px solid ${amazon};
    border-radius: 5px;
    width: 20%;
    height: 55vh;
    background-color: white;
    // margin: 1% 0 5% 3%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const Img = styled.img`
    padding-bottom: 5%;
`

export const Button = styled.button`
    width: 70%;
    height: 48px;
    border: none;
    background-color: ${amazon};
    font-size: 1.2rem;
    color: ${noPea};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px
`

export const PlantsList = styled.div`
    // border: 1px solid red;
    width: 70%;
    height: 55vh;
    background-color: white;
    border-radius: 5px;
`