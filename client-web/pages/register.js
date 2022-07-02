import {
  Box,
  Button,
  FormControl,
  Heading,
  HStack,
  Icon,
  IconButton,
  Input,
  Stack,
  VStack,
  Center,
  Link,
  Flex,
} from "native-base";
import React from "react";
import { BsPerson } from "react-icons/bs";
import Image from "next/image";
import Navbar from "../components/Navbar";

export default function register() {
  return (
    <>
      {/* <Navbar /> */}
      <Flex
        direction="row"
        alignItems={"center"}
        justifyContent="center"
        backgroundColor={"purple.50"}
        height={"100vh"}
      >
        {/* <HStack> */}
        <VStack
          safeArea
          // mt={150}
          width={"40%"}
          // shadow="6"
          p={10}
          borderRadius={12}
        >
          <Heading size="lg" color="purple.800">
            Welcome
          </Heading>
          <Heading color="muted.400" size="xs">
            Already have an account? <Link href="/login">Login</Link>
          </Heading>

          <VStack space={2} mt={5}>
            <FormControl>
              <Input
                placeholder="Email"
                //   variant="filled"
                size="xl"
                borderRadius={6}
              />
            </FormControl>
            <FormControl>
              <Input
                type="password"
                placeholder="Password"
                //   variant="filled"
                size="xl"
                borderRadius={6}
                //   backgroundColor={"white"}
              />
            </FormControl>
            <FormControl>
              <Input
                type="password"
                placeholder="Confirm Password"
                //   variant="filled"
                size="xl"
                borderRadius={6}
              />
            </FormControl>
            <VStack space={2} mt={5}>
              <Button
                colorScheme="purple"
                _text={{
                  color: "white",
                }}
              >
                SignUp
              </Button>
            </VStack>
          </VStack>
        </VStack>
        <VStack safeArea width={"40%"}>
          <Image src="/images/reg.svg" width={250} height={250} />
        </VStack>
        {/* </HStack> */}
      </Flex>
    </>
  );
}
