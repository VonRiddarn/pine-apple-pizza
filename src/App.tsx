import "./App.scss";
import BoxMark from "./components/BoxMark/BoxMark";
import CurrentUserDisplay from "./components/CurrentUserDisplay";
import ExpandingPill from "./components/ExpandingPill/ExpandingPill";
import ExpandingSearch from "./components/ExpandingSearch/ExpandingSearch";
import ListUsers from "./components/ListUsers";
import { LocalUserProvider } from "./contexts/NameContext/LocalUsersContext";

function App() {
	return (
		<LocalUserProvider>
			<ExpandingSearch />
			<ExpandingPill title="Expanding Pill:">This is a pillbox that expands on hover!</ExpandingPill>
			<h1>🌲🍎🍕</h1>
			<p>Nice!</p>
			<CurrentUserDisplay />
			<ListUsers />
			<p>
				This is some text with a <BoxMark>boxmark component</BoxMark> which is cool!
			</p>
		</LocalUserProvider>
	);
}

export default App;
