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
	// const { toggleColorMode: toggleMode } = useColorMode();
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
			zIndex={99}
		>
			<CloseButton
				aria-label="Close menu"
				justifySelf="self-start"
				onClick={mobileNav.onClose}
			/>
			<Link to="about" smooth={true} duration={500} spy={true} exact="true">
				<Button w="full" variant="ghost" onClick={mobileNav.onClose}>
					About
				</Button>
			</Link>
			<Link
				to="tokenomics"
				smooth={true}
				duration={500}
				spy={true}
				exact="true"
			>
				<Button w="full" variant="ghost" onClick={mobileNav.onClose}>
					Tokenomics
				</Button>
			</Link>
			<Link to="timeline" smooth={true} duration={500} spy={true} exact="true">
				<Button w="full" variant="ghost" onClick={mobileNav.onClose}>
					Timeline
				</Button>
			</Link>
			<Link to="howtobuy" smooth={true} duration={500} spy={true} exact="true">
				<Button w="full" variant="ghost" onClick={mobileNav.onClose}>
					How To Buy
				</Button>
			</Link>
			<Button
				as="a"
				href="https://pancakeswap.finance/"
				target="_blank"
				w="full"
				variant="ghost"
				bg="#3bc98d"
				onClick={mobileNav.onClose}
			>
				Buy On Pancake
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
				borderTopColor="#3bc98d"
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
							<Link to="/" smooth={true} duration={500} spy={true} exact="true">
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
								<Link
									to="about"
									smooth={true}
									duration={500}
									spy={true}
									exact="true"
								>
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
								</Link>
								<Link
									to="tokenomics"
									smooth={true}
									duration={500}
									spy={true}
									exact="true"
								>
									<Button
										bg={bg}
										color="gray.500"
										display="inline-flex"
										alignItems="center"
										fontSize="md"
										_hover={{ color: cl }}
										_focus={{ boxShadow: "none" }}
									>
										Tokenomics
									</Button>
								</Link>
								<Link
									to="timeline"
									smooth={true}
									duration={500}
									spy={true}
									exact="true"
								>
									<Button
										bg={bg}
										color="gray.500"
										display="inline-flex"
										alignItems="center"
										fontSize="md"
										_hover={{ color: cl }}
										_focus={{ boxShadow: "none" }}
									>
										Timeline
									</Button>
								</Link>
								<Link
									to="hotobuy"
									smooth={true}
									duration={500}
									spy={true}
									exact="true"
								>
									<Button
										bg={bg}
										color="gray.500"
										display="inline-flex"
										alignItems="center"
										fontSize="md"
										_hover={{ color: cl }}
										_focus={{ boxShadow: "none" }}
									>
										How To Buy
									</Button>
								</Link>
							</HStack>
						</Flex>
						<Flex justify="flex-end" align="center" color="gray.400">
							<HStack spacing="5" display={{ base: "none", md: "flex" }}>
								<Button
									colorScheme="brand"
									bg="#3bc98d"
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
