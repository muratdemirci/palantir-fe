import "./App.css";
import Auth from "./components/Auth";
import TweetAnalysis from "./components/TweetAnalysis";
import Footer from "./layouts/Footer";
import Header from "./layouts/Header";

function App() {
	const targets = [
		{
			name: "Visits",
			value: 90,
		},
		{
			name: "Income",
			value: 75,
		},
		{
			name: "Orders",
			value: 50,
		},
	];

	return (
		<div class="App">
			<Header />

			<div className="grid grid-cols-3 gap-8">
				<div
					className="col-span-1 ml-5 p-5 rounded-lg h-48"
					style={{ backgroundColor: "rgb(238, 232, 250)" }}
				>
					<Auth />
				</div>
				<div
					className="col-span-2 mr-5 p-5 rounded-lg"
					style={{ backgroundColor: "rgb(238, 232, 250)" }}
				>
					<TweetAnalysis />
				</div>
			</div>

			<Footer />
		</div>
	);
}

export default App;
