import {
  Box,
  Heading,
  Text,
  VStack,
  HStack,
  useColorModeValue,
  IconButton,
} from "@chakra-ui/react";
import { FiPlusCircle } from "react-icons/fi";

const Home = () => {
  const Card = () => (
    <VStack
      rounded="8"
      w="100%"
      h="100%"
      p="4"
      mt="2"
      overflow="hidden"
      borderWidth="2px"
      borderColor={useColorModeValue("gray.100", "gray.700")}
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
  return (
    <Box mb={8} w="full">
      <HStack w="100%" justify="space-between">
        <Heading>MiniBlog</Heading>
        <IconButton aria-label="Add post" icon={<FiPlusCircle size="25" />} />
      </HStack>
      <Card />
      <Card />
      <Card />
    </Box>
  );
};

export default Home;
