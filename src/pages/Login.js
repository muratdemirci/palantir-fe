import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../layouts/Footer";
import Header from "../layouts/Header";
import axios from "axios";

function Login() {
	const navigate = useNavigate();

	function handleSubmit(e) {
		e.preventDefault();
		const formData = {
			email: e.target.elements.email.value,
			password: e.target.elements.password.value,
		};

		axios
			.post("http://localhost:8090/api/v1/auth/login", formData)
			.then((response) => {
				localStorage.setItem("accessToken", response.data.accessToken);
				localStorage.setItem("email", response.data.email);
				localStorage.setItem("username", response.data.username);
				localStorage.setItem("isLoggedIn", true);
				setTimeout(() => {
					navigate("/dashboard");
				}, 1000);
			});
	}

	useEffect(() => {
		if (localStorage.getItem("isLoggedIn")) {
			navigate("/dashboard");
		}
	}, []);

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
								<form class="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
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
											placeholder="your password"
											class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
											required=""
										/>
									</div>

									<button
										onClick={() => {
											handleSubmit();
										}}
										type="submit"
										style={{ backgroundColor: "hsl(262, 57%, 75%)" }}
										class="w-full text-white hover:bg-primary-700 focus:pink-200 focus:outline-none focus:ring-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-primary-600"
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
