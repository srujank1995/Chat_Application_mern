import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  VStack,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import axios from "axios";

const  Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState();
  const toast = useToast();
  const history = useHistory();

  const handleEvent = () => {
    setShow(!show);
  };

  const SubmitHandle = async () => {
    setLoading(true);
    if (!email || !password) {
      toast({
        title: "Please Fill all the Feilds",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setLoading(false);
      console.log(email, password)
    }
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const { data } = await axios.post(
        "/api/user/login",
        { email, password },
        config
      );
      toast({
        title: "Login Successful",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      localStorage.setItem("userInfo", JSON.stringify(data))
      history.push("/chats")
      setLoading(false)


  }catch (error) {
    toast({
      title: "Error Occured!",
      description: error.response.data.message,
      status: "error",
      duration: 5000,
      isClosable: true,
      position: "bottom",
    });
    setLoading(false);
  }
}
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
            type={show ? "text" : "password"}
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <InputRightElement width="4.5rem">
            <Button
              h="1.75rem"
              size="sm"
              background="transparent"
              onClick={handleEvent}
            >
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <FormControl>
        <FormLabel>
          <Button
            width="100%"
            height="8"
            colorScheme="linkedin"
            onClick={SubmitHandle}
            isLoading={loading}
          >
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
