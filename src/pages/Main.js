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
	
	const showQuestion = () => {
		document.getElementById("accordion-flush-body-3").classList.remove('hidden');
	}

	return (
		<div>
			<Header />

			<div className="grid grid-cols-2 gap-8">

				<div className="col-span-1 ml-5 p-5 rounded-lg bg-white">
					<div class="p-4 w-full text-center bg-white rounded-lg border shadow-md sm:p-8 ">
						<h5 class="mb-2 text-3xl font-bold text-gray-900 ">Bilinçli ve efektif kripto yatırımı</h5>
						<p class="mb-5 text-base text-gray-700 sm:text-xl">Kripto para piyasasındaki spekülasyonlara yakalanmadan bilinçli yatırım yapabilmeniz için ve piyasadaki düşüncelere hakim olabilmeniz için hizmet sunuyoruz.</p>
						<div class="justify-center items-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
							<Link
								to="/prices"
								style={{ backgroundColor: "#87A2FB", color: "white" }}
								className="
										w-full sm:w-auto bg-gray-800 hover:bg-gray-700 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5"
							>
								<div class="text-center ">
									<div class="-mt-1 font-sans text-xl font-semibold">Hemen Başlayın</div>
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
				<ul class="hidden text-sm font-medium text-center text-gray-500 rounded-lg divide-x divide-gray-200 sm:flex dark:divide-gray-600 dark:text-gray-400" id="fullWidthTab" data-tabs-toggle="#fullWidthTabContent" role="tablist">
					<li class="w-full">
						<button id="stats-tab" onClick={showStats} data-tabs-target="#stats" type="button" role="tab" aria-controls="stats" aria-selected="true" class="inline-block p-4 w-full bg-gray-50 rounded-tl-lg hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600 text-blue-600 hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-500 border-blue-600 dark:border-blue-500">İstatistikler</button>
					</li>
					<li class="w-full">
						<button id="about-tab" onClick={showAbout} data-tabs-target="#about" type="button" role="tab" aria-controls="about" aria-selected="true" class="inline-block p-4 w-full bg-gray-50 hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-transparent text-gray-500 hover:text-gray-600 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300">Servisler</button>
					</li>
					<li class="w-full">
						<button id="faq-tab" onClick={showFaq} data-tabs-target="#faq" type="button" role="tab" aria-controls="faq" aria-selected="false" class="inline-block p-4 w-full bg-gray-50 rounded-tr-lg hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-transparent text-gray-500 hover:text-gray-600 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300">SSS</button>
					</li>
				</ul>
				<div id="fullWidthTabContent" class="border-t border-gray-200 dark:border-gray-600">
					<div class="p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800" id="stats" role="tabpanel" htmlFor="stats-tab">
						<dl class="grid grid-cols-2 gap-8 p-4 mx-auto max-w-screen-xl text-gray-900 sm:grid-cols-2 xl:grid-cols-4 dark:text-white sm:p-8">
							<div class="flex flex-col justify-center items-center">
								<dt class="mb-2 text-3xl font-extrabold">5M+</dt>
								<dd class="font-light text-gray-500 dark:text-gray-400">Kullanıcılar</dd>
							</div>
							<div class="flex flex-col justify-center items-center">
								<dt class="mb-2 text-3xl font-extrabold">3M+</dt>
								<dd class="font-light text-gray-500 dark:text-gray-400">Günde Atılan İstek</dd>
							</div>
							<div class="flex flex-col justify-center items-center">
								<dt class="mb-2 text-3xl font-extrabold">1B+</dt>
								<dd class="font-light text-gray-500 dark:text-gray-400">Yılda Atılan İstek</dd>
							</div>
							<div class="flex flex-col justify-center items-center">
								<dt class="mb-2 text-3xl font-extrabold">90+</dt>
								<dd class="font-light text-gray-500 dark:text-gray-400">Yatırım Yapılan Şirketler</dd>
							</div>
						</dl>
					</div>
					<div class="hidden p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800" id="about" role="tabpanel" htmlFor="about-tab">
						<h2 class="mb-5 text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white">Dünyanın potansiyeline yatırım yapıyoruz</h2>
						<ul role="list" class="space-y-4 text-gray-500 dark:text-gray-400">
							<li class="flex space-x-2">
								<svg class="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
								<span class="font-light leading-tight">Dinamik raporlar ve paneller</span>
							</li>
							<li class="flex space-x-2">
								<svg class="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
								<span class="font-light leading-tight">Herkes için şablonlar</span>
							</li>
							<li class="flex space-x-2">
								<svg class="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
								<span class="font-light leading-tight">Geliştirme iş akışı</span>
							</li>
							<li class="flex space-x-2">
								<svg class="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
								<span class="font-light leading-tight">Sınırsız iş otomasyonu</span>
							</li>
						</ul>
					</div>
					<div class="hidden p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800" id="faq" role="tabpanel" htmlFor="faq-tab">
						<div id="accordion-flush" data-accordion="collapse" data-active-classes="bg-white dark:bg-gray-800 text-gray-900 dark:text-white" data-inactive-classes="text-gray-500 dark:text-gray-400">
							<h2 id="accordion-flush-heading-3">
								<button type="button" onClick={showQuestion} class="flex justify-between items-center py-5 w-full font-medium text-left text-gray-600 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400" data-accordion-target="#accordion-flush-body-3" aria-expanded="false" aria-controls="accordion-flush-body-3">
									<span>Siz Kimsiniz?</span>
								</button>
							</h2>
							<div id="accordion-flush-body-3" class="hidden">
								<div class="py-5 font-light border-b border-gray-200">
									<p class="mb-2 text-gray-700 dark:text-gray-400">
										Biz, piyasaki kripto para ile ilgili olan olayları, yapılan manipülasyonları ve piyasanın buna göre nasıl bir şekil alabileceğini yorumlayan ve ona göre şemalar sunan bir ekibiz.
									</p>
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
