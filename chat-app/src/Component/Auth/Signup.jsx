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

const Signup = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmpassword, setConfirmPasword] = useState();
  const [pic, setPic] = useState();
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const toast = useToast();
  const history = useHistory();

  const handleclick = () => {
    setShow(!show);
  };

  const PicDetails = (pics) => {
    setLoading(true);
    if (pics === undefined) {
      toast({
        title: "Please Select an Image!",
        description: "Pic Uploaded Successfully",
        status: "warning",
        duration: 7000,
        position: "bottom",
        isClosable: true,
      });
    }
    console.log(pics);

    if (pics.type === "image/jpeg" || pics.type === "image/png") {
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "chat_app");
      data.append("cloud_name", "diqcgushe");
      fetch("https://api.cloudinary.com/v1_1/diqcgush/image/upload", {
        method: "post",
        mode:"no-cors",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          setPic(data.url.toString());
          console.log(data.url.toString());
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    } else {
      toast({
        title: "Please Select Image !",
        status: "warning",
        duration: 7000,
        position: "bottom",
        isClosable: true,
      });
      setLoading(false);
      return;
    }
  };

  const SubmitHandle = async() => {
    setLoading(true);
    if (!name || !email || !password || !confirmpassword) {
      toast({
        title: "Please Fill Details !",
        description: "Fill all details",
        status: "warning",
        duration: 7000,
        position: "bottom",
        isClosable: false,
      });
      setLoading(false);
      return;
    }

    if (password !== confirmpassword ) {
      toast({
        title: "Password didnot Match",
        description: "Invalid Password",
        status: "warning",
        duration: 7000,
        position: "bottom",
        isClosable: false,
      });
      return;
    }
    console.log(name, email, password, confirmpassword);

    try {
      const config = { headers: { "Content-type": "application/json" } };
      const { data } = await axios.post(
        "/api/user",
        { name, email, password, pic },
        config
      );
      console.log(data);
      toast({
        title: "Registration Success",
        description: "Successfully Done",
        status: "success",
        duration: 6000,
        position: "bottom",
        isClosable: false,
      });
      localStorage.setItem("userInfo", JSON.stringify(data));
      history.push("/chats");
      setLoading(false);
    } catch (error) {
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
  };
  return (
    <VStack spacing="5px" fontSize="xs">
      <FormControl isRequired>
        <FormLabel fontSize="xs">Full Name</FormLabel>
        <Input
          fontSize="xs"
          height="8"
          type={name}
          placeholder="Full Name"
          onChange={(e) => setName(e.target.value)}
        />
      </FormControl>
      <FormControl isRequired>
        <FormLabel fontSize="xs">EMAIL</FormLabel>
        <Input
          fontSize="xs"
          height="8"
          type={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormControl>

      <FormControl id="password" isRequired>
        <FormLabel fontSize="xs">PASSWORD</FormLabel>
        <InputGroup>
          <Input
            size="md"
            height="8"
            fontSize="xsmaller"
            type={show ? "text" : "password"}
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <InputRightElement width="4.5rem">
            <Button
              h="1.75rem"
              background="transparent"
              size="sm"
              onClick={handleclick}
            >
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>

      <FormControl id="cnfpassword" isRequired>
        <FormLabel fontSize="xs">Confirm Password</FormLabel>
        <InputGroup>
          <Input
            size="md"
            height="8"
            fontSize="xsmaller"
            type={show ? "text" : "password"}
            placeholder="Confirm Password"
            onChange={(e) => setConfirmPasword(e.target.value)}
          />
          <InputRightElement width="4.5rem">
            <Button 
              h="1.75rem"
              background="transparent"
              size="sm"
              onClick={handleclick}
            >
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
            colorScheme="linkedin"
            width="100%"
            style={{ marginTop: 15 }}
            onClick={SubmitHandle}
            isLoading={loading}
          >
            SUBMIT
          </Button>
        </FormLabel>
      </FormControl>
    </VStack>
  );
};

export default Signup;
