import React from "react";
import "./assets/styles/main.css";
import {HiMenuAlt3} from "react-icons/hi";
import placeholder from "./assets/images/placeholder.jpg";
const App = () => {
	return (
		<div>
			<header className="md:p-8 p-4 md:px-16 flex flex-row justify-between w-screen">
				<div className="text-sm">
					<div className="flex md:hidden">
						<HiMenuAlt3 />
					</div>
					<nav className="hidden md:flex">
						<ul className="flex flex-row ">
							<li className="mx-2 hover:border-b border-black">
								<a href="#">About Me</a>
							</li>
							<li className="mx-2 hover:border-b border-black">
								<a href="#">Portfolio</a>
							</li>
							<li className="mx-2 hover:border-b border-black">
								<a href="#">Cooperation</a>
							</li>
						</ul>
					</nav>
				</div>
				<div className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white">
					<p>R</p>
				</div>
				<div className="md:mr-16">
					<button className="px-7 py-3 bg-neutral-300 text-black rounded-3xl font-semibold">
						Contact me
					</button>
				</div>
			</header>

			<div className="hero p-4 md:p-8 md:px-16 mt-3 flex md:flex-col flex-col ">
				<div className="h-2/4 md:hidden">
					<img src={placeholder} alt="placeholder" className="w-30" />
				</div>
				<div className="mb-8">
					<h1 className="md:text-7xl text-4xl tracking-wide my-5">
						My name <br /> is <b>Joseph</b>
					</h1>
					<p className="md:w-2/5 text-sm">
						I am a professional programmer with more than ten years of
						experience.
					</p>
					<button className="px-12 py-3 bg-[#fe5b02] text-white rounded-3xl font-semibold my-5">
						Hire Me
					</button>
				</div>
				<div className="flex flex-col">
					{/* skillset */}
					<div className="flex flex-row items-center">
						<div className="px-8 py-2 bg-[#fe8e3e] mr-3 rounded-lg text-black">
							c++
						</div>
						<div className="px-8 py-2 bg-[#f46a07] mr-3 rounded-lg text-white">
							java
						</div>
					</div>
					<div className="flex flex-row items-center my-3">
						<div className="px-8 py-2 bg-[#242021] mr-3 text-white rounded-lg">
							php
						</div>
						<div className="px-8 py-2 bg-[#e1e1e1] mr-3 rounded-lg text-black">
							javascript
						</div>
					</div>
				</div>
			</div>
			<div className="hidden md:flex">
				<div className="redBg"></div>
			</div>

			<section id="project" className="mt-10 min-h-screen">
				<div className="flex md:flex-row flex-col md:px-16 px-4 justify-between">
					<h1 className="md:text-3xl text-xl font-bold">
						Latest Projects
					</h1>
					<div className="flex flex-row">
						<p>All projects</p>
						<div className="ml-5 hidden md:flex">ic</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default App;
