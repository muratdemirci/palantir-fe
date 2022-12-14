import React from "react";

function Auth() {
	return (
		<div className="text-white">
			<div>
				<div class="w-full bg-gray-200 rounded-full dark:bg-gray-700">
					<div
						class="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
						style={{ width: "45%" }}
					>
						45%
					</div>
				</div>
				<div className="text-left ">
					<h2 className="text-purple-600 font-medium text-xl">Bitcoin Dominasyonu</h2>
					<p className="text-purple-400">
						Kriptonun piyasa üzerindeki dominasyonu
					</p>
				</div>
			</div>

			<div>
				<div class="w-full bg-gray-200 rounded-full dark:bg-gray-700 mt-5">
					<div
						class="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
						style={{ width: "65%" }}
					>
						65%
					</div>
				</div>
				<div className="text-left ">
					<h2 className="text-purple-600 font-medium text-xl">Doğruluk Oranı</h2>
					<p className="text-purple-400">
						Yapılan manipülasyonlara göre şablonların doğruluk oranı
					</p>
				</div>
			</div>
		</div>
	);
}

export default Auth;
