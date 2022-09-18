import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./header.css";

function Header() {

	let isLoggedIn = localStorage.getItem("isLoggedIn");
	let username = localStorage.getItem("username");
	const navigate = useNavigate();

	const handleLogout = () => {
		localStorage.clear();

		setTimeout(() => {
			navigate('/');
		}, 1000);
	}

	return (
		<div
			style={{ backgroundColor: "rgb(167, 146, 202)" }}
			className="text-purple-50 rounded-lg mx-5"
		>
			<div class="text-xl flex justify-between m-5 p-3">
				<Link
					to="/"
					className="flex delay-75 duration-75 transform hover:text-indigo-600 transition ease-linear ml-10"
				>
					<button id="home-button">Palantir</button>
				</Link>

				<div>
					{
						isLoggedIn ? (
							<div>
								<Link
									to="/dashboard"
									className="mr-5 delay-75 duration-75 transform hover:text-indigo-600 transition ease-linear"
								>
									<button>Panel</button>
								</Link>

								<label>
									{username}
								</label>

								<button name="logout" className="mx-5 delay-75 duration-75 transform hover:text-indigo-600 transition ease-linear" onClick={handleLogout}>
									Çıkış yap
								</button>
							</div>

						) :
							(
								<div>
									<Link
										to="/"
										className="ml-10 delay-75 duration-75 transform hover:text-indigo-600 transition ease-linear"
									>
										<button>Ana sayfa</button>
									</Link>

									<Link
										to="/about"
										className="ml-10 delay-75 duration-75 transform hover:text-indigo-600 transition ease-linear"
									>
										<button>Proje hakkında</button>
									</Link>

									<Link
										to="/prices"
										className="ml-10 delay-75 duration-75 transform hover:text-indigo-600 transition ease-linear"
									>
										<button>Ücretlendirme</button>
									</Link>

									<Link
										to="/login"
										className="ml-10 delay-75 duration-75 transform hover:text-indigo-600 transition ease-linear"
									>
										<button>Giriş yap</button>
									</Link>

									<Link
										to="/register"
										className="border-solid rounded-md border-2 border-gray-100 border-y4	
            mx-10 delay-75 py-1.5 duration-75 transform hover:text-indigo-600 transition ease-linear"
										style={{ hover: { color: "#d9cece" } }}
									>
										<button className="py-2.5 px-2">Kayıt ol</button>
									</Link>
								</div>
							)
					}

				</div>
			</div>
		</div>
	);
}

export default Header;
