import React from "react";
import {
    Box,
    Image,
    Pressable,
    Text,
    VStack,
    Center,
    Button,
    Flex,
    HStack,
} from "native-base";
import one from "../../../assets/1.jpg";

export function Screen1({ navigation }) {
    return (
        <>
            <Flex
                bgColor={"#ffffff"}
                p={5}
                pt={8}
                h={"100vh"}
                alignItems="center"
                // style={{
                //     backgr
            >
                <Image
                    w={"90%"}
                    height={"100"}
                    source={{
                        uri: "https://wallpaperaccess.com/full/317501.jpg",
                    }}
                    borderRadius="12"
                    opacity={0.5}
                />
                <Text bold color="#6E34B8" fontSize={22} width={"90%"}>
                    EU Proposes 1 Billion Euros in Immediate Support for Ukraine
                </Text>
                <VStack>
                    <HStack>
                        <Text width={"90%"} fontSize={16}>
                            The European Union proposed 1 billion euros ($1.04
                            billion) in short-term financial relief for Ukraine
                            to shore up the war-ravaged nation’s urgent cash
                            needs, as Germany continues to hold up talks on a
                            larger package, according to people familiar with
                            the matter. Ursula von der Leyen, the European
                            Commission president, said the first part of an
                            assistance plan “will allow us to give an immediate
                            answer to the urgent needs of Ukraine.”
                        </Text>
                    </HStack>
                    <HStack>
                        <Button
                            bgColor={"#6E34B8"}
                            borderRadius={6}
                            // w={"4rem"}
                            // mt={"5rem"}
                        >
                            Next
                        </Button>
                    </HStack>
                </VStack>
            </Flex>
            {/* <Button bgColor={"#6E34B8"} borderRadius={6} w={"4rem"} mt={"5rem"}>
                Next
            </Button> */}
        </>
    );
}

export function Screen2({ navigation }) {
    return (
        <Box bgColor={"#ffffff"} p={5} pt={8} h={"100vh"} alignItems="center">
            <Image
                width={"90%"}
                height={"10rem"}
                source={{
                    uri: "https://wallpaperaccess.com/full/317501.jpg",
                }}
                borderRadius="12"
            />
            <Text
                bold
                color="#6E34B8"
                fontSize={22}
                width={"90%"}
                height={"10rem"}
                mt={6}
            >
                JPMorgan Sees ‘Stratospheric’ $380 Oil on Worst-Case Russian Cut
            </Text>
            <Text width={"90%"} height={"10rem"} fontSize={16}>
                Global oil prices could reach a “stratospheric” $380 a barrel if
                US and European penalties prompt Russia to inflict retaliatory
                crude-output cuts, JPMorgan Chase & Co. analysts warned.
                <br />
                <br />
                <br />
                The Group of Seven nations are hammering out a complicated
                mechanism to cap the price fetched by Russian oil in a bid to
                tighten the screws on Vladimir Putin’s war machine in Ukraine.
            </Text>
        </Box>
    );
}

export function Screen3({ navigation }) {
    return (
        <Box bgColor={"#ffffff"} p={5} pt={8} h={"100vh"} alignItems="center">
            <Image
                width={"90%"}
                height={"10rem"}
                source={{
                    uri: "https://wallpaperaccess.com/full/317501.jpg",
                }}
                borderRadius="12"
            />
            <Text
                bold
                color="#6E34B8"
                fontSize={22}
                width={"90%"}
                height={"10rem"}
                mt={6}
            >
                EU Proposes 1 Billion Euros in Immediate Support for Ukraine
            </Text>
            <Text width={"90%"} height={"10rem"} fontSize={16}>
                The European Union proposed 1 billion euros ($1.04 billion) in
                short-term financial relief for Ukraine to shore up the
                war-ravaged nation’s urgent cash needs, as Germany continues to
                hold up talks on a larger package, according to people familiar
                with the matter.
                <br />
                <br />
                <br />
                Ursula von der Leyen, the European Commission president, said
                the first part of an assistance plan “will allow us to give an
                immediate answer to the urgent needs of Ukraine.”
            </Text>
        </Box>
    );
}
