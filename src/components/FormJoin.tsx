import { useState } from "react";
import styled from "styled-components";

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  margin: 0 auto;
  background-color: rgba(24, 22, 22, 0.8);
  padding: 1rem;
  color: #e5eafa;
  margin-bottom: 2rem;
  border-radius: 7%;
 
  @media(max-width:900px){
    display:flex;
    flex-direction: row;
    width:100%
  }
 
`;

const FormGroup = styled.div`
  margin-bottom: 1rem;
  
  
`;

const Label = styled.label`
  color: #e5eafa;
  
`;

const Input = styled.input`
  border-radius: 4px;
  border: 2px solid rgba(146, 194, 247, 0.5);
  box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  padding: 0.5rem;
  width:calc(100% - 1rem);
  color: #e5eafa ;
  background-color:rgba(0, 0, 0, 0.8);
 
`

const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: #1762a7;
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  width: 100%;
  margin-top: 1rem;
`;

export function FormJoin() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Aquí haria mi logica para el envio del formulario
    console.log("Nombre:", name);
    console.log("Email:", email);
    console.log("Contraseña:", password);
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>Name:</Label>
          <Input
            type="text"
            value={name}
            onChange={(e: any) => setName(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label>Email:</Label>
          <Input
            type="email"
            value={email}
            onChange={(e: any) => setEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label>Password:</Label>
          <Input
            type="password"
            value={password}
            onChange={(e: any) => setPassword(e.target.value)}
          />
        </FormGroup>
        <Button type="submit">Join Now</Button>
      </form>
    </FormContainer>
  );
}
