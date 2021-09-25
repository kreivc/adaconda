import React from "react";
import Image from "next/image";
import Mockup from "../assets/Howtobuy_mockup.png";

export default function Howto() {
	return (
		<section
			className="flex items-center justify-center py-16 w-full bg-[#FBFAF5]"
			id="howtobuy"
		>
			<div className="max-w-6xl px-8 mx-auto md:px-16 xl:px-10">
				<div className="flex flex-col items-center lg:flex-row justify-center">
					<div
						className="flex flex-col items-start justify-center w-full h-full pr-8 mb-10 lg:mb-0 lg:w-1/2"
						data-aos="fade-up-right"
					>
						<h2 className="text-4xl font-extrabold leading-10 tracking-tight text-[#01bf71] sm:text-5xl sm:leading-none md:text-6xl lg:text-5xl xl:text-6xl">
							How to buy
						</h2>
						<p className="my-6 text-lg text-black">
							Don't forget to connect your wallet to Pancakeswap, then copy
							Adaconda address on the landing page above and swap. Just hold and
							enjoy a huge cumulative gain + free ADA.
						</p>
						<div className="flex space-x-4">
							<a
								href="https://pancakeswap.finance/"
								target="_blank"
								className="flex items-center justify-center px-8 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-[#01bf71] border border-transparent rounded-md shadow hover:bg-[#3bc98d] focus:outline-none md:py-4 md:text-lg md:px-10"
							>
								Buy Now
							</a>
							<a
								href="https://poocoin.app/tokens/0x301dfc30734c583d0049b0773e3edce94416690f"
								target="_blank"
								className="flex items-center justify-center px-8 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-[#01bf71] border border-transparent rounded-md shadow hover:bg-[#3bc98d] focus:outline-none md:py-4 md:text-lg md:px-10"
							>
								Chart
							</a>
						</div>
					</div>
					<div className=" w-full lg:w-1/4" data-aos="fade-down-left">
						<Image src={Mockup} alt="howtobuy" />
					</div>
				</div>
			</div>
		</section>
	);
}
