import { Flex, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex as="footer" width="full" align="center" justify="center">
      <Text>{new Date().getFullYear()} - MiniBlog Tutorial</Text>
    </Flex>
  );
};

export default Footer;
