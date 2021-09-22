import { Box, Flex, Heading, Link } from "@chakra-ui/react";
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
          d="inline"
          href="https://github.com/aeither/miniblog"
          isExternal
        >
          Github <FiExternalLink d="flex" />
        </Link>
        <ThemeToggle />
      </Box>
    </Flex>
  );
};

export default Header;
