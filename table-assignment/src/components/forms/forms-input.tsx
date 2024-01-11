import React from 'react'
import styled from 'styled-components'


interface FormInputProps {
  label: string
  placeholder: string 
  onChange: (value: string) => void
}


export default function FormInput({label, placeholder, onChange}: FormInputProps) {
  return (
    <Container>
      <Label>{label}</Label>
      <Input placeholder={placeholder} onChange={e => onChange(e.target.value)}/>
    </Container>
  )
}

const Container = styled.div`
  margin: 0 10px;
`

const Label = styled.div`


`

const Input = styled.input`
  width: 140px;
  padding: 4px 10px;
  font-size: 14px;
  font-weight: 300;
  border-radius: 4px;
  border: 1px solid lightgray;
  outline: none;
`