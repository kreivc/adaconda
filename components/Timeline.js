import {
	Box,
	Container,
	Heading,
	SimpleGrid,
	Icon,
	Text,
	Stack,
	HStack,
	VStack,
} from "@chakra-ui/react";
import { RiCheckFill } from "react-icons/ri";
import { VscLoading } from "react-icons/vsc";

export default function GridListWithHeading() {
	return (
		<Box bg="#FBFAF5">
			<Box p={4} py="80px" id="timeline" bg="black">
				<Stack
					spacing={4}
					as={Container}
					maxW={"3xl"}
					textAlign={"center"}
					data-aos="slide-up"
					pb="6"
				>
					<Heading fontSize={"4xl"} color="#3bc98d">
						Timeline For Adaconda Project
					</Heading>
					<Text color={"gray.400"} fontSize={"xl"}>
						We are constantly thinking about the steps that need to be taken in
						the future. As a community token, we are depending on the holders to
						share their ideas with the team. The website will be updated after
						each step.
					</Text>
				</Stack>

				<Container maxW={"6xl"} mt={10}>
					<SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
						<HStack align={"top"} data-aos="zoom-in">
							<Box color={"green.400"} px={2}>
								<Icon as={RiCheckFill} />
							</Box>
							<VStack align={"start"}>
								<Text fontWeight={600}>Launch Telegram Group</Text>
								<Text color={"gray.400"}>
									First we create Telegram as traders' association
								</Text>
							</VStack>
						</HStack>
						<HStack align={"top"} data-aos="zoom-in">
							<Box color={"green.400"} px={2}>
								<Icon as={RiCheckFill} />
							</Box>
							<VStack align={"start"}>
								<Text fontWeight={600}>Launch Twitter Page</Text>
								<Text color={"gray.400"}>
									Also, release a Twitter page for marketing and news update
								</Text>
							</VStack>
						</HStack>
						<HStack align={"top"} data-aos="zoom-in">
							<Box color={"green.400"} px={2}>
								<Icon as={RiCheckFill} />
							</Box>
							<VStack align={"start"}>
								<Text fontWeight={600}>Launch Website</Text>
								<Text color={"gray.400"}>
									Of course we create website for token address and update
								</Text>
							</VStack>
						</HStack>

						<HStack align={"top"} data-aos="zoom-in">
							<Box color={"green.400"} px={2}>
								<Icon as={RiCheckFill} />
							</Box>
							<VStack align={"start"}>
								<Text fontWeight={600}>Token Launch</Text>
								<Text color={"gray.400"}>
									Officially lauch Adaconda on Pancakeswap
								</Text>
							</VStack>
						</HStack>
						<HStack align={"top"} data-aos="zoom-out">
							<Box color={"white"} px={2}>
								<Icon as={VscLoading} />
							</Box>
							<VStack align={"start"}>
								<Text fontWeight={600}>Listing Platforms</Text>
								<Text color={"gray.400"}>
									Listing on Coinsniper, Coingecko and many more
								</Text>
							</VStack>
						</HStack>
						<HStack align={"top"} data-aos="zoom-out">
							<Box color={"white"} px={2}>
								<Icon as={VscLoading} />
							</Box>
							<VStack align={"start"}>
								<Text fontWeight={600}>Marketing Collaboration</Text>
								<Text color={"gray.400"}>
									Starting the “Promoting Plan” that we made carefully
								</Text>
							</VStack>
						</HStack>
						<HStack align={"top"} data-aos="zoom-out">
							<Box color={"white"} px={2}>
								<Icon as={VscLoading} />
							</Box>
							<VStack align={"start"}>
								<Text fontWeight={600}>Contract Logo</Text>
								<Text color={"gray.400"}>
									We will update the contract of Adaconda on bscscan so Adaconda
									have a logo
								</Text>
							</VStack>
						</HStack>
						<HStack align={"top"} data-aos="zoom-out">
							<Box color={"white"} px={2}>
								<Icon as={VscLoading} />
							</Box>
							<VStack align={"start"}>
								<Text fontWeight={600}>To be Announced! </Text>
								<Text color={"gray.400"}>
									We will announce the next update here, so stay tuned!
								</Text>
							</VStack>
						</HStack>
					</SimpleGrid>
				</Container>
			</Box>
			<svg
				data-name="Layer 1"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 1200 120"
				preserveAspectRatio="none"
				height="60px"
				width="100%"
			>
				<path
					d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
					className="shape-fill"
					fill="#000000"
					fillOpacity="1"
				></path>
			</svg>
		</Box>
	);
}
