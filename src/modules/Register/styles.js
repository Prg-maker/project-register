import styled from "styled-components"

export const Wrapper = styled.div`
  background-color: #ddd;
  height: 100vh;
  display:flex;
  justify-content: center;
  align-items: center;
`

export const Content = styled.div`
  height: 600px;
  width: 400px;
  background-color: #fff ;
  border-radius: 10px;
`

export const FormAction = styled.form`
  display: flex;
  flex-direction: column;
  border: none;
  padding: 40px;
`

export const Input = styled.input`
  margin-bottom: 15px ;
  outline: none;
  border: 2px solid rgba(0, 0, 0, 0.35);
  border-radius: 8px;
  padding: 10px;
  &:focus {
    border: 2px solid  #0185FE;
  }
  &::placeholder{
    font-weight: 600;
    font-size: 16px;
  }

`
export const Label = styled.label`
  font-size: 16px;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.7);
  padding-bottom: 5px;
`


export const Button = styled.button`
  background: #0085FF;
  border: none;
  height: 52px;
  margin-top: 50px;
  cursor: pointer;
  border-radius: 6px;


  color: #fff;
  font-weight: 600;


  &:hover{
    filter: brightness(0.9);
    translate: 5s;
  }
`