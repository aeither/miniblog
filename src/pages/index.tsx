import {
  Box,
  Heading,
  Text,
  VStack,
  HStack,
  useColorModeValue,
  IconButton,
  Button,
} from "@chakra-ui/react";
import { FiPlusCircle } from "react-icons/fi";

// 1 Import useMoralis
import { useMoralis } from "react-moralis";

const Home = () => {
  // 2 Use constants from Moralis
  const { authenticate, isAuthenticated, user, logout } = useMoralis();

  const GRAY = useColorModeValue("gray.100", "gray.700");

  const Header = () => (
    <HStack w="100%" justify="space-between">
      <Heading>MiniBlog</Heading>
      <IconButton aria-label="Add post" icon={<FiPlusCircle size="25" />} />
    </HStack>
  );
  const Card = () => (
    <VStack
      rounded="8"
      w="100%"
      h="100%"
      p="4"
      mt="2"
      overflow="hidden"
      borderWidth="2px"
      borderColor={GRAY}
      transition="all 0.25s"
      shadow="sm"
      transition-timing-function="spring(1 100 10 10)"
      _hover={{ transform: "translateY(-2px)", shadow: "md" }}
    >
      <HStack w="100%" justify="start">
        <Heading size="sm">Title</Heading>
        <Text fontSize="sm">Author</Text>
      </HStack>
      <Text w="100%" isTruncated>
        Content
      </Text>
    </VStack>
  );

  // 3 Add Login Bar
  const LoginBar = () =>
    !isAuthenticated ? (
      <Button onClick={() => authenticate()}>Authenticate</Button>
    ) : (
      <HStack
        rounded="8"
        background={GRAY}
        w="100%"
        p="4"
        my="4"
        justify="space-between"
      >
        <Box>
          <Heading size="sm">User ID: {user?.get("username")}</Heading>
          <Text>Address: {user?.get("ethAddress")}</Text>
        </Box>
        <Button onClick={() => logout()}>Logout</Button>
      </HStack>
    );
  return (
    <Box mb={8} w="full">
      <LoginBar />
      <Header />
      <Card />
      <Card />
      <Card />
    </Box>
  );
};

export default Home;
