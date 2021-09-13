import React, { useState } from "react";
import { HiArrowDown } from "react-icons/hi";
import { Link } from "react-scroll";
import { CopyToClipboard } from "react-copy-to-clipboard";
import HeroLogo from "../assets/Anaconda_flipped.png";
import Image from "next/image";
import ParticleBackground from "./ParticleBg";

export default function Hero() {
	const [copied, setCopied] = useState(false);

	return (
		<div
			className="relative container max-w-lg px-4 pt-20 pb-32 mx-auto text-left md:max-w-none md:text-center"
			id="home"
			data-aos="fade-up"
		>
			<div className="flex flex-wrap relative w-full items-center flex-row mx-auto justify-center space-x-0 md:space-x-10">
				<Image src={HeroLogo} alt="adaconda" width="300px" height="300px" />
				<h1
					className="text-5xl font-extrabold leading-10 tracking-tight text-left text-white md:text-left sm:leading-none md:text-6xl lg:text-7xl"
					data-aos="fade-up"
				>
					<span className="inline md:block">Adaconda</span>
					<span className="relative mt-2 text-transparent bg-clip-text bg-gradient-to-br from-[#3bc98d] to-[#46e4a2] md:inline-block">
						Big Snake For <br /> <span className="text-[#293cc7]">ADA</span>{" "}
						Holders
					</span>
				</h1>
			</div>
			{/* <div className="mx-auto mt-5 text-gray-500 md:mt-12 md:max-w-lg md:text-center lg:text-lg">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
				molestiae praesentium nihil ullam ad?
			</div> */}
			<div className="flex flex-col items-center mt-12 text-center">
				<span className="relative inline-flex w-full md:w-auto">
					<CopyToClipboard text="Not Release Yet">
						<button
							type="button"
							className="inline-flex items-center justify-center w-full px-8 py-4 text-base font-bold leading-6 text-white bg-[#3bc98d] border border-transparent rounded-lg md:w-auto hover:bg-[#3bc98d] focus:outline-none transition duration-150 ease-in-out"
							onClick={() => setCopied(!copied)}
						>
							Not Release Yet
						</button>
					</CopyToClipboard>
					<span className="absolute top-0 right-2 px-2 py-1 -mt-3 -mr-6 text-xs font-medium leading-tight text-white bg-[#293cc7] rounded-full">
						{copied ? "Copied" : "Click to copy"}
					</span>
				</span>
				<Link to="about" smooth={true} duration={500} spy={true} exact="true">
					<HiArrowDown className="animate-bounce h-7 w-7 my-7 text-[#3bc98d] cursor-pointer" />
				</Link>
			</div>
		</div>
	);
}
