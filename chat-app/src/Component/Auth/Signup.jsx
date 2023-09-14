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

const Signup = () => {
  const [fname, setFname] = useState();
  const [lname, setLname] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmpassword, setConfirmPasword] = useState();
  const [pic, setPic] = useState();
  const [show, setShow] = useState(false);

  const handleclick = () => {setShow(!show)};

  const PicDetails = (pics) => {};

  const SubmitHandle = () => {};
  return (
    <VStack spacing="5px" fontSize="xs">
      <FormControl isRequired>
        <FormLabel fontSize='xs'>First Name</FormLabel>
        <Input
          fontSize='xs'
          height="8"
          type={fname}
          placeholder="First Name"
          onChange={(e) => setFname(e.target.value)}
        />
      </FormControl>
      <FormControl isRequired>
        <FormLabel fontSize='xs'>Last Name</FormLabel>
        <Input
          fontSize='xs'
          height="8"
          type={lname}
          placeholder="Last Name"
          onChange={(e) => setLname(e.target.value)}
        />
      </FormControl>
      <FormControl isRequired>
        <FormLabel fontSize='xs'>EMAIL</FormLabel>
        <Input
          fontSize='xs'
          height="8"
          type={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormControl>

      <FormControl id="password" isRequired>
        <FormLabel fontSize='xs'>PASSWORD</FormLabel>
        <InputGroup>
          <Input
            size="md"
            height="8"
            fontSize='xsmaller'
            type={show ? "text" : "password"}
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <InputRightElement >
            <Button height='5' background='transparent' size="sm" onClick={handleclick}>
              {show ? "Hide" : "Show"}
            </Button>
            </InputRightElement>
        </InputGroup>
      </FormControl>

      <FormControl id="cnfpassword" isRequired>
        <FormLabel fontSize='xs'>Confirm Password</FormLabel>
        <InputGroup>
          <Input
            size="md"
            height="8"
            fontSize='xsmaller'
            type={show ? "text" : "password"}
            placeholder="Confirm Password"
            onChange={(e) => setConfirmPasword(e.target.value)}
          />
          <InputRightElement >
            <Button height='5' background='transparent'  size="sm" onClick={handleclick}>
              {show ? "Hide" : "Show"}
            </Button>
            </InputRightElement>
        </InputGroup>
      </FormControl>
      <FormControl>
        <FormLabel>
          <Input
            type="file"
            height="8"
            fontSize="xs"
            p={0.5}
            accept="image/*"
            onChange={(e) => PicDetails(e.target.files[0])}
          />
        </FormLabel>
      </FormControl>
      <FormControl>
        <FormLabel>
          <Button
            colorScheme='linkedin'
            width="100%"
            style={{ marginTop: 15 }}
            onClick={SubmitHandle}
          >
            SUBMIT
          </Button>
        </FormLabel>
      </FormControl>
    </VStack>
  );
};

export default Signup;
