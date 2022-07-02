import {
    Avatar,
    Button,
    Center,
    Container,
    FormControl,
    HStack,
    Icon,
    Input,
    Modal,
    Text,
    VStack,
} from "native-base";
import React, { useState } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import Navbar from "../components/Navbar";

export default function createPortfolio() {
    const [showModal, setShowModal] = useState(false);
    return (
        <>
            <Navbar />
            <Container py={"5rem"} pl={"10rem"}>
                <Text
                    fontSize={"16px"}
                    italic
                    color="coolGray.400"
                    fontWeight={300}
                >
                    Create Portfolio {" > "} Add Assets {" > "} Executing Trades
                </Text>
                <HStack
                    borderColor="coolGray.200"
                    borderWidth="1"
                    width={"100%"}
                    display={"flex"}
                    py={4}
                    px={10}
                    my={8}
                    // justifyContent={"center"}
                    alignItems={"center"}
                    borderRadius={"8"}
                >
                    <Avatar
                        my={"1rem"}
                        bg="indigo.500"
                        source={{
                            uri: "https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
                        }}
                        size="sm"
                    >
                        JB
                    </Avatar>
                    <VStack>
                        <Text bold px={4}>
                            My Portfolio
                        </Text>
                        <Text color={"#6E34B8"} px={4} fontSize={12}>
                            by Username Gandhi
                        </Text>
                    </VStack>
                </HStack>

                <Button
                    borderColor="#6E34B8"
                    borderWidth="1.5px"
                    borderStyle={"dashed"}
                    width={"100%"}
                    display={"flex"}
                    flexDirection={"row"}
                    py={10}
                    px={10}
                    my={8}
                    justifyContent={"center"}
                    alignItems={"center"}
                    borderRadius={"6"}
                    bgColor="#fff"
                    onPress={() => setShowModal(true)}
                >
                    <Text
                        color={"#000"}
                        display={"flex"}
                        flexDirection={"row"}
                        justifyContent={"center"}
                        alignItems={"center"}
                    >
                        Add Assets to your Portfolio
                        <Icon
                            as={
                                <AiOutlinePlusCircle
                                    style={{
                                        margin: "1rem",
                                        fontSize: "20px",
                                        color: "#6E34B8",
                                    }}
                                    color={"#6E34B8"}
                                />
                            }
                        />
                    </Text>
                </Button>
            </Container>
            <Center>
                <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
                    <Modal.Content maxWidth="400px">
                        <Modal.CloseButton />
                        <Modal.Header>Add Asset</Modal.Header>
                        <Modal.Body>
                            <FormControl>
                                <Input
                                    placeholder="Stock Name"
                                    size="xl"
                                    borderRadius={6}
                                    // onChangeText={(value) =>
                                    //     setData({ ...formData, email: value })
                                    // }
                                />
                            </FormControl>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button borderRadius="6" bg={"#6E34B8"} w={"12rem"}>
                                Save
                            </Button>
                        </Modal.Footer>
                    </Modal.Content>
                </Modal>
            </Center>
        </>
    );
}
