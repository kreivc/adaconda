import Head from "next/head";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Tokenomics from "../components/Tokenomics";
import Timeline from "../components/Timeline";
import Howtobuy from "../components/Howtobuy";
import Footer from "../components/Footer";
import ParticleBackground from "../components/ParticleBg";

export default function Home() {
	return (
		<div>
			<Head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="shortcut icon" href="./Anaconda.png" />

				{/* <!-- Primary Meta Tags --> */}
				<title>Adaconda</title>
				<meta name="title" content="Adaconda" />
				<meta
					name="description"
					content="Adaconda is a community based token, which means the development
							of the project is done by its community members. The tokenomics
							utility model is to be used for paying for goods and services. It
							is also intended to be used as a reward to the users of the
							platform."
				/>

				{/* <!-- Open Graph / Facebook --> */}
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://adaconda.co/" />
				<meta property="og:title" content="Adaconda" />
				<meta
					property="og:description"
					content="Adaconda is a community based token, which means the development
							of the project is done by its community members. The tokenomics
							utility model is to be used for paying for goods and services. It
							is also intended to be used as a reward to the users of the
							platform."
				/>
				<meta
					property="og:image"
					content="https://i.ibb.co/twGcK9L/Anaconda-flipped.png"
				/>

				{/* <!-- Twitter --> */}
				<meta property="twitter:card" content="summary_large_image" />
				<meta property="twitter:url" content="https://adaconda.co/" />
				<meta property="twitter:title" content="Adaconda" />
				<meta
					property="twitter:description"
					content="Adaconda is a community based token, which means the development
							of the project is done by its community members. The tokenomics
							utility model is to be used for paying for goods and services. It
							is also intended to be used as a reward to the users of the
							platform."
				/>
				<meta
					property="twitter:image"
					content="https://i.ibb.co/twGcK9L/Anaconda-flipped.png"
				/>
			</Head>
			<Navbar />
			<Hero />
			<div id="particles-js"></div>
			<ParticleBackground />
			<About />
			<Tokenomics />
			<Timeline />
			<Howtobuy />
			<Footer />
			<style jsx global>{`
				html,
				body {
					padding: 0;
					margin: 0;
					font-family: Ubuntu;
				}

				* {
					box-sizing: border-box;
				}
			`}</style>
		</div>
	);
}
