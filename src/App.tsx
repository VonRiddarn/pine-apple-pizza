import "./App.scss";
import CurrentUserDisplay from "./components/CurrentUserDisplay";
import { LocalUserProvider } from "./contexts/NameContext/LocalUsersContext";

function App() {
	return (
		<LocalUserProvider>
			<h1>🌲🍎🍕</h1>
			<p>Nice!</p>
			<CurrentUserDisplay />
		</LocalUserProvider>
	);
}

export default App;
