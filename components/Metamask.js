import Mtm from "../assets/Metamask.png";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // optional
import Image from "next/image";

import React from "react";

export default function Metamask() {
	return (
		<>
			<Tippy content="Add to Metamask">
				<button
					disabled="true"
					onClick={async () => {
						const provider = window.web3.currentProvider;
						provider.sendAsync(
							{
								method: "metamask_watchAsset",
								params: {
									type: "ERC20",
									options: {
										address: "0xDb2DaF120120D60Dc5d08eBb4b06896a238a610a",
										symbol: "AdaZeus",
										decimals: 4,
										image: "https://i.ibb.co/MhqHVLY/Adazeus-logo-wolines.png",
									},
								},
								id: Math.round(Math.random() * 100000),
							},
							(err, added) => {
								console.log("provider returned", err, added);
								if (err || "error" in added) {
									this.setState({
										errorMessage: "There was a problem adding the token.",
										message: "",
									});
									return;
								}
								console.log("token added");
							}
						);
					}}
					style={{
						background: "none",
						border: "none",
						cursor: "pointer",
					}}
				>
					<Image src={Mtm} alt="" width="20px" height="20px" />
				</button>
			</Tippy>
		</>
	);
}
