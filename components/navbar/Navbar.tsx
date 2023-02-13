import React from "react";
import { Flex, Image } from "@chakra-ui/react";

const Navbar: React.FC = () => {
  return (
    <Flex bg="gray.200" height="44px" padding="6px 12px">
      <Flex align="center">
        <Image src="./images/logo.svg" alt="logo" height="60px" />
      </Flex>
    </Flex>
  );
};

export default Navbar;
