import React from "react";
import {
	chakra,
	HStack,
	Flex,
	IconButton,
	useColorModeValue,
	useDisclosure,
	CloseButton,
	VStack,
	Button,
	useColorMode,
} from "@chakra-ui/react";
import { useViewportScroll } from "framer-motion";
import { AiFillHome, AiOutlineMenu } from "react-icons/ai";
import { BsFillCameraVideoFill } from "react-icons/bs";
import { FaMoon, FaSun } from "react-icons/fa";
import Logo from "../assets/Adaconda.png";
import Image from "next/image";
import { Link } from "react-scroll";

export default function Header() {
	const { toggleColorMode: toggleMode } = useColorMode();
	const text = useColorModeValue("dark", "light");
	const SwitchIcon = useColorModeValue(FaMoon, FaSun);
	const bg = useColorModeValue("white", "gray.800");
	const ref = React.useRef();
	const [y, setY] = React.useState(0);
	const { height = 0 } = ref.current ? ref.current.getBoundingClientRect() : {};

	const { scrollY } = useViewportScroll();
	React.useEffect(() => {
		return scrollY.onChange(() => setY(scrollY.get()));
	}, [scrollY]);
	const cl = useColorModeValue("gray.800", "white");
	const mobileNav = useDisclosure();

	const MobileNavContent = (
		<VStack
			pos="absolute"
			top={0}
			left={0}
			right={0}
			display={mobileNav.isOpen ? "flex" : "none"}
			flexDirection="column"
			p={2}
			pb={4}
			m={2}
			bg={bg}
			spacing={3}
			rounded="sm"
			shadow="sm"
		>
			<CloseButton
				aria-label="Close menu"
				justifySelf="self-start"
				onClick={mobileNav.onClose}
			/>
			<Button w="full" variant="ghost" leftIcon={<AiFillHome />}>
				Dashboard
			</Button>
			<Button w="full" variant="ghost" leftIcon={<BsFillCameraVideoFill />}>
				About
			</Button>
			<Button w="full" variant="ghost" leftIcon={<BsFillCameraVideoFill />}>
				Videos
			</Button>
		</VStack>
	);

	return (
		<React.Fragment>
			<chakra.header
				ref={ref}
				shadow={y > height ? "sm" : undefined}
				transition="box-shadow 0.2s"
				bg={bg}
				borderTop="6px solid"
				borderTopColor="teal"
				w="full"
				overflowY="hidden"
				borderBottomWidth={2}
				borderBottomColor={useColorModeValue("gray.200", "gray.900")}
			>
				<chakra.div h="4.5rem" mx="auto" maxW="1200px">
					<Flex
						w="full"
						h="full"
						px="6"
						alignItems="center"
						justifyContent="space-between"
					>
						<Flex align="flex-start">
							<Link
								to="about"
								smooth={true}
								duration={500}
								spy={true}
								exact="true"
								offset={-80}
							>
								<HStack>
									{/* <Image
										src={Logo}
										alt="logo_adaconda"
										width="50"
										height="50"
									/> */}
									<chakra.h1
										className="text-shadow"
										as="button"
										color="white"
										fontWeight="bold"
										fontSize="20px"
									>
										Adaconda
									</chakra.h1>
								</HStack>
							</Link>
						</Flex>
						<Flex>
							<HStack spacing="5" display={{ base: "none", md: "flex" }}>
								<Button
									bg={bg}
									color="gray.500"
									display="inline-flex"
									alignItems="center"
									fontSize="md"
									_hover={{ color: cl }}
									_focus={{ boxShadow: "none" }}
								>
									About
								</Button>
								<Button
									bg={bg}
									color="gray.500"
									display="inline-flex"
									alignItems="center"
									fontSize="md"
									_hover={{ color: cl }}
									_focus={{ boxShadow: "none" }}
								>
									Blog
								</Button>
								<Button
									bg={bg}
									color="gray.500"
									display="inline-flex"
									alignItems="center"
									fontSize="md"
									_hover={{ color: cl }}
									_focus={{ boxShadow: "none" }}
								>
									Pricing
								</Button>
							</HStack>
						</Flex>
						<Flex justify="flex-end" align="center" color="gray.400">
							<HStack spacing="5" display={{ base: "none", md: "flex" }}>
								<Button
									colorScheme="brand"
									bg="teal"
									variant="solid"
									size="sm"
									color="white"
								>
									Buy On Pancake
								</Button>
							</HStack>
							{/* <IconButton
								size="md"
								fontSize="lg"
								aria-label={`Switch to ${text} mode`}
								variant="ghost"
								color="current"
								ml={{ base: "0", md: "3" }}
								onClick={toggleMode}
								icon={<SwitchIcon />}
							/> */}
							<IconButton
								display={{ base: "flex", md: "none" }}
								aria-label="Open menu"
								fontSize="20px"
								color={useColorModeValue("gray.800", "inherit")}
								variant="ghost"
								icon={<AiOutlineMenu />}
								onClick={mobileNav.onOpen}
							/>
						</Flex>
					</Flex>
					{MobileNavContent}
				</chakra.div>
			</chakra.header>
		</React.Fragment>
	);
}
