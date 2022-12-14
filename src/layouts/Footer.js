import React from "react";

function Footer() {
	return (
		<div
			className="absolute bottom-0 text-purple-50 left-0 right-0 text-purple-50"
			style={{ backgroundColor: "rgb(167, 146, 202)" }}
		>

			<footer class="p-4 rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
				<span class="text-sm  sm:text-center dark:text-gray-400">© Teknasyon Hackathon 22 - Yüzük Kardeşliği Hackathon, Our Team 2022 Mordor İdman Yurdu™. All Rights Reserved.
				</span>
				<ul class="flex flex-wrap items-center mt-3 text-sm dark:text-gray-400 sm:mt-0">
					<li>
						<a href="#" class="mr-4 hover:underline md:mr-6 ">Hakkında</a>
					</li>
					<li>
						<a href="#" class="mr-4 hover:underline md:mr-6">Gizlilik Politikası</a>
					</li>
					<li>
						<a href="#" class="hover:underline">İletişime Geç</a>
					</li>
				</ul>
			</footer>

		</div>
	);
}

export default Footer;
