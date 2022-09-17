import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../layouts/Footer";
import Header from "../layouts/Header";
import UserService from "../services/UserService";

function Login() {
	const [inputs, setInputs] = useState({
		email: "",
		password: "",
	});

	const navigate = useNavigate();

	let userService = new UserService();

	const handleValues = (e) => {
		e.preventDefault();
		setInputs({
			email: e.target.elements.email.value,
			password: e.target.elements.password.value,
		});
	};

	useEffect(() => {
		userService.login(inputs).then((result) => {
			localStorage.setItem("AccessToken", result.data.accessToken);
			localStorage.setItem("Email", result.data.email);
			localStorage.setItem("IsLoggedIn", true);
		});
	}, [inputs]);

	if (localStorage.getItem("IsLoggedIn")) {
		navigate("/dashboard");
	}

	return (
		<div>
			<Header />
			<div className="m-8">
				<section>
					<div class="flex flex-col items-center justify-center mt-8">
						<div
							style={{ backgroundColor: "#c8b2ed" }}
							class="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0"
						>
							<div class="p-6 space-y-4 md:space-y-6 sm:p-8">
								<form class="space-y-4 md:space-y-6" onSubmit={handleValues}>
									<div>
										<label
											for="email"
											class="text-white block mb-2 text-sm font-medium"
										>
											E-Mail
										</label>
										<input
											type="email"
											name="email"
											id="email"
											class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
											placeholder="name@company.com"
											required=""
										/>
									</div>
									<div>
										<label
											for="password"
											class="text-white block mb-2 text-sm font-medium"
										>
											Password
										</label>
										<input
											type="password"
											name="password"
											id="password"
											placeholder="••••••••"
											class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
											required=""
										/>
									</div>
									<button
										type="submit"
										style={{ backgroundColor: "#2663EB" }}
										class="w-full text-white hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-primary-600"
									>
										Sign in
									</button>
								</form>
							</div>
						</div>
					</div>
				</section>
			</div>
			<Footer />
		</div>
	);
}

export default Login;
