import React from "react";
import Particles from "react-particles-js";
import ParticleConfig from "../styles/particle-config";

export default function ParticleBackground() {
	return <Particles className="overflow-hidden" params={ParticleConfig} />;
}
