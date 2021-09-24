import { Box, Flex, Heading, Link, HStack, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import { FiExternalLink } from "react-icons/fi";

import ThemeToggle from "./ThemeToggle";

const Header = () => {
  return (
    <Flex as="header" width="full" align="center">
      <Heading as="h1" size="md">
        <NextLink href="/">Home </NextLink>
      </Heading>

      <Box marginLeft="auto" d="flex">
        <Link
          pr="2"
          alignSelf="center"
          href="https://github.com/aeither/miniblog"
          isExternal
        >
          <HStack>
            <Text>Github</Text>
            <Box as={FiExternalLink} size="16px" />
          </HStack>
        </Link>
        <ThemeToggle />
      </Box>
    </Flex>
  );
};

export default Header;
