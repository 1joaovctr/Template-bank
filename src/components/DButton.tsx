import { Button } from "@chakra-ui/react"

interface IDButton {
    onClick: () => void
}
export const DButton = ({ onClick }: IDButton) => {
    return(
        <Button
            onClick={onClick}
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
    )

}

export default DButton