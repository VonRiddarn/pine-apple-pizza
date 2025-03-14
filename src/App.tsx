import "./App.scss";
import NameDisplay from "./components/NameDisplay";
import { NameProvider } from "./contexts/NameContext";

function App() {
	return (
		<NameProvider>
			<h1>🌲🍎🍕</h1>
			<p>Nice!</p>
			<NameDisplay />
		</NameProvider>
	);
}

export default App;
