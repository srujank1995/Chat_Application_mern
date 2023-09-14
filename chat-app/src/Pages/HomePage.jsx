import { Box, Container, Text } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import Login from "../Component/Auth/Login";
import Signup from "../Component/Auth/Signup";

const HomePage = () => {
  return (
    <Container maxW="xl" centerContent>
      <Box
        d="flex"
        justifyContent="center"
        p={3}
        bg="white"
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"
      >
        <Text
          fontSize="4xl"
          fontFamily="Work sans"
          align="center"
          fontWeight="extrabold"
        >
          {" "}
          CHAT-ZENITH{" "}
        </Text>
      </Box>
      <Box bg='whitesmoke' w="100%" p={4} borderRadius="lg" borderWidth="1px">
        <Tabs variant="soft-rounded" colorScheme='messenger' >
          <TabList>
            <Tab width="50%">LOGIN</Tab>
            <Tab width="50%">SIGN-UP</Tab>
          </TabList>
          <TabPanels fontSize="xl">
            <TabPanel>
              <Login/>
            </TabPanel>
            <TabPanel>
              <Signup/>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default HomePage;
