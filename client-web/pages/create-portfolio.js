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
    Select,
    Text,
    VStack,
    useToast,
} from "native-base";
import React, { useState } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { useMutation, useQuery } from "react-query";
import Navbar from "../components/Navbar";
import { EditPortfolio } from "../services/portfolio.service";
import { GetAllStocks, SendStock } from "../services/stocks.service";

export default function createPortfolio() {
    const toast = useToast();
    const [showModal, setShowModal] = useState(false);
    const [showModalEdit, setShowModalEdit] = useState(false);
    const [formData, setData] = React.useState({});
    const [formDataEdit, setDataEdit] = React.useState({});

    // const [showModal, setShowModal] = useState(false);

    const { data: stocks } = useQuery("stocks", GetAllStocks);
    console.log(stocks, "stocks");

    const stockMutation = useMutation(SendStock, {
        onSuccess: (data) => {
            console.log(data);
            toast.show({
                description: "Stock added to portfolio",
            });
        },
        onError: (e) => {
            // toast.show({
            //     description: e.response.data.errors[0].message,
            // });
            console.log(e);
        },
    });

    const addStock = async () => {
        console.log(formData);
        await stockMutation.mutateAsync(formData);
    };

    const editMutation = useMutation(EditPortfolio, {
        onSuccess: (data) => {
            console.log(data);
            toast.show({
                description: "Portfolio updated",
            });
        },
        onError: (e) => {
            toast.show({
                description: e.response.data.errors[0].message,
            });
            console.log(e);
        },
    });

    const onEdit = async () => {
        console.log(formDataEdit);
        await editMutation.mutateAsync(formDataEdit);
    };

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
                            by Arushi Gandhi
                        </Text>
                        <Text px={4} fontSize={18}>
                            This is my stock holder's portfolio. Welcome!
                            <Button
                                m={4}
                                p={0}
                                w={"3rem"}
                                variant="outline"
                                _text={{ color: "#6E34B8" }}
                                onPress={() => setShowModalEdit(true)}
                            >
                                Edit
                            </Button>
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
                                {/* <Input
                                    placeholder="Stock Name"
                                    size="xl"
                                    borderRadius={6}
                                    onChangeText={(value) =>
                                        setData({ ...formData, email: value })
                                    }
                                /> */}
                                <Select
                                    // selectedValue={service}
                                    minWidth="200"
                                    placeholder="Choose Stock"
                                    // _selectedItem={{
                                    //     bg: "teal.600",
                                    //     endIcon: <CheckIcon size="5" />,
                                    // }}
                                    mt={1}
                                    onValueChange={(itemValue) =>
                                        setData({
                                            ...formData,
                                            ticker: itemValue,
                                        })
                                    }
                                >
                                    {stocks?.map((stock, index) => (
                                        <Select.Item
                                            key={index}
                                            label={
                                                stock.name +
                                                " (" +
                                                stock.ticker +
                                                ")"
                                            }
                                            value={stock.ticker}
                                        />
                                    ))}
                                </Select>
                            </FormControl>
                            <FormControl>
                                <Input
                                    mt={6}
                                    placeholder="Quantity"
                                    size="sm"
                                    // variant="filled"
                                    borderRadius={6}
                                    onChangeText={(value) =>
                                        setData({
                                            ...formData,
                                            quantity: value,
                                        })
                                    }
                                />
                            </FormControl>
                            <FormControl>
                                <Input
                                    mt={6}
                                    placeholder="Buy Price"
                                    size="sm"
                                    // variant="filled"
                                    borderRadius={6}
                                    onChangeText={(value) =>
                                        setData({
                                            ...formData,
                                            buyPrice: value,
                                        })
                                    }
                                />
                            </FormControl>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button
                                borderRadius="6"
                                bg={"#6E34B8"}
                                w={"12rem"}
                                onPress={addStock}
                            >
                                Save
                            </Button>
                        </Modal.Footer>
                    </Modal.Content>
                </Modal>
            </Center>
            <Center>
                <Modal
                    isOpen={showModalEdit}
                    onClose={() => setShowModalEdit(false)}
                >
                    <Modal.Content maxWidth="400px">
                        <Modal.CloseButton />
                        <Modal.Header>Change Description</Modal.Header>
                        <Modal.Body>
                            <FormControl>
                                <Input
                                    mt={6}
                                    placeholder="Description"
                                    size="sm"
                                    // variant="filled"
                                    borderRadius={6}
                                    onChangeText={(value) =>
                                        setDataEdit({
                                            ...formDataEdit,
                                            description: value,
                                        })
                                    }
                                />
                            </FormControl>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button
                                borderRadius="6"
                                bg={"#6E34B8"}
                                w={"12rem"}
                                onPress={onEdit}
                            >
                                Save
                            </Button>
                        </Modal.Footer>
                    </Modal.Content>
                </Modal>
            </Center>
        </>
    );
}
