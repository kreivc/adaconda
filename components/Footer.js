import React from "react";
import { FaTelegram, FaTwitter, FaPoo } from "react-icons/fa";
import { RiQrScan2Line } from "react-icons/ri";
import { Link } from "react-scroll";

export default function Footer() {
	return (
		<section className="bg-black">
			<div className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
				<nav className="flex flex-wrap justify-center -mx-5 -my-2">
					<div className="px-5 py-2">
						<Link
							to="home"
							smooth="true"
							duration={500}
							spy={true}
							exact="true"
							className="text-base leading-6 text-gray-400 hover:text-white cursor-pointer"
						>
							Home
						</Link>
					</div>
					<div className="px-5 py-2">
						<Link
							to="about"
							smooth="true"
							duration={500}
							spy={true}
							exact="true"
							className="text-base leading-6 text-gray-400 hover:text-white cursor-pointer"
						>
							About
						</Link>
					</div>
					<div className="px-5 py-2">
						<Link
							to="tokenomics"
							smooth="true"
							duration={500}
							spy={true}
							exact="true"
							className="text-base leading-6 text-gray-400 hover:text-white cursor-pointer"
						>
							Tokenomics
						</Link>
					</div>
					<div className="px-5 py-2">
						<Link
							to="timeline"
							smooth="true"
							duration={500}
							spy={true}
							exact="true"
							className="text-base leading-6 text-gray-400 hover:text-white cursor-pointer"
						>
							Timeline
						</Link>
					</div>
					<div className="px-5 py-2">
						<Link
							to="howtobuy"
							smooth="true"
							duration={500}
							spy={true}
							exact="true"
							className="text-base leading-6 text-gray-400 hover:text-white cursor-pointer"
						>
							How To Buy
						</Link>
					</div>
				</nav>
				<div className="flex justify-center mt-8 space-x-6">
					<a
						href="https://t.me/Adaconda"
						target="_blank"
						className="text-gray-400 hover:text-white"
					>
						<span className="sr-only">Telegram</span>
						<FaTelegram className="w-6 h-6" />
					</a>
					<a
						href="https://poocoin.app/tokens/0x301dfc30734c583d0049b0773e3edce94416690f"
						target="_blank"
						className="text-gray-400 hover:text-white"
					>
						<span className="sr-only">PooCoin</span>
						<FaPoo className="w-6 h-6" />
					</a>
					<a
						href="https://twitter.com/AdacondaBSC"
						target="_blank"
						className="text-gray-400 hover:text-white"
					>
						<span className="sr-only">Twitter</span>
						<FaTwitter className="w-6 h-6" />
					</a>
					<a
						href="https://bscscan.com/"
						target="_blank"
						className="text-gray-400 hover:text-white"
					>
						<span className="sr-only">BSCScan</span>
						<RiQrScan2Line className="w-6 h-6" />
					</a>
				</div>
				<p className="mt-8 text-base leading-6 text-center text-gray-400">
					© {new Date().getFullYear()} Adaconda. All rights reserved.
				</p>
			</div>
		</section>
	);
}
