import {
	Button,
	Flex,
	Heading,
	Stack,
	Text,
	useBreakpointValue,
	Box,
} from "@chakra-ui/react";
import Image from "next/image";
import AboutPic from "../assets/Adaconda.png";
import Metamask from "../components/Metamask";

export default function SplitScreen() {
	return (
		<Box>
			<Stack
				id="about"
				align="center"
				minH={"100vh"}
				direction={{ base: "column", md: "row" }}
				bg="black"
			>
				<Flex
					p={8}
					flex={1}
					align={"center"}
					justify={"center"}
					data-aos="zoom-in-left"
				>
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
							Adaconda is a community based token, which means the development
							of the project is done by its community members. The tokenomics
							utility model is to be used for paying for goods and services. It
							is also intended to be used as a reward to the users of the
							platform.
						</Text>
						<Stack direction={{ base: "column", md: "row" }} spacing={4}>
							<Button
								as="a"
								rounded={"lg"}
								bg="#3bc98d"
								color={"white"}
								_hover={{
									bg: "white",
									color: "#3bc98d",
								}}
								href="https://pancakeswap.finance/"
								target="_blank"
							>
								Buy Now!
							</Button>
							<Metamask />
						</Stack>
					</Stack>
				</Flex>
				<Flex flex={1} data-aos="slide-right">
					<Box
						w={{ base: "320px", lg: "500px" }}
						h={{ base: "320px", lg: "500px" }}
					>
						<Image alt={"Login Image"} objectFit={"cover"} src={AboutPic} />
					</Box>
				</Flex>
			</Stack>
		</Box>
	);
}
