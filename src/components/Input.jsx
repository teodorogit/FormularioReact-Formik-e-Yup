import React from 'react';
import { Field, ErrorMessage} from 'formik';
import styled from 'styled-components'

const FieldStyled = styled.input`
padding:10px;
border-radius:5px;
border:1px solid;
outline:none;
font-size:18px;
width:90%;
`;

const Container =styled.div `
display:flex;
flex-direction:column;
gap:2px;
margin-bottom:15px;
width:100%;
`;

const Label = styled.label`
text-transform: capitalize;
`;

const requiredLabel = styled.span`
color:red;
`;
const ErrorStyled = styled.span`
color: red;
font-size:14px;
`;

const Input = ({name,type="",label,required,...props}) => {
  return (
    <Container>
        <Label>
        {label || name}
        {required && <requiredLabel>*</requiredLabel>}
        </Label>
        <Field as={FieldStyled} name={name} type={type}  {...props}/>
        <ErrorMessage name={name} component={ErrorStyled}/>
    </Container>
  )
}

export default Input
