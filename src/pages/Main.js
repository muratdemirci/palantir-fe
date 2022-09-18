import React from "react";
import { Link } from "react-router-dom";
import Slider from "../components/Slider";
import Footer from "../layouts/Footer";
import Header from "../layouts/Header";

function Main() {

	const showStats = () => {
		document.getElementById("stats").classList.remove('hidden');
		document.getElementById("about").classList.add('hidden');
		document.getElementById("faq").classList.add('hidden');
	}

	const showAbout = () => {
		document.getElementById("stats").classList.add('hidden');
		document.getElementById("about").classList.remove('hidden');
		document.getElementById("faq").classList.add('hidden');
	}

	const showFaq = () => {
		document.getElementById("stats").classList.add('hidden');
		document.getElementById("about").classList.add('hidden');
		document.getElementById("faq").classList.remove('hidden');
	}


	return (
		<div>
			<Header />

			<div className="grid grid-cols-2 gap-8">

				<div className="col-span-1  ml-5 p-5 rounded-lg bg-white">
					<div class="p-4 w-full text-center bg-white rounded-lg border shadow-md sm:p-8 ">
						<h5 class="mb-2 text-3xl font-bold text-gray-900 ">Work fast from anywhere</h5>
						<p class="mb-5 text-base text-gray-500 sm:text-lg">Stay up to date and move work forward with Flowbite on iOS &amp; Android. Download the app today.</p>
						<div class="justify-center items-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
							<Link
								to="/prices"
								style={{ backgroundColor: "#87A2FB", color: "white" }}
								className="
										w-full sm:w-auto bg-gray-800 hover:bg-gray-700 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5"
							>
								<div class="text-center ">
									<div class="mb-1 text-xs">Look At The Now</div>
									<div class="-mt-1 font-sans text-sm font-semibold">Price Page</div>
								</div>
							</Link>
						</div>
					</div>

				</div>

				<div className="col-span-1 mr-5 justifty-center">
					<Slider className="p-5 bg-white" />
				</div>
			</div>


			<div class="mx-5 mt-12 bg-white rounded-lg border shadow-md">
				<div class="sm:hidden">
					<label for="tabs" class="sr-only">Select tab</label>
					<select id="tabs" class="bg-gray-50 border-0 border-b border-gray-200 text-gray-900 sm:text-sm rounded-t-lg  block w-full p-2.5">
						<option>Statistics</option>
						<option>Services</option>
						<option>FAQ</option>
					</select>
				</div>
				<ul class="hidden text-sm font-medium text-center text-gray-500 rounded-lg divide-x divide-gray-200 sm:flex dark:divide-gray-600 dark:text-gray-400" id="fullWidthTab" data-tabs-toggle="#fullWidthTabContent" role="tablist">
					<li class="w-full">
						<button id="stats-tab" onClick={showStats} data-tabs-target="#stats" type="button" role="tab" aria-controls="stats" aria-selected="true" class="inline-block p-4 w-full bg-gray-50 rounded-tl-lg hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600 text-blue-600 hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-500 border-blue-600 dark:border-blue-500">Statistics</button>
					</li>
					<li class="w-full">
						<button id="about-tab" onClick={showAbout} data-tabs-target="#about" type="button" role="tab" aria-controls="about" aria-selected="true" class="inline-block p-4 w-full bg-gray-50 hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-transparent text-gray-500 hover:text-gray-600 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300">Services</button>
					</li>
					<li class="w-full">
						<button id="faq-tab" onClick={showFaq} data-tabs-target="#faq" type="button" role="tab" aria-controls="faq" aria-selected="false" class="inline-block p-4 w-full bg-gray-50 rounded-tr-lg hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-transparent text-gray-500 hover:text-gray-600 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300">FAQ</button>
					</li>
				</ul>
				<div id="fullWidthTabContent" class="border-t border-gray-200 dark:border-gray-600">
					<div class="p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800" id="stats" role="tabpanel" htmlFor="stats-tab">
						<dl class="grid grid-cols-2 gap-8 p-4 mx-auto max-w-screen-xl text-gray-900 sm:grid-cols-3 xl:grid-cols-6 dark:text-white sm:p-8">
							<div class="flex flex-col justify-center items-center">
								<dt class="mb-2 text-3xl font-extrabold">73M+</dt>
								<dd class="font-light text-gray-500 dark:text-gray-400">Developers</dd>
							</div>
							<div class="flex flex-col justify-center items-center">
								<dt class="mb-2 text-3xl font-extrabold">100M+</dt>
								<dd class="font-light text-gray-500 dark:text-gray-400">Public repositories</dd>
							</div>
							<div class="flex flex-col justify-center items-center">
								<dt class="mb-2 text-3xl font-extrabold">1000s</dt>
								<dd class="font-light text-gray-500 dark:text-gray-400">Open source projects</dd>
							</div>
							<div class="flex flex-col justify-center items-center">
								<dt class="mb-2 text-3xl font-extrabold">1B+</dt>
								<dd class="font-light text-gray-500 dark:text-gray-400">Contributors</dd>
							</div>
							<div class="flex flex-col justify-center items-center">
								<dt class="mb-2 text-3xl font-extrabold">90+</dt>
								<dd class="font-light text-gray-500 dark:text-gray-400">Top Forbes companies</dd>
							</div>
							<div class="flex flex-col justify-center items-center">
								<dt class="mb-2 text-3xl font-extrabold">4M+</dt>
								<dd class="font-light text-gray-500 dark:text-gray-400">Organizations</dd>
							</div>
						</dl>
					</div>
					<div class="hidden p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800" id="about" role="tabpanel" htmlFor="about-tab">
						<h2 class="mb-5 text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white">We invest in the world’s potential</h2>
						<ul role="list" class="space-y-4 text-gray-500 dark:text-gray-400">
							<li class="flex space-x-2">
								<svg class="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
								<span class="font-light leading-tight">Dynamic reports and dashboards</span>
							</li>
							<li class="flex space-x-2">
								<svg class="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
								<span class="font-light leading-tight">Templates for everyone</span>
							</li>
							<li class="flex space-x-2">
								<svg class="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
								<span class="font-light leading-tight">Development workflow</span>
							</li>
							<li class="flex space-x-2">
								<svg class="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
								<span class="font-light leading-tight">Limitless business automation</span>
							</li>
						</ul>
					</div>
					<div class="hidden p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800" id="faq" role="tabpanel" htmlFor="faq-tab">
						<div id="accordion-flush" data-accordion="collapse" data-active-classes="bg-white dark:bg-gray-800 text-gray-900 dark:text-white" data-inactive-classes="text-gray-500 dark:text-gray-400">
							<h2 id="accordion-flush-heading-3">
								<button type="button" class="flex justify-between items-center py-5 w-full font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400" data-accordion-target="#accordion-flush-body-3" aria-expanded="false" aria-controls="accordion-flush-body-3">
									<span>What are the differences between Flowbite and Tailwind UI?</span>
								</button>
							</h2>
							<div id="accordion-flush-body-3" class="hidden">
								<div class="py-5 font-light border-b border-gray-200 dark:border-gray-700">
									<p class="mb-2 text-gray-500 dark:text-gray-400">The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.</p>
									<p class="mb-2 text-gray-500 dark:text-gray-400">However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.</p>
									<p class="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>


			<Footer />
		</div>
	);
}

export default Main;
