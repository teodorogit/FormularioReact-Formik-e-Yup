import React from 'react'
import {Form, Formik} from 'formik';
import  Input  from './components/Input'
import * as Yup from 'yup';
import styled from 'styled-components';
import ImageForm from './components/assets/form_image.svg'

const Container = styled.div`
padding:60px 0;
display:flex;
justify-content:center;
`;

const Content = styled.div`
width:80%;
max-width:600px;
display:flex;
justify-content:center;
padding:30px 0;
box-shadow: 0 1px 2px;
`;

const App = () => {
  const initialValues = {
    nome:"",
    sobrenome:"",
    dataNascimento:"",
    naturalidade:"",
    endereço:"",
    cidade:"",
    email:"",
    celular:"",
  };

  const validationSchema = Yup.object({
    nome:Yup.string()
    .min(3,"O campo deve ter no mínimo 3 caracteres")
    .required("Campo obrigatório"),
    sobrenome: Yup.string().required("Campo obrigatório"),
    email:Yup.string().email("E-mail inválido").required("Campo obrigatório"),
    dataNascimento: Yup.date().max(new Date(),"Não é possivel incluir uma data futura").required("Campo obrigatório"),
    celular:Yup.string().max(13,"O campo deve ter no máximo 13 caracteres").required("Campo obrigatório"),
  });

  const handleSubmit = (values, {setSubmitting}) => {
    console.log(values)
    setSubmitting(false);
  }

  const Row = styled.div`
  display:flex;
  gap:20px;

  @media (max-width:550px){
    display:block;
  }
  `;
  const Footer = styled.div`
  display:flex;
  justify-content:center;
  text-align:end;
  `;
  const Button = styled.button`
  padding:8px;
  font-size:20px;
  cursor:pointer;
  background-color:#3C3BE6;
  color:#eee;
  border:none;
  border-radius:5px;
  width:200px;
  margin-top:40px;
  `
const Image = styled.img`
max-width:300px;
display:flex;
margin:0 auto;
margin-bottom:40px;

`;
  return (
    <Container>
      <Content>
        <Formik
        onSubmit={handleSubmit}
        initialValues={initialValues}
        validationSchema={validationSchema}
        >
          {({values, isSubmitting})=> ( 
          <Form style={{width: "90%"}}>
            <Image src={ImageForm}/>
            <Row>
              <Input name='nome' required />
              <Input name='sobrenome' required />
            </Row>

            <Row>
              <Input
              name="dataNascimento"
              type="date"
              label="Data de Nascimento"
              required
              />
              <Input
              name="Naturalidade"/>
            </Row>
            <Row>
              <Input name="endereço"/>
              <Input name="cidade" disabled={!values.endereço}/>
            </Row>
            <Row>
              <Input name="email" type='email' />
              <Input name="celular" type='number' placeholder="(xx)xxxx-xxxx" required maxValue={14}/>
            </Row>
            <Footer>
              <Button type='submit' disabled={isSubmitting}>Salvar</Button>
            </Footer>
          </Form>
          )}
        </Formik>
        </Content>
    </Container>
  )
}

export default App
