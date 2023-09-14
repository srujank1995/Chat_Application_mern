import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [show, setShow] = useState(false)

  const handleEvent = () => {setShow(!show)}
  return (
    <VStack>
      <FormControl isRequired>
        <FormLabel fontSize="xs">Email</FormLabel>
        <Input
          fontSize="xs"
          height="8"
          type={email}
          placeholder="Enter Email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormControl>
      <FormControl isRequired>
        <FormLabel fontSize="xs">Password</FormLabel>
        <InputGroup>
        <Input
          fontSize="xs"
          height="8"
          type={show ? "text": "password"}
          placeholder="Enter Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <InputRightElement>
            <Button height='5' background='transparent' size="sm" onClick={handleEvent}>
              {show ? "Hide" : "Show"}
            </Button>
            </InputRightElement>
        </InputGroup>
        
      </FormControl>
      <FormControl>
        <FormLabel>
          <Button width="100%" height="8" colorScheme="linkedin" >
            LOGIN
          </Button>
        </FormLabel>
        <FormControl>
          <FormLabel>
            <Button
              width="100%"
              height="8"
              colorScheme="red"
              onClick={() => {
                setEmail("guest@example.com");
                setPassword("password");
              }}
            >
              GUEST USER
            </Button>
          </FormLabel>
        </FormControl>
      </FormControl>
    </VStack>
  );
}

export default Login;
