import "./App.scss";
import CurrentUserDisplay from "./components/CurrentUserDisplay";
import ListUsers from "./components/ListUsers";
import { LocalUserProvider } from "./contexts/NameContext/LocalUsersContext";

function App() {
	return (
		<LocalUserProvider>
			<h1>🌲🍎🍕</h1>
			<p>Nice!</p>
			<CurrentUserDisplay />
			<ListUsers />
		</LocalUserProvider>
	);
}

export default App;
