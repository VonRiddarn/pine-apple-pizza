import { useLocalUsersContext } from "../hooks/useLocalUsersContext";

const CurrentUserDisplay = () => {
	const name = useLocalUsersContext();

	return <p>{name || "No user logged in!"}</p>;
};

export default CurrentUserDisplay;
