/* eslint-disable @next/next/no-document-import-in-page */
import { ColorModeScript } from "@chakra-ui/react";
import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import theme from "../styles/theme";

export default class Document extends NextDocument {
	render() {
		return (
			<Html lang="en">
				<Head>
					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link
						rel="preconnect"
						href="https://fonts.gstatic.com"
						crossOrigin="true"
					/>
					<link
						href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap"
						rel="stylesheet"
					/>
					<style>
						{`	
							html {
								overflow-y: auto;
								overflow-x: hidden;
							}

							body {
								overflow: hidden;
								position: relative;
							}

							html::-webkit-scrollbar {
								display: none;
							}

							html::-webkit-scrollbar {
								width: 0.62em;
							}

							html::-webkit-scrollbar-track {
								background-color: white;
							}

							html::-webkit-scrollbar-thumb {
								background-color: #01bf71;
								border-radius: 15px;
							}

							canvas {
								top: 0;
								left: 0;
								position: absolute;
								z-index: -1;
							}`}
					</style>
				</Head>
				<body>
					<ColorModeScript initialColorMode={theme.config.initialColorMode} />
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
