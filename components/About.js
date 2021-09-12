import {
	Button,
	Flex,
	Heading,
	Stack,
	Text,
	useBreakpointValue,
	Box,
	Center,
} from "@chakra-ui/react";
import Image from "next/image";
import AboutPic from "../assets/Adaconda.png";

export default function SplitScreen() {
	return (
		<Stack
			id="about"
			align="center"
			minH={"100vh"}
			direction={{ base: "column", md: "row" }}
		>
			<Flex p={8} flex={1} align={"center"} justify={"center"}>
				<Stack spacing={6} w={"full"} maxW={"lg"}>
					<Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
						<Text
							as={"span"}
							position={"relative"}
							_after={{
								content: "''",
								width: "full",
								height: useBreakpointValue({ base: "20%", md: "30%" }),
								position: "absolute",
								bottom: 1,
								left: 0,
								bg: "#3bc98d",
								zIndex: -1,
							}}
						>
							About
						</Text>
						<br />{" "}
						<Text color="#3bc98d" as={"span"}>
							Adaconda Projects
						</Text>{" "}
					</Heading>
					<Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
						dicta minus maiores doloribus harum accusantium autem odio. Vitae,
						accusamus tempora.
					</Text>
					<Stack direction={{ base: "column", md: "row" }} spacing={4}>
						<Button
							rounded={"full"}
							bg="#3bc98d"
							color={"white"}
							_hover={{
								bg: "#71d08b",
							}}
						>
							Buy Now!
						</Button>
					</Stack>
				</Stack>
			</Flex>
			<Flex flex={1}>
				<Box
					w={{ base: "320px", lg: "500px" }}
					h={{ base: "320px", lg: "500px" }}
				>
					<Image alt={"Login Image"} objectFit={"cover"} src={AboutPic} />
				</Box>
			</Flex>
		</Stack>
	);
}
