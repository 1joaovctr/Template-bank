import { Box, Center, Input } from "@chakra-ui/react"
import { login } from "../services/login"
import { DButton } from "./DButton"

export const Card = () => {
    return(
        <Center>
        <Box 
          bgColor="#F8F8FF"   
          borderRadius="25px"
          padding="15px" 
          width="100%"
          maxWidth="400px"
          textAlign="center"
          fontSize="20"
          fontFamily="monospace"
        >
          <h1>Faça o seu login</h1>
        
      <Input placeholder="Email" />
      <Input placeholder="Senha" type="password"/>
     
    
      <Center>
       <DButton 
        onClick={login}
        />
      </Center>
      </Box>
      </Center>
    )
}