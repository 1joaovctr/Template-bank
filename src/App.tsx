//import { Layout } from "./components/Layout"; 
//import styled from "styled-components"; - IMportando o Styled/css
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ChakraProvider, Input, Box, Center, Button, } from "@chakra-ui/react";
import { login } from "./services/login"

/*
Declarando a box no styled/css
const Box = styled.div`
  background-color: blue;
  border-radius: 15px;
  text-align: center;

`
*/

function App() {
  return (
    <ChakraProvider >
      <Box
          backgroundColor="#4B0082"
          display="flex"
          color="#FFF"
          fontSize="50"
          fontFamily="monospace"
      >
          <h1>Internacional Bank</h1>
        </Box>
      <Box 
          minHeight="100vh" 
          backgroundColor="#4B0082" 
          padding="25px"
          display="flex"
          justifyContent="center"
          alignItems="center"
          fontFamily="monospace"
      >

        
        <Box 
          bgColor="#F8F8FF"   
          borderRadius="25px"
          padding="15px" 
          width="100%"
          maxWidth="400px"
          boxShadow="lg"
        >
          
          <Box 
            textAlign="center"
            fontSize="20"
          >
          <h1>Faça o seu login</h1>
          </Box>
      <Input placeholder="Email" />
      <Input placeholder="Senha" type="password"/>
     
    
      <Center>
        <Button onClick={login}
          colorScheme="teal" 
          size="sm"
          marginTop="5px"
          width="30%"
          _hover={{
          background: "#4B0082",
          color: "#FFF"
        }}>
          Login
        </Button>
      </Center>
      </Box>
      </Box>

    </ChakraProvider>


/* Sintaxe utilizada usando o styled/css
<Layout>
<Box>
<h3>Faça o login</h3>
</Box>

<label htmlFor="emailInput">
  Email: 
  <input id="emailInput" type="text" />
</label>

<br />
<br />

<label htmlFor="passwordInput">
  Senha:
  <input id="passwordInput" type="password" />
</label>

<br />
<br />

<button>
  Entrar
</button>
<br />
<br />
</Layout>
*/
    
  );
}

export default App;
