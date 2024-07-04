// Style your components here

import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 30px;
`

export const Heading = styled.h1`
  color: #35469c;
  font-family: 'Roboto';
  font-size: 30px;
  font-weight: bold;
  text-align: center;
`
export const MemeAndFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row-reverse;
    padding-left: 0px;
    width: 85%;
  }
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    margin-left: -100px;
  }
`

export const CustomLabel = styled.label`
  color: #7e858e;
  font-family: 'Roboto';
  font-size: 16px;
  margin-bottom: 5px;
  margin-top: 20px;
`

export const CustomInput = styled.input`
  color: #7e858e;
  font-family: 'Roboto';
  font-size: 16px;
  border: 1px solid #d7dfe9;
  border-radius: 6px;
  padding: 10px 10px;
  outline: none;
`

export const CustomSelect = styled.select`
  color: #7e858e;
  border: 1px solid #d7dfe9;
  border-radius: 6px;
  outline: none;
  font-family: 'Roboto';
  padding: 10px 10px;
  outline: none;
`

export const CustomOption = styled.option`
  font-size: 16px;
`

export const CustomButton = styled.button`
  color: #ffffff;
  background-color: #0b69ff;
  font-family: 'Roboto';
  font-size: 16px;
  border: 1px solid #0b69ff;
  border-radius: 6px;
  cursor: pointer;
  outline: none;
  margin-top: 30px;
  padding: 10px;
  width: 40%;
`

export const MemeContainer = styled.div`
  background-image: url(${props => props.backgroundImage});
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-content: space-between;
  height: 70%;
`

export const MemeText = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: ${props => props.activeOption}px;
  font-weight: 500;
`
