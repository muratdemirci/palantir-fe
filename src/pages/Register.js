import React, { useEffect } from "react";
import Footer from "../layouts/Footer";
import Header from "../layouts/Header";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
	const navigate = useNavigate();

	function handleSubmit(e) {
		e.preventDefault();
		const formData = {
			email: e.target.elements.email.value,
			name: e.target.elements.email.value,
			password: e.target.elements.password.value,
		};

		axios
			.post("http://localhost:8090/api/v1/auth/register", formData)
			.then((response) => {
				console.log(response);
				setTimeout(() => {
					navigate("/login");
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
						<div style={{ backgroundColor: "#c8b2ed" }} class="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
							<div class="p-6 space-y-4 md:space-y-6 sm:p-8">
								<form class="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
									<div>
										<label
											for="name"
											class="text-white block mb-2 text-sm font-medium"
										>
											İsim
										</label>
										<input
											type="name"
											name="name"
											id="name"
											class="bg-gray-50 border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
											placeholder="Name"
											required=""
										/>
									</div>
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
											class="bg-gray-50 border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
											placeholder="name@company.com"
											required=""
										/>
									</div>
									<div>
										<label
											for="password"
											class="text-white block mb-2 text-sm font-medium"
										>
											Şifre
										</label>
										<input
											type="password"
											name="password"
											id="password"
											placeholder="••••••••"
											class="bg-gray-50 border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
											required=""
										/>
									</div>
									<div>
										<label
											for="confirmPassword"
											class="text-white block mb-2 text-sm font-medium"
										>
											Şifreyi Onayla
										</label>
										<input
											type="password"
											name="confirmPassword"
											id="confirmPassword"
											placeholder="••••••••"
											class="bg-gray-50 border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
											required=""
										/>
									</div>
									<button
										type="submit"
										style={{ backgroundColor: "hsl(262, 57%, 75%)" }}
										class="w-full text-white hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-primary-600"
									>
										Hesap Oluştur
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

export default Register;
