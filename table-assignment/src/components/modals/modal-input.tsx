import styled from 'styled-components'


interface ModelInputProps {
  value: string,
  label: string,
  onChange: (value: string) => void
}

export default function ModelInput({value, label, onChange}: ModelInputProps) {
  return (
    <Container>
      <Label>{label}</Label>
      <Input value={value} onChange={e => onChange(e.target.value)}/>
    </Container>
  )
}

const Container = styled.div`
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